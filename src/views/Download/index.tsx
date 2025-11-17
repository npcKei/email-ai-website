import { cn } from '@/lib/utils';
import DownIcon from '@/assets/down-icon.png';
import useIntlMessage from '@/hooks/useIntlMessage';
import bgIcon from '@/assets/bg-title-icon.png';
import Header from '../../components/Header';
import Footer from '@/components/Footer';
import IOS from '@/assets/ios.png';
import And from '@/assets/and.png';

const Download = () => {
	const message = useIntlMessage();

	return (
		<div className="w-full">
			<Header></Header>
			<div
				className={cn(
					'max-xl:w-full w-[1400px] m-auto mt-20 lg:mt-28',
					'bg-[url(@/assets/down-2.png)] bg-no-repeat bg-[length:1400px_471px] bg-top',
					'flex flex-col items-center',
				)}
			>
				<img
					src={DownIcon}
					alt=""
					className={cn('w-18 h-18 lg:w-20 lg:h-20', 'mt-28 mx-auto lg:mb-16')}
				/>

				<div
					className={cn(
						'flex flex-row justify-center gradient-border w-fit',
						'px-2.5 my-10 lg:my-20',
					)}
				>
					<img src={bgIcon} alt="" className="w-6 h-6 mr-1" />
					<p className="m-0 p-0 gradient-text w-auto">{message.New_function}</p>
				</div>
				<p className="text-[#CECFE0] text-center text-2xl lg:text-[42px]">
					{message.about1}
				</p>
				<p className="gradient-text2 text-center text-2xl lg:text-[42px] my-4 lg:my-9">
					{message.about2}
				</p>
				<p className="gradient-text3 text-center text-2xl lg:text-[42px]">
					{message.about3}
				</p>
			</div>
			<div
				className={cn(
					'flex flex-col md:flex-row justify-center gap-y-5 md:gap-x-[100px] lg:gap-x-[403px]',
					'mt-10 lg:mt-[161px] mb-16 lg:mb-[200px]',
				)}
			>
				<div
					className={cn(
						'w-auto mx-4 md:w-[297px] h-[282px] rounded-xl',
						'flex flex-col items-center justify-center',
						'border border-[#292F3A]',
					)}
				>
					<img src={IOS} alt="" className="w-14 h-14" />
					<span className="text-theme-primary text-3xl mt-[34px] mb-10">
						IOS
					</span>
					<a
						href="#"
						className={cn(
							'w-[180px] h-10 text-center leading-10',
							'text-[#BFD0D9] text-xl rounded-3xl',
							'border border-[#292F3A]',
						)}
					>
						{message.down}
					</a>
				</div>
				<div
					className={cn(
						'w-auto mx-4 md:w-[297px] h-[282px] rounded-xl',
						'flex flex-col items-center justify-center',
						'border border-[#292F3A]',
					)}
				>
					<img src={And} alt="" className="w-14 h-14" />
					<span className="text-theme-primary text-3xl mt-[34px] mb-10">
						IOS
					</span>
					<a
						href="#"
						className={cn(
							'w-[180px] h-10 text-center leading-10',
							'text-[#BFD0D9] text-xl rounded-3xl',
							'border border-[#292F3A]',
						)}
					>
						{message.down}
					</a>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Download;
