import { RouterProvider } from 'react-router-dom';
import router from './router';
import 'intl';
import { IntlProvider } from 'react-intl';
import { SidebarProvider } from '@/components/ui/sidebar';
import { ToastProvider } from '@/components/ui/toast';

import enMessages from '@/locales/en.json';
import zhMessages from '@/locales/zh.json';
import { AppSidebar } from './components/app-sidebar';

const messages = {
	en: enMessages,
	zh: zhMessages,
};

function App() {
	const language = window.localStorage.getItem('lan') ?? 'zh';
	return (
		<>
			<IntlProvider
				locale={language}
				messages={messages[language as 'zh' | 'en']}
			>
				<ToastProvider>
					<SidebarProvider>
						<AppSidebar />
						<RouterProvider router={router} />
					</SidebarProvider>
				</ToastProvider>
			</IntlProvider>
		</>
	);
}

export default App;
