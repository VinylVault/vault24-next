/** @format */
import vinyl from '@/public/vinyl.svg';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const Logo = () => {
	return (
		<div className="flex flex-col items-center gap-2">
			<div>
				<Image
					src={vinyl}
					alt="The Vinyl Vault Show Logo"
					title="The Vinyl Vault Show Logo"
					width={100}
					height={100}
					className="-rotate-90 transform -scale-x-100"
				/>
			</div>
			<div className="flex flex-col items-center">
				<p
					className={
						'font-title text-vault-title text-4xl italic p-4 text-yellow-400'
					}>
					The Vinyl Vault Show
				</p>
			</div>
		</div>
	);
};
