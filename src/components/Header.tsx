import { memo, useCallback, useMemo } from 'react';
import logo2 from '../assets/logo2.png';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from './ui/select';
import { cn } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarTrigger } from './ui/sidebar';
import useIntlMessage from '@/hooks/useIntlMessage';

const Header = () => {
	const message = useIntlMessage();
	const navigate = useNavigate();
	const list = useMemo(
		() => [
			{
				name: message.Home,
				url: '/',
			},
			{
				name: message.Production_Server,
				url: '/#',
				isSelect: false,
				isDisabled: true,
			},
			{
				name: message.Modal_Data,
				url: '/down',
				isSelect: false,
			},
			{
				name: message.Contact_US,
				url: '/#',
				isSelect: false,
				isDisabled: true,
			},
		],
		[message],
	);

	const pathname = window.location.pathname;
	const lan = window.localStorage.getItem('lan');

	const chooseItem = useCallback((v: any) => {
		switch (v) {
			case '中文':
				window.localStorage.setItem('lan', 'zh');
				window.location.reload();
				break;
			case 'English':
				window.localStorage.setItem('lan', 'en');
				window.location.reload();
				break;
			default:
				window.localStorage.setItem('lan', 'zh');
				window.location.reload();
				break;
		}
	}, []);

	return (
		<header className="flex flex-row justify-between items-center w-[100%] h-20 lg:h-28 bg-[#12151B] px-5 lg:px-14">
			<div className="flex flex-row items-center">
				<img src={logo2} alt="智乾未来" className="w-[72px] h-[72px]" />
				<p
					className={cn(
						'text-white',
						'ml-5',
						lan === 'en' ? ' text-xl' : 'text-[40px]',
					)}
				>
					{message.logo}
				</p>
			</div>

			<div className="flex flex-row items-center gap-x-[60px]">
				<ul
					className={cn(
						'flex flex-row gap-x-20 items-center bg-[#12151B]',
						'border border-solid border-[#292F3A] text-[#BFD0D9]',
						'rounded-4xl h-14 px-7',
						'max-lg:hidden max-lg:bottom-8 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:z-20',
					)}
				>
					{list.map((item) => (
						<li
							key={item.name + '-' + item.url}
							className={cn(
								'break-keep w-fit',
								pathname === item.url ? 'text-theme-primary' : '',
								item.isDisabled ? 'opacity-45 cursor-not-allowed' : '',
							)}
						>
							{item.isDisabled ? (
								item.name
							) : (
								<Link to={item.url}>{item.name}</Link>
							)}
						</li>
					))}
				</ul>
				<div className="flex flex-row items-center">
					<Select onValueChange={chooseItem}>
						<SelectTrigger className="w-auto border-none text-white">
							<SelectValue
								placeholder={lan === 'en' ? 'English' : '中文'}
								className="text-xl"
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="中文">中文</SelectItem>
							<SelectItem value="English">English</SelectItem>
						</SelectContent>
					</Select>
					<SidebarTrigger className="text-white lg:hidden" />
				</div>
			</div>
			<div className="flex flex-row items-center gap-x-10">
				<button
					onClick={() => navigate('/register')}
					className="flex items-center gap-x-2 text-[#BFD0D9] hover:text-theme-primary transition-colors duration-200"
				>
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
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
						<circle cx="12" cy="7" r="4"></circle>
					</svg>
					<span>{message.register}</span>
				</button>
				<button
					onClick={() => navigate('/register')}
					className="text-[#BFD0D9] hover:text-theme-primary transition-colors duration-200"
				>
					{message.free_trial}
				</button>
			</div>
		</header>
	);
};

export default memo(Header);
