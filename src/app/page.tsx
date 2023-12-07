import Image from 'next/image';
import { HomePageGridItems } from '@/components/HomePageGridItems';
import { homepageBottomLineItems, homepageTopLineItems } from '@/data/homepage';
import { RefreshingAuthProvider, StaticAuthProvider } from '@twurple/auth';
import { Bot, createBotCommand } from '@twurple/easy-bot';
import { ApiClient } from '@twurple/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Vinyl Vault Show',
  description: 'The Vinyl Vault Show website. Search our library and make requests. Read our blog ... And more.',
}
export default async function Home() {
  
  // let clientId = undefined
  // let clientSecret = undefined
  // let accessToken = undefined
  // let refreshToken = undefined

  // if (!process.env.TWITCH_CLIENT_ID) {
  //   throw new Error('Missing TWITCH_CLIENT_ID');
  // } else {
  //   clientId = process.env.TWITCH_CLIENT_ID;
  // }
  
  // if (!process.env.TWITCH_CLIENT_SECRET) {
  //   throw new Error('Missing TWITCH_CLIENT_SECRET');
  // } else {
  //   clientSecret = process.env.TWITCH_CLIENT_SECRET;
  // }
  
  // if (!process.env.TWITCH_ACCESS_CODE) {
  //   throw new Error('Missing TWITCH_ACCESS_CODE');
  // } else {
  //   accessToken = process.env.TWITCH_ACCESS_CODE;
  // }
  
  // if (!process.env.TWITCH_REFRESH_TOKEN) {
  //   throw new Error('Missing TWITCH_REFRESH_TOKEN');
  // } else {
  //   refreshToken = process.env.TWITCH_REFRESH_TOKEN;
  // }

  // const authProvider = new StaticAuthProvider(clientId, accessToken);

  // const api = new ApiClient({ authProvider });

  // await api.channels.updateChannelInfo(458466488, {
  //   title: 'The Vinyl Vault Show Returns Tuesday 19:00(UK Time) | Vinyl! Radio! Requests! | Radio How It Used To Be | FCR Digital #Radio #Licensed',
  // })

  // const bot = new Bot({authProvider, channels: ['VinylVault']});
  // bot.say('VinylVault', 'Current Track Is .... !');
  // bot.announce('VinylVault', 'Current Track Is .... !');
  

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
