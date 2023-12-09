import Image from 'next/image';
import { getAllPlayLists } from '@/api/playlist';
import { Metadata } from 'next';
import { ShowArchiveGridItems } from '@/components/ShowArchiveGridItems';

export const dynamic = 'force-dynamic';

export default async function ShowArchiveList() {
  let localPlaylists = await getAllPlayLists();
  console.log(localPlaylists);

  return (
    <div className="flex min-h-screen flex-col items-center p-12 bg-vault-background">
      <h2 className="text-6xl font-bold font-title text-vault-title">
        The Vinyl Vault Show Archive
      </h2>
      <h3 className="text-4xl font-bold font-title text-vault-genre">
        Catch Up On Shows You May Have Missed
      </h3>
      <div className="grid gap-4 w-full md:grid-cols-3 grid-cols-1 py-8 mr-4">
        {localPlaylists.map((showArchive) => (
          <ShowArchiveGridItems
            key={showArchive.blogPlaylistSlug}
            {...showArchive}
          />
        ))}
      </div>
    </div>
  );
}
