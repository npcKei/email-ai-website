import { cn } from '@/lib/utils';
import { memo, useCallback } from 'react';
import logo2 from '@/assets/logo2.png';
import qr from '@/assets/qr.png';
import useIntlMessage from '@/hooks/useIntlMessage';

const Footer = () => {
	const message = useIntlMessage();
	const urls = [
		{
			name: message.Production_Server,
			link: '#',
		},
		{
			name: message.Modal_Data,
			link: '#',
		},
		{
			name: message.Contact_US,
			link: '#',
		},
	];

	const texts = [
		{
			name: message.Phone,
			content: '+86 - 18571374015',
		},
		{
			name: message.Email,
			content: '328195625@qq.com',
		},
		{
			name: message.Address,
			content: '湖北省荆州市沙市区安良国际2402',
		},
		// {
		// 	name: message.WebSite,
		// 	content: 'https://www.zqagi.com/',
		// },
	];
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

	const lan = window.localStorage.getItem('lan');

	return (
		<div
			className={cn(
				'bg-[#000000] border-t border-t-[#12151B]',
				'flex flex-col items-center',
				'pb-10 box-content',
			)}
		>
			<div
				className={cn(
					'xl:w-[1400px] w-full max-lg:px-4 pt-14 lg:pt-20',
					'grid grid-cols-2 lg:grid-cols-3 max-lg:gap-y-4',
				)}
			>
				<div className="max-lg:col-span-2">
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

					<div className="w-full lg:w-max max-lg:flex max-sm:flex-col max-lg:flex-row max-lg:items-end max-sm:items-start max-lg:justify-between">
						<p
							className={cn(
								'text-[#869399]',
								'text-sm',
								'lg:mt-20 lg:mb-10',
								'leading-9',
							)}
						>
							Copyright ©2024 {message.cp}
							<br /> All right reserved .{message.ICP}
						</p>
						<img alt="qr code" src={qr} className="w-28 h-28 lg:m-auto" />
					</div>
				</div>
				<div className="flex flex-col items-start lg:items-center">
					<h5 className="text-white text-base lg:text-xl mb-5 lg:mb-8">
						Qicuk Link
					</h5>
					<ul className="grid grid-cols-1 gap-y-3.5">
						{urls.map((item) => (
							<li
								className="text-[#BFD0D9] text-lg hover:text-theme-primary"
								key={item.name}
							>
								<a href={item.link} target="__blank">
									{item.name}
								</a>
							</li>
						))}

						<li className="text-[#BFD0D9] text-lg hover:text-theme-primary">
							<span onClick={chooseItem.bind(this, 'cn')}>中文</span>
						</li>
						<li className="text-[#BFD0D9] text-lg hover:text-theme-primary">
							<span onClick={chooseItem.bind(this, 'en')}>EN</span>
						</li>
					</ul>
				</div>
				<div className="flex justify-end">
					<div className="grid grid-cols-1 gap-x-12 w-fit h-full">
						{texts.map((item) => (
							<div key={item.name}>
								<p className="text-white text-base lg:text-xl">
									{item.content}
								</p>
								<span className="text-[#869399] text-sm lg:text-base mt-3 lg:mt-5">
									{item.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Footer);
