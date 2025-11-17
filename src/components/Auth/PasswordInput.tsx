import { useState } from 'react';
import useIntlMessage from '@/hooks/useIntlMessage';

interface PasswordInputProps {
	password: string;
	onPasswordChange: (value: string) => void;
}

const PasswordInput = ({ password, onPasswordChange }: PasswordInputProps) => {
	const message = useIntlMessage();
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="w-[454px] h-[72px] rounded-xl border border-[#292F3A] flex items-center px-6 mb-[42px]">
			<input
				type={showPassword ? 'text' : 'password'}
				placeholder={message.enter_password}
				value={password}
				onChange={(e) => onPasswordChange(e.target.value)}
				className="flex-1 bg-transparent text-theme-normal text-lg outline-none placeholder:text-theme-normal"
			/>
			<button
				onClick={() => setShowPassword(!showPassword)}
				className="ml-4 text-theme-primary hover:opacity-80 transition-opacity"
				type="button"
			>
				{showPassword ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
						<line x1="1" y1="1" x2="23" y2="23"></line>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
						<circle cx="12" cy="12" r="3"></circle>
					</svg>
				)}
			</button>
		</div>
	);
};

export default PasswordInput;
