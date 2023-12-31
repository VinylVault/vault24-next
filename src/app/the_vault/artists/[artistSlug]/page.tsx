import { getOneArtist } from '@/api/artists';
import { Button } from '@/components/Button';
import { ReleaseGridItems } from '@/components/ReleaseGridItems';
import { TrackGridItemsWithArt } from '@/components/TrackGridItems';
import Image from 'next/image';
import Link from 'next/link';
export default async function TheVaultReleaseDetails({
  params,
}: {
  params: { artistSlug: string };
}) {
  // console.log(params)

  const localArtist = await getOneArtist(params.artistSlug);
  // console.log(localArtist);

  return (
    <div className="flex min-h-screen flex-col p-12 bg-vault-background">
      <h3 className="text-8xl font-bold font-title text-center pb-4 text-vault-title">
        Artist Details For: <br />
        <span className="text-vault-link capitalize">
          {localArtist?.artistName}
        </span>
      </h3>
      <h4
        id="releases"
        className="text-4xl font-bold font-title text-vault-genre p-4"
      >
        Releases:
      </h4>
      <div className="grid gap-4 w-full lg:grid-cols-5 md:grid-cols-2 grid-cols-1 mr-4">
        {localArtist?.libraryReleases.map((release) => (
          <ReleaseGridItems key={release.releaseSlug} {...release} />
        ))}
      </div>
      <h4
        id="tracks"
        className="text-4xl font-bold font-title text-vault-genre p-4"
      >
        Tracks:
      </h4>
      <div>
        {localArtist?.libraryTracks.map((track) => (
          <TrackGridItemsWithArt key={track.trackSlug} {...track} />
        ))}
      </div>
    </div>
  );
}
