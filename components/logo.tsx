/** @format */
import vinyl from '@/public/vinyl.svg';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const Logo = () => {
	return (
		<div className="flex flex-col items-left gap-2 py-2 px-8">
			<div>
				<Image
					src={vinyl}
					alt="The Vinyl Vault Show Logo"
					title="The Vinyl Vault Show Logo"
					width={50}
					height={50}
					className="-rotate-90 transform -scale-x-100"
				/>
			</div>
		</div>
	);
};
