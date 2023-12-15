/** @format */

import { Logo } from '@/app/(auth)/_components/logo';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="items-center justify-center h-full w-full flex flex-col">
			<Logo />
			{children}
		</div>
	);
};

export default AuthLayout;
