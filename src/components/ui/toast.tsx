import React, { createContext, useContext, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
	id: string;
	message: string;
	type: ToastType;
}

interface ToastContextType {
	showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within ToastProvider');
	}
	return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [toasts, setToasts] = useState<Toast[]>([]);

	const showToast = useCallback((message: string, type: ToastType = 'info') => {
		const id = Math.random().toString(36).substr(2, 9);
		const newToast: Toast = { id, message, type };

		setToasts((prev) => [...prev, newToast]);

		// Auto remove after 3 seconds
		setTimeout(() => {
			setToasts((prev) => prev.filter((toast) => toast.id !== id));
		}, 3000);
	}, []);

	const removeToast = (id: string) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	};

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			<div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2">
				{toasts.map((toast) => (
					<div
						key={toast.id}
						className={cn(
							'min-w-[300px] rounded-xl px-6 py-4 shadow-lg',
							'backdrop-blur-sm border',
							'animate-in slide-in-from-top-2 fade-in',
							'transition-all duration-300',
							toast.type === 'success' &&
								'bg-[#1a2a1a] border-[#47B0C2] text-white',
							toast.type === 'error' &&
								'bg-[#2a1a1a] border-[#ef4444] text-white',
							toast.type === 'info' &&
								'bg-[#12151B] border-[#292F3A] text-white',
						)}
						onClick={() => removeToast(toast.id)}
					>
						<div className="flex items-center gap-3">
							{toast.type === 'success' && (
								<svg
									className="w-5 h-5 text-[#47B0C2]"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							)}
							{toast.type === 'error' && (
								<svg
									className="w-5 h-5 text-[#ef4444]"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
							{toast.type === 'info' && (
								<svg
									className="w-5 h-5 text-theme-primary"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							)}
							<p className="text-base">{toast.message}</p>
						</div>
					</div>
				))}
			</div>
		</ToastContext.Provider>
	);
};
