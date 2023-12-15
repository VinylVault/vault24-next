/** @format */

import { db } from '@/lib/db';
import { UserService } from '@/lib/auth-service';

export const getFavourites = () => {
	const user = UserService();

	return user;
};
