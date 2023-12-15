/** @format */

import { db } from '@/lib/db';
import { UserService } from '@/lib/auth-service';

export const getRecommended = async () => {
	const users = await db.userAccounts.findMany({
		where: {
			userAccountAdministrator: true,
			userAccountIsLive: true,
		},
		orderBy: {
			createdAt: 'desc',
		},
	});

	return users;
};
