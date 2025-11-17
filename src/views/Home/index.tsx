import { memo } from 'react';
import Header from '../../components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/views/Home/Banner';
import Model from '@/components/views/Home/Model';
import AboutUS from '@/components/views/Home/AboutUS';
import ThinkBetter from '@/components/views/Home/ThinkBetter';
import { cn } from '@/lib/utils';
import useIntlMessage from '@/hooks/useIntlMessage';

const Home = () => {
	const message = useIntlMessage();
	return (
		<div className="h-full w-full">
			<Header></Header>
			<Banner />
			<div className="flex flex-col items-center max-md:px-5">
				<p className="max-md:mt-8 max-lg:mt-32 mt-[189px] text-[#869399] max-md:text-sm text-xl text-left xl:w-[885px] w-full max-lg:text-center">
					{message.Home_1}
				</p>
				<p className="mb-4 text-[#869399] max-md:text-sm text-xl text-left xl:w-[885px] w-full max-lg:text-center">
					{message.Home_2}
				</p>
			</div>
			<Model />
			<AboutUS />
			<ThinkBetter />
			<Footer />
			<div
				className={cn(
					'flex fle-row justify-center bg-[#171A22] items-center',
					'h-10 gap-x-12 lg:gap-x-24',
					'text-[#869399] text-base',
				)}
			>
				<span>{message.schema_1}</span>
				<span>{message.schema_2}</span>
				<span>{message.schema_3}</span>
			</div>
		</div>
	);
};

export default memo(Home);
