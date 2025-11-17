import { useState } from 'react';
import { cn } from '@/lib/utils';
import useIntlMessage from '@/hooks/useIntlMessage';
import logo2 from '@/assets/logo2.png';
import LoginRight from '@/components/Auth/LoginRight';
import PhoneInput from '@/components/Auth/PhoneInput';
import VerificationCodeInput from '@/components/Auth/VerificationCodeInput';
import UsernameInput from '@/components/Auth/UsernameInput';
import { useNavigate } from 'react-router-dom';
import { sendRegisterCode, registerByPhone } from '@/api/auth';
import { useToast } from '@/components/ui/toast';

interface RegisterProps {
	onClose?: () => void;
}

const Register = ({ onClose }: RegisterProps) => {
	const navigate = useNavigate();
	const message = useIntlMessage();
	const { showToast } = useToast();
	const [username, setUsername] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [verificationCode, setVerificationCode] = useState('');
	const [agreed, setAgreed] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleGetCode = async () => {
		if (!phoneNumber) {
			showToast(message.enter_phone, 'error');
			return;
		}
		try {
			await sendRegisterCode(phoneNumber);
			showToast(message.code_sent, 'success');
		} catch (error) {
			console.error(error);
			showToast(message.send_code_failed, 'error');
		}
	};

	const handleRegister = async () => {
		if (!username || !phoneNumber || !verificationCode) {
			showToast(message.fill_all_fields, 'error');
			return;
		}
		if (!agreed) {
			showToast(message.agree_policy, 'error');
			return;
		}
		try {
			setLoading(true);
			await registerByPhone({
				phone: phoneNumber,
				code: verificationCode,
				name: username,
			});
			showToast(message.register_success, 'success');
			navigate('/');
		} catch (error) {
			console.error(error);
			showToast(message.register_failed, 'error');
		} finally {
			setLoading(false);
		}
	};

	const handleClose = () => {
		if (onClose) {
			onClose();
		} else {
			navigate(-1);
		}
	};

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
			onClick={handleClose}
		>
			<div
				className="w-full h-full bg-bg-dark flex"
				onClick={(e) => e.stopPropagation()}
			>
				{/* 左边部分 */}
				<div className="w-1/2 flex flex-col items-center justify-center px-20">
					{/* Logo */}
					<div className="flex flex-row items-center mb-[57px]">
						<img src={logo2} alt="logo" className="w-[72px] h-[72px]" />
						<p className="text-text-white text-[40px] ml-[15px]">
							{message.logo}
						</p>
					</div>

					{/* 用户名输入 */}
					<UsernameInput username={username} onUsernameChange={setUsername} />

					{/* 手机号输入 */}
					<PhoneInput
						phoneNumber={phoneNumber}
						onPhoneNumberChange={setPhoneNumber}
					/>

					{/* 验证码输入 */}
					<VerificationCodeInput
						verificationCode={verificationCode}
						onVerificationCodeChange={setVerificationCode}
						onGetCode={handleGetCode}
					/>

					{/* 协议部分 */}
					<div className="flex items-center mb-[42px]">
						<label className="flex items-center cursor-pointer">
							<input
								type="checkbox"
								checked={agreed}
								onChange={(e) => setAgreed(e.target.checked)}
								className="hidden"
							/>
							<div
								className={cn(
									'w-5 h-5 rounded border border-border-default bg-bg-input mr-[17px] flex items-center justify-center transition-colors',
								)}
							>
								{agreed && (
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 7L5.5 10.5L12 3.5"
											stroke="#47B0C2"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)}
							</div>
						</label>
						<span className="text-text-white text-lg">
							{message.agree_text}
						</span>
						<span className="text-text-normal text-lg ml-1">
							{message.user_agreement}
						</span>
						<span className="text-text-normal text-lg ml-1">
							{message.privacy_policy}
						</span>
					</div>

					{/* 登录入口 */}
					{/* <div className="flex items-center justify-center mb-6">
						<span className="text-text-normal text-base">
							{message.have_account}
						</span>
						<Link
							to="/login"
							className="text-theme-primary text-base ml-2 hover:opacity-80 transition-opacity"
						>
							{message.go_login}
						</Link>
					</div> */}

					{/* 注册按钮 */}
					<button
						onClick={handleRegister}
						disabled={loading || !username || !verificationCode}
						className="w-[454px] h-16 bg-gradient-button rounded-xl text-text-white text-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{loading ? message.registering : message.register}
					</button>
				</div>

				{/* 右边部分 */}
				<LoginRight />
			</div>
		</div>
	);
};

export default Register;
