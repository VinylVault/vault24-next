/** @format */
import { HomePageGridItems } from '@/components/HomePageGridItems';
import { Button } from '@/components/ui/button';
import { homepageBottomLineItems, homepageTopLineItems } from '@/data/homepage';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<div>
				<div className="flex items-center justify-center gap-12 pt-20 m-8">
					{homepageTopLineItems.map((item) => (
						<HomePageGridItems
							key={item.title}
							title={item.title}
							link={item.link}
							imagePath={item.imagePath}
						/>
					))}
				</div>
				<div className="flex justify-center py-8">
					<p className="text-vault-title font-title font-bold text-8xl">
						{' '}
						The Vinyl Vault Show{' '}
					</p>
				</div>
				<div className="flex items-center justify-center pb-20 gap-12 m-8">
					{homepageBottomLineItems.map((item) => (
						<HomePageGridItems
							key={item.title}
							title={item.title}
							link={item.link}
							imagePath={item.imagePath}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
