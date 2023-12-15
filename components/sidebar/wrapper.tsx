/** @format */
'use client';

import { useSidebar } from '@/store/use-sidebar';
import { cn } from '@/lib/utils';

interface WrapperProps {
	children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
	const { collapsed } = useSidebar((state) => state);
	return (
		<aside
			className={cn(
				'fixed flex flex-col pt-20 w-60 bg-vault-background h-full left-0 border-r-2 border-vault-border shadow-xl shadow-vault-border z-50',
				collapsed && 'w-20'
			)}>
			{children}
		</aside>
	);
};
