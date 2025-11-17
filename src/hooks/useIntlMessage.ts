import { useMemo } from 'react';
import { useIntl } from 'react-intl';

const useIntlMessage = () => {
	const intl = useIntl();

	const message = useMemo(() => intl.messages, [intl.messages]);

	return message as Record<string, string>;
};
export default useIntlMessage;
