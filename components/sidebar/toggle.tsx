/** @format */

'use client';

import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';

import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/store/use-sidebar';
import { Skeleton } from '@/components/ui/skeleton';

export const Toggle = () => {
	const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

	const label = collapsed ? 'Expand' : 'Collapse';

	return (
		<>
			{collapsed && (
				<div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
					<Hint
						label={label}
						side="right"
						asChild>
						<Button
							onClick={onExpand}
							className="h-auto p-2 bg-vault-background text-vault-link hover:text-vault-background hover:bg-vault-link rounded-full">
							<ArrowRightFromLine className="h-4 w-4" />
						</Button>
					</Hint>
				</div>
			)}
			{!collapsed && (
				<>
					<div className="flex-row p-3 pl-6 mb-2 flex items-center justify-between w-full">
						<p />
						<Hint
							label={label}
							side="right"
							asChild>
							<Button
								onClick={onCollapse}
								className="h-auto p-2 bg-vault-background text-vault-link hover:text-vault-background hover:bg-vault-link rounded-full">
								<ArrowLeftFromLine className="h-4 w-4" />
							</Button>
						</Hint>
					</div>
				</>
			)}
		</>
	);
};

export const ToggleSkeleton = () => {
	return (
		<div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
			<Skeleton className="h-6 w-[100px]" />
			<Skeleton className="h-6 w-6" />
		</div>
	);
};
