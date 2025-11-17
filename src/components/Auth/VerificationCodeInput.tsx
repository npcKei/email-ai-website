import { useState, useEffect } from 'react';
import useIntlMessage from '@/hooks/useIntlMessage';
import { Input } from '@/components/ui/input';

interface VerificationCodeInputProps {
	verificationCode: string;
	onVerificationCodeChange: (value: string) => void;
	onGetCode: () => void | Promise<void>;
}

const VerificationCodeInput = ({
	verificationCode,
	onVerificationCodeChange,
	onGetCode,
}: VerificationCodeInputProps) => {
	const message = useIntlMessage();
	const [countdown, setCountdown] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (countdown > 0) {
			const timer = setTimeout(() => {
				setCountdown(countdown - 1);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [countdown]);

	const handleGetCode = async () => {
		if (countdown > 0 || isLoading) return;

		setIsLoading(true);
		try {
			await onGetCode();
			setCountdown(60); // 60秒倒计时
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-[454px] h-[72px] rounded-xl border border-border-default flex items-center px-6 mb-[42px]">
			<Input
				type="text"
				placeholder={message.verification_code}
				value={verificationCode}
				onChange={(e) => onVerificationCodeChange(e.target.value)}
				className="flex-1 bg-transparent text-text-normal text-lg outline-none border-0 h-auto p-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-text-placeholder"
			/>
			<button
				onClick={handleGetCode}
				disabled={countdown > 0 || isLoading}
				className="ml-4 text-lg hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
			>
				{isLoading ? (
					<span className="text-text-normal">{message.sending}</span>
				) : countdown > 0 ? (
					<span className="text-text-normal">
						{message.resend}(
						<span className="text-theme-primary">{countdown}s</span>)
					</span>
				) : (
					<span className="text-theme-primary">{message.get_code}</span>
				)}
			</button>
		</div>
	);
};

export default VerificationCodeInput;
