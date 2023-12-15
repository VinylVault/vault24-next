/** @format */
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LiveBadge } from '@/components/live-badge';

interface UserAvatarProps extends VariantProps<typeof userAvatarStyles> {
	imageURL: string;
	username: string;
	isLive?: boolean;
	showBadge?: boolean;
}

const userAvatarStyles = cva('', {
	variants: {
		size: {
			default: 'h-8 w-8',
			lg: 'h-14 w-14',
		},
	},
	defaultVariants: {
		size: 'default',
	},
});

const UserAvatar = ({
	username,
	imageURL,
	isLive,
	showBadge,
	size,
}: UserAvatarProps) => {
	let canShowBadge = showBadge && isLive;
	return (
		<div className="relative rounded-full">
			<Avatar
				className={cn(
					isLive &&
						'shadow-vault-live shadow-2xl ring-2 ring-vault-live border border-vault-background ring-offset-2 ring-offset-vault-background',
					userAvatarStyles({ size })
				)}>
				<AvatarImage
					src={imageURL}
					alt={username}
					className="rounded-full object-cover"
				/>
			</Avatar>
			{canShowBadge && (
				<div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
					<LiveBadge />
				</div>
			)}
		</div>
	);
};

interface UserAvatarSkeletonProps
	extends VariantProps<typeof userAvatarStyles> {}

export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
	return (
		<Skeleton
			className={cn('rounded-full', userAvatarStyles({ size }))}
		/>
	);
};

export default UserAvatar;
