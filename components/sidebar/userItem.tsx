/** @format */

'use client';

import { useSidebar } from '@/store/use-sidebar';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import UserAvatar from '@/components/userAvatar';

interface UserItemProps {
	username: string;
	imageURL: string;
	isLive?: boolean;
}

const UserItem = ({ username, imageURL, isLive }: UserItemProps) => {
	const pathname = usePathname();
	const { collapsed } = useSidebar((state) => state);

	const href = `/on_air`;
	const isActive = pathname === href;

	return (
		<Button
			className={cn(
				'w-full h-12 bg-transparent rounded-full hover:bg-vault-live hover:text-vault-text',
				collapsed
					? 'justify-center rounded-full'
					: 'justify-start rounded-full',
				isLive && 'shadow-vault-live shadow-2xl'
			)}>
			<Link href={href}>
				<div
					className={cn(
						'flex items-center w-full gap-x-4 rounded-full bg-transparent',
						collapsed && 'justify-center rounded-full'
					)}>
					<UserAvatar
						imageURL={imageURL}
						username={username}
						isLive={isLive}
					/>
					{!collapsed && (
						<p className="text-vault-text truncate">
							Show On Air
						</p>
					)}
				</div>
			</Link>
		</Button>
	);
};

export default UserItem;
