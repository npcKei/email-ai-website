import { cn } from '@/lib/utils';
import { memo } from 'react';
import flashIcon from '@/assets/flash-icon.png';
import logoGrey from '@/assets/logo-grey.png';
import icon1 from '@/assets/icon1.png';
import icon2 from '@/assets/icon2.png';
import icon3 from '@/assets/icon3.png';
import icon4 from '@/assets/icon4.png';
import useIntlMessage from '@/hooks/useIntlMessage';

const Model = () => {
	const message = useIntlMessage();
	const list = [
		{
			icon: icon1,
			title: message.Data_Build,
			content: message.Data_Build_2,
		},
		{
			icon: icon2,
			title: message.Modal_Micro,
			content: message.Modal_Micro_2,
		},
		{
			icon: icon3,
			title: message.Modal_Judge,
			content: message.Modal_Judge_2,
		},
		{
			icon: icon4,
			title: message.Modal_Deploy,
			content: message.Modal_Deploy_2,
		},
	];
	return (
		<div className="w-full">
			<div
				className={cn(
					'xl:max-w-[1400px] m-auto',
					'pt-10 lg:pt-[242px] px-10 lg:pl-[74px]',
					'lg:bg-[url(@/assets/bg4.png)] bg-no-repeat lg:bg-[length:1400px_621px]',
					'',
				)}
			>
				<img
					src={flashIcon}
					alt="icon"
					className={cn('w-18 h-18 lg:w-20 lg:h-20', 'mb-8 lg:mb-16')}
				/>
				<p>
					<span className="text-[#EBF8FF] text-3xl lg:text-5xl">
						{message.Business}
					</span>
					<span className="gradient-text4 text-3xl lg:text-5xl">
						{message.AI_Modal}
					</span>
				</p>
				<p className="text-xl text-[#869399] mt-6 lg:mt-8">
					{message.Perfect_feel}
				</p>
				<div className="hidden lg:flex flex-row items-center justify-end mt-5 mr-[152px]">
					<span className="text-xl text-[#869399]">
						{message.Push_any_time}
					</span>
					<img src={logoGrey} alt="" className="h-[39px] w-[39px] mx-3" />
					<span className="text-xl text-[#869399]">{message.Starting}</span>
				</div>
				<ul
					className={cn(
						'grid lg:grid-cols-4 lg:gap-x-[30px] mt-5',
						'grid-cols-1 gap-y-2.5',
					)}
				>
					{list.map((item) => (
						<li
							key={item.title}
							className={cn(
								'border border-[#292F3A] rounded-xl ',
								'lg:w-[297px] p-6 w-full',
								'gradient-bg-hover transition-all delay-75',
							)}
						>
							<img src={item.icon} alt="" className="w-8 h-8" />
							<p className="text-[#EBF8FF] text-3xl lg:text-[34px] mt-6 lg:mt-[26px] mb-6 lg:mb-[28px]">
								{item.title}
							</p>
							<span className="text-[#869399] text-xl lg:text-2xl">
								{item.content}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default memo(Model);
