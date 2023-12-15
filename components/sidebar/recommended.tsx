/** @format */

'use client';

import { useSidebar } from '@/store/use-sidebar';
import { UserAccounts } from '@prisma/client';
import UserItem from './userItem';

interface RecommendedProps {
	data: UserAccounts[];
}

const Recommended = ({ data }: RecommendedProps) => {
	const { collapsed } = useSidebar((state) => state);

	const showLabel = !collapsed && data.length > 0;

	return (
		<div>
			{showLabel && (
				<div className="pl-4 mb-4">
					<p className="text-vault-title font-title text-lg">
						{' '}
						Enjoy The Vinyl Vault{' '}
					</p>
				</div>
			)}
			<ul className="space-y-2 px-2">
				{data.map((user) => (
					<UserItem
						key={user.userAccountClerkId}
						username={user.userAccountUserName}
						imageURL={user.userAccountimageUrl}
						isLive={true}
					/>
				))}
			</ul>
		</div>
	);
};

export default Recommended;
