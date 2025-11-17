import { cn } from '@/lib/utils';
import { memo } from 'react';
import helpIcon from '@/assets/help-icon.png';
import logoGrey from '@/assets/logo-grey.png';
import help1 from '@/assets/help1.png';
import help2 from '@/assets/help2.png';
import help3 from '@/assets/help3.png';
import help4 from '@/assets/help4.png';
import useIntlMessage from '@/hooks/useIntlMessage';

const AboutUs = () => {
	const message = useIntlMessage();
	const list = [
		{
			icon: help1,
			title: message.Custom_Modal,
			content: (
				<span>
					{message.Custom_Modal_1}
					<br />
					{message.Custom_Modal_2} <br />
					{message.Custom_Modal_3}
				</span>
			),
		},
		{
			icon: help2,
			title: message.Handle_Modal,
			content: (
				<span>
					{message.Handle_Modal_1}
					<br />
					{message.Handle_Modal_2} <br />
					{message.Handle_Modal_3}
				</span>
			),
		},
		{
			icon: help3,
			title: message.AI_App_dev,
			content: (
				<span>
					{message.AI_App_dev}
					<br /> {message.AI_App_1} <br />
					{message.AI_App_2}
				</span>
			),
		},
		{
			icon: help4,
			title: message.Modal_open,
			content: (
				<span>
					{message.Modal_open_1}
					<br />
					{message.Modal_open_2} <br />
					{message.Modal_open_3}
				</span>
			),
		},
	];
	return (
		<div className={cn('mt-8 lg:mt-52', 'flex flex-col items-center')}>
			<div className={cn('xl:w-[1400px] w-full')}>
				<div
					className={cn(
						'flex flex-col items-center',
						'w-full h-auto lg:h-[calc(100vw_*_0.336)]',
						'bg-[url(@/assets/help-bg.png)] bg-no-repeat bg-[length:100%]',
					)}
				>
					<img
						src={helpIcon}
						alt=""
						className="w-18 h-18 mt-20 lg:w-24 lg:h-24 lg:mt-28"
					/>
					<h4
						className={cn(
							'text-[#EBF8FF] text-3xl max-lg:text-5xl',
							'mt-14 mb-6',
						)}
					>
						{message.What_do_we_do_1}
					</h4>
					<p className="gradient-text4 text-3xl lg:text-5xl">
						{message.What_do_we_do}
					</p>

					<div className="flex flex-row items-center justify-end mt-7">
						<span className="text-lg lg:text-xl text-[#869399]">
							{message.Push_any_time}
						</span>
						<img
							src={logoGrey}
							alt=""
							className="w-6 h-6 lg:h-[39px] lg:w-[39px] mx-3"
						/>
						<span className="text-lg lg:text-xl text-[#869399]">
							{message.Starting}
						</span>
					</div>
				</div>

				<ul
					className={cn(
						'mt-8 xl:w-[1400px] w-full',
						'grid md:grid-cols-2 md:grid-rows-2 grid-rows-4 grid-cols-1 max-md:gap-y-4',
						'md:bg-[url(@/assets/help-bg-bottom.png)] bg-no-repeat bg-[length:100%]',
					)}
				>
					{list.map((item) => (
						<li
							className={cn(
								'flex flex-col items-center',
								'w-full md:h-[calc(100vw_*_0.238)] h-fit',
							)}
							key={item.title}
						>
							<img className="w-10 h-auto" src={item.icon} />
							<h4 className="text-[#EBF8FF] md:text-4xl text-xl md:my-8 my-4">
								{item.title}
							</h4>
							<span className="text-left text-[#869399] md:text-2xl text-lg">
								{item.content}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default memo(AboutUs);
