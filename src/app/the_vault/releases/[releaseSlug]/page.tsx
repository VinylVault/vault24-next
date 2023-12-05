import { getOneRelease } from '@/api/releases';
import { Button } from '@/components/Button';
import Image from 'next/image';
export default async function TheVaultReleaseDetails({
  params,
}: {
  params: { releaseSlug: string };
}) {
  // console.log(params)

  const localRelease = await getOneRelease(params.releaseSlug);

  return (
    <div className="flex min-h-screen flex-col p-12 bg-vault-background">
      <h3 className="text-8xl font-bold font-title text-center pb-4 text-vault-title">
        Release Details For: <br />
        <span className="text-vault-link capitalize">
          {localRelease?.releaseTitle}
        </span>
      </h3>
      <div className="grid gap-4 md:grid-cols-4 pb-8 grid-cols-1 mx-auto border-b-2 border-vault-text">
        <div className="flex flex-col col-span-1 md:border-r-2 pr-8 border-vault-text">
          <Image
            src={localRelease?.releaseLocalImage ?? '#'}
            alt={localRelease?.releaseTitle ?? ''}
            width={1000}
            height={1000}
            title={localRelease?.releaseTitle}
            className="block text-vault-link col-span-1 object-fill rounded-xl"
          />
        </div>
        <div className="flex flex-col col-span-3">
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <strong>Release Title:</strong> {localRelease?.releaseTitle}
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <strong>Released By:</strong> {localRelease?.libraryArtists.map(artist => artist.artistName).join(", ")}
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <strong>Record Label:</strong> {localRelease?.libraryRecordLabels.map(recordLabel => recordLabel.recordlabelName).join(", ")}
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <strong>Catalogue Number:</strong> {localRelease?.releaseCatalogueNumber}
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <strong>Format:</strong> {localRelease?.libraryFormats.map(format => format.format).join(", ")}
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <strong>In Vinyl Vault Since:</strong> {localRelease?.releaseAddedToDiscogs.toDateString()}
          </p>
        </div>
      </div>
      <h3 className="text-4xl p-4 font-bold font-title text-vault-title">
          Track Listing
      </h3>
      <div className="grid gap-4 md:grid-cols-4 pb-8 grid-cols-1 mx-auto">
      {localRelease?.libraryTracks.map(track => (
        <><div className='col-span-2'>
          <p className="text-vault-text align-left mx-2 my-2 text-lg">
            <strong>{track.trackPosition} </strong> {track.trackTitle} <br/> {track.libraryArtists.map(artist => artist.artistName).join(", ")}
          </p>
        </div>
        <div className='col=span-1'>
            <p className="text-vault-text align-left mx-2 my-2 text-lg">Last Played: {track.trackLastPlayed.toDateString()}</p>
          </div>
          <div className='col=span-1'>
            <p className="text-vault-text align-left mx-2 my-2 text-lg">REQUEST</p>
          </div></>
      ))}
      </div>
    </div>
  );
}
