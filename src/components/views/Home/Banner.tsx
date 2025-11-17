import { cn } from '@/lib/utils';
import { memo } from 'react';
import bgIcon from '@/assets/bg-title-icon.png';
import playIcon from '@/assets/play-icon.png';
import useIntlMessage from '@/hooks/useIntlMessage';

const Banner = () => {
	const message = useIntlMessage();
	return (
		<div className="w-full">
			<div className={cn('max-xl:w-full w-[1400px] m-auto')}>
				<div
					className={cn(
						'w-full mt-20',
						'bg-[url(@/assets/bg1.png)] bg-no-repeat bg-cover',
					)}
				>
					<div className="flex flex-row justify-center">
						<img src={bgIcon} alt="" className="w-6 h-6 mr-1" />
						<p className="m-0 p-0 gradient-text w-auto">
							{message.New_function}
						</p>
					</div>
					<h3 className="text-[#EBF8FF] max-lg:text-3xl max-xl:text-5xl text-7xl text-center my-9">
						{message.Use_big_modal}
					</h3>
					<h3 className="text-center max-lg:text-3xl max-xl:text-5xl text-7xl">
						<span className="gradient-text2">{message.Few_min}</span>
						<span className="gradient-text2">{message.Production_AI}</span>
						<span className="gradient-text3">{message.Creating}</span>
						<span className="gradient-text3">{message.Unlimited_value}</span>
					</h3>
					<p className="max-lg:text-lg max-lg:px-2 text-xl text-[#869399] mt-11 text-center">
						{message.Function}
					</p>

					<div
						className={cn(
							'w-full h-[calc(100vw_*_0.5)] relative mt-[101px]',
							'bg-[url(@/assets/bg3.png)] bg-no-repeat bg-cover',
						)}
					>
						<img
							src={playIcon}
							alt="play video"
							className="absolute -translate-x-1/2 left-1/2 top-1/2 max-lg:w-14 max-lg:h-14 w-[75px] h-[75px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Banner);
