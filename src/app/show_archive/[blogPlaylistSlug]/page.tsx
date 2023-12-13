import Image from 'next/image';
import { getOnePlaylist } from '@/api/playlist';
import { Metadata } from 'next';
import Link from 'next/link';
import { TagDisplay, UserDisplay } from '@/components/PostContents';
import { TrackGridItemsWithArt } from '@/components/TrackGridItems';

export const dynamic = 'force-dynamic';

type radioStationProps = {
  radioStationDetailsName: string;
  radioStationDetailsURL: string;
  radioStationDetailsSlug: string;
};

async function RadioStationDisplay({
  radioStationDetailsName,
  radioStationDetailsURL,
  radioStationDetailsSlug,
}: radioStationProps) {
  return (
    <>
      <Link
        href={radioStationDetailsURL}
        className="text-xl font-title text-center text-vault-link px-8"
      >
        {radioStationDetailsName}
      </Link>
    </>
  );
}

export default async function ShowArchiveList({
  params,
}: {
  params: { blogPlaylistSlug: string };
}) {
  let localPlaylists = await getOnePlaylist(params.blogPlaylistSlug);
  console.log(localPlaylists);

  return (
    <div className="flex min-h-screen flex-col p-12 bg-vault-background">
      <h2 className="text-6xl font-bold font-title text-center text-vault-title">
        The Vinyl Vault Show Archive:
        <br />
        {localPlaylists?.blogPlaylistTitle}
      </h2>
      <h3 className="text-4xl font-bold font-title text-center text-vault-genre">
        Broadcast Date:{' '}
        {localPlaylists?.blogPlaylistPublishDate.toLocaleString()}
      </h3>
      <h3 className="text-4xl font-bold font-title text-center text-vault-genre">
        Last Updated At: {localPlaylists?.updatedAt.toLocaleString()}
      </h3>
      <div className="p-6 grid gap-4 w-full md:grid-cols-2 grid-cols-1">
        <div className="grid-span-1 rounded-3xl relative w-full overflow-hidden aspect-video border-t-4 border-r-4 border-b-4 border-vault-border">
          <Image
            src={localPlaylists?.blogPlaylistImage || '/assets/vinyl_PNG21.png'}
            alt={
              localPlaylists?.blogPlaylistTitle ||
              'The Vinyl Vault Show - Default Show Image'
            }
            title={
              localPlaylists?.blogPlaylistTitle ||
              'The Vinyl Vault Show - Default Show Image'
            }
            width={1000}
            height={200}
          />
        </div>
        <div className="grid-span-1 rounded-3xl border-t-4 border-l-4 items-center items-middle border-b-4 border-vault-border">
          <h2 className="px-8 pt-8 text-vault-title font-title text-4xl font-bold text-center">
            Show Details
          </h2>
          <p className="px-8 pt-2 text-vault-text font-title text-2xl text-center">
            Broadcast On:{' '}
          </p>
          <p className="text-center px-8 break-before-auto">
            {localPlaylists?.bookedShows[0].radioStationDetails.map(
              (radioStation) => (
                <RadioStationDisplay
                  key={radioStation.radioStationDetailsSlug}
                  {...radioStation}
                />
              ),
            )}
          </p>
          <p className="px-8 pt-2 text-vault-text font-title text-2xl text-center">
            Tagged With:{' '}
          </p>
          <p className="text-center px-8">
            {localPlaylists?.globalTags.map((tags) => (
              <TagDisplay key={tags.tagSlug} {...tags} />
              //
            ))}
          </p>
          <p className="px-8 pt-2 text-vault-text font-title text-2xl text-center">
            Author:{' '}
          </p>
          <p className="text-center px-8 break-before-auto">
            {localPlaylists?.userAccounts.map((userAccount) => (
              <UserDisplay key={userAccount.userAccountSlug} {...userAccount} />
            ))}
          </p>
        </div>
      </div>
      {localPlaylists?.blogPlayListListenAgain}
      {localPlaylists?.trackOnPlaylist.map((trackList) => (
        <div key={trackList.trackOnPlaylistId} {...trackList}>
          {trackList.trackPlanning.length > 0 && (
            <p className="bg-vault-menubar text-vault-live text-xl px-8 font-bold text-center mx-12 rounded-t-xl">
              📢 📢 LISTENER REQUEST 📢 📢{' REQUESTED BY: '}
              {trackList.trackPlanning[0].requestedBy?.toUpperCase()} 📢 📢
            </p>
          )}

          {trackList.trackFeature && trackList.trackPlanning.length == 0 && (
            <p className="bg-vault-menubar text-vault-title text-xl px-8 font-bold text-center mx-12 rounded-t-xl">
              {trackList.trackFeature.replace(/_/g, ' ').toUpperCase()}
            </p>
          )}
          {trackList.libraryTracks.map((track) => (
            <TrackGridItemsWithArt key={track.trackSlug} {...track} />
          ))}
        </div>
      ))}
    </div>
  );
}
