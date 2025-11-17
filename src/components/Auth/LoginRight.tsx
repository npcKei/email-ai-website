import useIntlMessage from '@/hooks/useIntlMessage';
import loginBg from '@/assets/login/login-bg.png';
import bgIcon from '@/assets/bg-title-icon.png';

const LoginRight = () => {
	const message = useIntlMessage();

	return (
		<div className="w-1/2 flex items-center justify-center relative bg-[#000]">
			<div className="relative">
				<img
					src={loginBg}
					alt="login"
					className="w-[780px] h-[254px] mx-auto"
				/>
				<div className="absolute left-1/2 -translate-x-1/2 bottom-[-38px] h-[42px] px-[37px] flex items-center border border-[#292F3A] rounded-full">
					<img src={bgIcon} alt="" className="w-6 h-6 mr-3" />
					<p className="text-lg m-0 whitespace-nowrap gradient-text">
						{message.New_function}
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginRight;

