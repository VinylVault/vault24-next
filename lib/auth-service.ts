/** @format */

import { currentUser } from '@clerk/nextjs';
import { db } from '@/lib/db';

export const UserService = async () => {
	const self = await currentUser();

	if (!self || !self.username) {
		throw new Error('UNAUTHORIZED ACCESS DETECTED');
	}

	const user = await db.userAccounts.findUnique({
		where: { userAccountClerkId: self.id },
	});

	if (!user) {
		throw new Error('USER NOT FOUND');
	}
	console.log(user);
	return user;
};
