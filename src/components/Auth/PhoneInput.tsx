import { Input } from '@/components/ui/input';
import useIntlMessage from '@/hooks/useIntlMessage';

interface PhoneInputProps {
	phoneNumber: string;
	onPhoneNumberChange: (value: string) => void;
}

const PhoneInput = ({
	phoneNumber,
	onPhoneNumberChange,
}: PhoneInputProps) => {
	const message = useIntlMessage();

	return (
		<div className="w-[454px] h-[72px] rounded-xl border border-border-default flex items-center px-6 mb-[42px]">
			<span className="text-text-normal text-lg">+86</span>
			<div className="w-px h-8 mx-4 bg-border-default"></div>
			<Input
				type="tel"
				placeholder={message.phone_number}
				value={phoneNumber}
				onChange={(e) => onPhoneNumberChange(e.target.value)}
				className="flex-1 bg-transparent text-text-normal text-lg outline-none border-0 h-auto p-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-text-placeholder"
			/>
		</div>
	);
};

export default PhoneInput;
