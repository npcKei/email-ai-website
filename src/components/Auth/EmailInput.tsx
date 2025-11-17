import useIntlMessage from '@/hooks/useIntlMessage';

interface EmailInputProps {
	email: string;
	onEmailChange: (value: string) => void;
}

const EmailInput = ({ email, onEmailChange }: EmailInputProps) => {
	const message = useIntlMessage();

	return (
		<div className="w-[454px] h-[72px] rounded-xl border border-[#292F3A] flex items-center px-6 mb-[42px]">
			<input
				type="email"
				placeholder={message.enter_email}
				value={email}
				onChange={(e) => onEmailChange(e.target.value)}
				className="flex-1 bg-transparent text-theme-normal text-lg outline-none placeholder:text-theme-normal"
			/>
		</div>
	);
};

export default EmailInput;
