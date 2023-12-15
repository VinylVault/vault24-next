/** @format */

import { cn } from '@/lib/utils';

interface LiveBadgeProps {
	className?: string;
}

export const LiveBadge = ({ className }: LiveBadgeProps) => {
	return (
		<div
			className={cn(
				'text-center uppercase tracking-wide p-0.5 px-1.5 bg-vault-live rounded-full text-vault-text',
				className
			)}>
			Live
		</div>
	);
};
