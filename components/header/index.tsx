/** @format */

import { Logo } from '@/components/logo';
import Link from 'next/link';
import { SearchBox } from './search';
import Actions from './actions';

export const Header = () => {
	return (
		<nav className="fixed flex top-0 w-full h-20 z-[51] bg-vault-menubar items-center justify-between px-2 lg:px-4">
			<Link href="/">
				<div className="flex items-center">
					<div className="hidden lg:flex">
						<Logo />
					</div>
					<div className="hidden lg:flex font-title text-vault-title text-4xl italic pr-12">
						<p>The Vinyl Vault Show</p>
					</div>
				</div>
				{/* <div className="hidden lg:flex items-center">
					<div className="font-title text-vault-title text-4xl italic pr-12">
						<p>The Vinyl Vault Show</p>
					</div>
				</div> */}
			</Link>
			<SearchBox />
			<Actions />
		</nav>
	);
};

export default Header;
