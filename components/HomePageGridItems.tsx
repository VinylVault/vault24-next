/** @format */

import Image from 'next/image';

type HomePageGridItemsProps = {
	title: string;
	link: string;
	imagePath: string;
};

export function HomePageGridItems({
	title,
	link,
	imagePath,
}: HomePageGridItemsProps) {
	return (
		<>
			<div className="flex flex-col gap-12 hover:grayscale hover:shadow-2xl hover:drop-shadow-vault-link">
				<a
					href={link}
					className="relative aspect-video w-full rounded-xl overflow-hidden">
					<Image
						src={imagePath}
						className=" block col-span-4 object-fill rounded-xl "
						alt={title}
						width={1000} // 100%
						height={1000} // 100%
						title={title}
					/>
					<div className="absolute bottom-1 right-1 text-center bg-vault-menubar text-vault-link rounded-r-full rounded-l-full py-2 px-4">
						<p className="font-title text-2xl">{title}</p>
					</div>
				</a>
			</div>
		</>
	);
}
