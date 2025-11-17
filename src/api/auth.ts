// 认证相关 API

interface SendCodeParams {
	phone: string;
	type: 'register' | 'login';
}

interface RegisterPhoneParams {
	phone: string;
	code: string;
	name: string;
}

interface LoginPhoneParams {
	phone: string;
	code: string;
}

interface ApiResponse<T = any> {
	data: T;
	message: string;
	status: string;
}

/**
 * 发送注册短信验证码
 * @param params - {phone, type: 'register'}
 * @returns Promise
 */
export const sendRegisterCode = async (
	phone: string,
): Promise<ApiResponse> => {
	const response = await fetch('/api/auth/register/phone/send-code', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ phone, type: 'register' }),
	});

	if (!response.ok) {
		throw new Error('发送验证码失败');
	}

	return response.json();
};

/**
 * 发送登录短信验证码
 * @param params - {phone, type: 'login'}
 * @returns Promise
 */
export const sendLoginCode = async (phone: string): Promise<ApiResponse> => {
	const response = await fetch('/api/auth/login/phone/send-code', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ phone, type: 'login' }),
	});

	if (!response.ok) {
		throw new Error('发送验证码失败');
	}

	return response.json();
};

/**
 * 手机号注册
 * @param params - 注册参数 {phone, code, name}
 * @returns Promise
 */
export const registerByPhone = async (
	params: RegisterPhoneParams,
): Promise<ApiResponse> => {
	const response = await fetch('/api/auth/register/phone', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(params),
	});

	if (!response.ok) {
		throw new Error('注册失败');
	}

	return response.json();
};

/**
 * 手机号登录
 * @param params - 登录参数 {phone, code}
 * @returns Promise
 */
export const loginByPhone = async (
	params: LoginPhoneParams,
): Promise<ApiResponse> => {
	const response = await fetch('/api/auth/login/phone', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(params),
	});

	if (!response.ok) {
		throw new Error('登录失败');
	}

	return response.json();
};

