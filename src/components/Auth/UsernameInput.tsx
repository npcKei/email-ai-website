import useIntlMessage from '@/hooks/useIntlMessage';

interface UsernameInputProps {
	username: string;
	onUsernameChange: (value: string) => void;
}

const UsernameInput = ({ username, onUsernameChange }: UsernameInputProps) => {
	const message = useIntlMessage();

	return (
		<div className="w-[454px] h-[72px] rounded-xl border border-[#292F3A] flex items-center px-6 mb-[42px]">
			<input
				type="text"
				placeholder={message.enter_username}
				value={username}
				onChange={(e) => onUsernameChange(e.target.value)}
				className="flex-1 bg-transparent text-theme-normal text-lg outline-none placeholder:text-theme-normal"
			/>
		</div>
	);
};

export default UsernameInput;
