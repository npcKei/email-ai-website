import { Input } from '@/components/ui/input';
import useIntlMessage from '@/hooks/useIntlMessage';

interface UsernameInputProps {
	username: string;
	onUsernameChange: (value: string) => void;
}

const UsernameInput = ({ username, onUsernameChange }: UsernameInputProps) => {
	const message = useIntlMessage();

	return (
		<div className="w-[454px] h-[72px] rounded-xl border border-border-default flex items-center px-6 mb-[42px]">
			<Input
				type="text"
				placeholder={message.enter_username}
				value={username}
				onChange={(e) => onUsernameChange(e.target.value)}
				className="flex-1 bg-transparent text-text-normal text-lg outline-none border-0 h-auto p-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-text-placeholder"
			/>
		</div>
	);
};

export default UsernameInput;
