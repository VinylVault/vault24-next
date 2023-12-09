import Image from 'next/image';
import { getOnePlaylist } from '@/api/playlist';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export default async function ShowArchiveList({
    params,
  }: {
    params: { blogPlaylistSlug: string };
  }) {

    let localPlaylists = await getOnePlaylist(params.blogPlaylistSlug);
    console.log(localPlaylists)

    return (
        <div className="flex min-h-screen flex-col items-center p-24 bg-vault-background">
            <h1 className='text-6xl font-bold font-title text-vault-text'>Hello Vercel!</h1>
            <h2 className='text-4xl font-bold font-title text-vault-genre'>Welcome To The Future Home Of .....</h2>
            <h3 className='text-8xl font-bold font-title text-vault-title'>The Vinyl Vault Show Archive List</h3>
        </div>
    )
}