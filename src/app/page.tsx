import Image from 'next/image';
import { HomePageGridItems } from '@/components/HomePageGridItems';
import { homepageBottomLineItems, homepageTopLineItems } from '@/data/homepage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Vinyl Vault Show',
  description: 'The Vinyl Vault Show website. Search our library and make requests. Read our blog ... And more.',
}
export default async function Home() {
  
  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mr-4">
        {homepageTopLineItems.map((item) => (
          <HomePageGridItems
            key={item.title}
            title={item.title}
            link={item.link}
            imagePath={item.imagePath}
          />
        ))}
      </div>
      <div className='flex justify-center py-8'>
          <p className='text-vault-title font-title font-bold text-8xl'> The Vinyl Vault Show </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mr-4">
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
  );
}
