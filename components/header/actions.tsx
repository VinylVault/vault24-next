/** @format */

import { SignInButton, UserButton, currentUser } from '@clerk/nextjs';
import { Button } from '../ui/button';
import Link from 'next/link';
import { RadioTower, User2Icon } from 'lucide-react';

const Actions = async () => {
	const user = await currentUser();
	return (
		<div className="flex items-center justify-end ml-4">
			{!user && (
				<SignInButton>
					<Button className="bg-transparent text-vault-link hover:bg-vault-link hover:text-vault-menubar rounded-full">
						<User2Icon />
					</Button>
				</SignInButton>
			)}
			{!!user && (
				<div className="flex items-center text-vault-link text-center">
					<Link
						href={`/user/${user.username}`}
						className="flex items-center p-6 gap-4">
						<RadioTower />
						<span className="hidden md:flex gap-4">
							Dashboard
						</span>
					</Link>
					<UserButton afterSignOutUrl="/" />
				</div>
			)}
		</div>
	);
};

export default Actions;
