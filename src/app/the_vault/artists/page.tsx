import { getAllArtists } from '@/api/artists';
import { ArtistGridItems } from '@/components/ArtistGridItems';
import { Suspense } from 'react';
export const dynamic = 'force-dynamic';
export default async function LibraryReleaseList() {
  let localArtists = await getAllArtists();

  return (
    <div className="flex min-h-screen flex-col items-center lg:px-24 bg-vault-background">
      <h3 className="text-8xl font-bold font-title text-vault-title">
        Artist List
      </h3>

      <div className="grid gap-4 w-full lg:grid-cols-5 md:grid-cols-2 grid-cols-1 mr-4">
        <Suspense fallback={<p>Loading All Vinyl Vault Artists</p>}>
          {localArtists.map((artist) => (
            <ArtistGridItems key={artist.artistSlug} {...artist} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
