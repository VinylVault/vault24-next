/** @format */

'use client';

import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';

import { useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';

/** @format */

interface ContainerProps {
	children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
	const matches = useMediaQuery('(min-width: 1024px)');
	const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);
	useEffect(() => {
		if (matches) {
			onExpand();
		} else {
			onCollapse();
		}
	}, [matches, onCollapse, onExpand]);
	return (
		<div className={cn('flex-1', collapsed ? 'ml-20' : 'ml-20 lg:ml-60')}>
			{children}
		</div>
	);
};
