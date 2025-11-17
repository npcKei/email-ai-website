import { cn } from '@/lib/utils';
import { memo } from 'react';
import bottomBg from '@/assets/bottom-bg.png';
import useIntlMessage from '@/hooks/useIntlMessage';

const ThinkBetter = () => {
	const message = useIntlMessage();

	return (
		<div className={cn('flex flex-col items-center')}>
			<div className={cn('xl:w-[1400px] w-full')}>
				<h4
					className={cn(
						'text-[#EBF8FF] text-3xl lg:text-5xl text-center',
						'mt-30 mb-8 lg:mt-44 lg:mb-14',
					)}
				>
					{message.Make_Better}
				</h4>
				<p className={cn('text-[#869399] text-base lg:text-xl text-center')}>
					{message.No_Miss_Any_Mission}
				</p>
				<img
					src={bottomBg}
					alt=""
					className="text-full h-[261px] mt-12 lg:mt-28 object-contain"
				/>
			</div>
		</div>
	);
};

export default memo(ThinkBetter);
