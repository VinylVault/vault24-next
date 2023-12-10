import Image from 'next/image';
import { formatTimeAgo } from '@/utils/formatTimeAgo';
import Link from 'next/link';

type TrackGridItemsProps = {
  trackSlug: string;
  trackId: string;
  trackTitle: string;
  trackPosition: string;
  trackIsSubtrack: boolean;
  trackLastPlayed: Date;
  libraryArtists: TrackArtistProps[];
  libraryReleases: TrackReleaseProps[];
  createdAt: Date;
};

type RequestTrackGridItemsProps = {
  trackFeature: string;
  trackIsCurrent: boolean;
  trackIsNext: boolean;
  trackIsRequest: boolean;
  trackSlug: string;
  trackId: string;
  trackTitle: string;
  trackPosition: string;
  trackIsSubtrack: boolean;
  trackLastPlayed: Date;
  libraryArtists: TrackArtistProps[];
  libraryReleases: TrackReleaseProps[];
};

type TrackArtistProps = {
  artistName: string;
  artistSlug: string;
};

type TrackReleaseProps = {
  releaseTitle: string;
  releaseYear: number;
  releaseLocalImage: string;
  releaseSlug: string;
  releaseAddedToDiscogs: Date;
  releaseLastPlayed: Date;
  releaseIsNew: boolean;
  releaseIsNewAddition: boolean;
};

type ReleaseShelfProps = {
  shelfName: string;
  shelfSlug: string;
};

type ReleaseArtistProps = {
  artistId: string;
  artistName: string;
  artistSlug: string;
};

export async function TrackGridItemsWithArt({
  trackSlug,
  trackId,
  trackTitle,
  trackPosition,
  trackIsSubtrack,
  trackLastPlayed,
  libraryArtists,
  createdAt,
  libraryReleases,
}: TrackGridItemsProps) {
  return (
    <div className="grid gap-8 p-4 mb-4 md:grid-cols-6 grid-cols-1 mx-12 shadow-lg shadow-vault-menubar hover:shadow-vault-link transition duration-500 rounded-xl">
      <div className="md:col-span-1">
        <Image
          className="rounded-xl items-center align-middle"
          src={libraryReleases[0].releaseLocalImage}
          width={150}
          height={150}
          alt="album art"
          title="album art"
        />
      </div>
      <div className="md:col-span-3">
        <p className="text-vault-text text-left mx-2 md:my-2 text-lg">
          {!trackIsSubtrack && trackPosition && (
            <strong className="align-middle p-2 border-2 rounded-full border-vault-border">
              {trackPosition}
            </strong>
          )}
          <span className="text-4xl align-middle items-center">
            {trackIsSubtrack && <span className="text-gray-500">{'>'}</span>}{' '}
            {trackTitle}{' '}
          </span>
        </p>
        <p className="text-vault-text text-left mx-2 md:my-2 text-lg">
          {!trackIsSubtrack &&
            trackPosition &&
            libraryArtists.map((artist) => artist.artistName).join(', ')}
        </p>
        <p className="text-vault-text text-left mx-2 md:my-2 text-lg">
          <strong>Release Title: </strong>
          <Link
            href={`/the_vault/releases/${libraryReleases[0].releaseSlug}`}
            className="text-vault-link "
          >
            {libraryReleases.map((release) => release.releaseTitle)}
          </Link>
        </p>
      </div>
      <div className="md:col-span-2">
        <p className="text-vault-text text-right m-2 text-lg">
          {!trackIsSubtrack && trackPosition && (
            <Link
              href={`/the_vault/request/${trackSlug}`}
              className="text-vault-link hover:bg-vault-link hover:text-vault-background p-2 rounded-xl text-2xl"
            >
              REQUEST
            </Link>
          )}
        </p>
        <p className="text-vault-text text-right mx-2 md:my-2 text-lg">
          {!trackIsSubtrack && trackPosition && trackLastPlayed > createdAt && (
            <span>Last Played: {formatTimeAgo(trackLastPlayed)}</span>
          )}
        </p>
      </div>
    </div>
  );
}

export async function PlaylistTrackGridItems({
  trackFeature,
  trackIsCurrent,
  trackIsNext,
  trackIsRequest,
  trackSlug,
  trackTitle,
  trackPosition,
  trackIsSubtrack,
  libraryArtists,
  libraryReleases,
}: RequestTrackGridItemsProps) {
  return (
    // [         ?? CURRENT / NEXT TRACK ?? LISTENER REQUEST ?? FEATURE         ]
    // [ [---------]  POS : TITLE                                   REQUEST LINK]
    // [ [-RELEASE-]  ARTISTS                                                   ]
    // [ [---ART---]  RELEASE TITLE : ARTISTS                       VIEW RELEASE]
    // [ [---------]                                               ?LAST PLAYED?]
    <div className="grid gap-8 p-4 mb-4 md:grid-cols-6 grid-cols-1 mx-12 shadow-lg shadow-vault-menubar hover:shadow-vault-link transition duration-500 rounded-xl">
      <div className="md:col-span-1">
        <Image
          className="rounded-xl items-center align-middle"
          src={libraryReleases[0].releaseLocalImage}
          width={150}
          height={150}
          alt="album art"
          title="album art"
        />
      </div>
      <div className="md:col-span-3">
        <p className="text-vault-text text-left mx-2 md:my-2 text-lg">
          {!trackIsSubtrack && trackPosition && (
            <strong className="align-middle p-2 border-2 rounded-full border-vault-border">
              {trackPosition}
            </strong>
          )}
          <span className="text-4xl align-middle items-center">
            {trackIsSubtrack && <span className="text-gray-500">{'>'}</span>}{' '}
            {trackTitle}{' '}
          </span>
        </p>
        <p className="text-vault-text text-left mx-2 md:my-2 text-lg">
          {!trackIsSubtrack &&
            trackPosition &&
            libraryArtists.map((artist) => artist.artistName).join(', ')}
        </p>
        <p className="text-vault-text text-left mx-2 md:my-2 text-lg">
          <strong>Release Title: </strong>
          <Link
            href={`/the_vault/releases/${libraryReleases[0].releaseSlug}`}
            className="text-vault-link "
          >
            {libraryReleases.map((release) => release.releaseTitle)}
          </Link>
        </p>
      </div>
      <div className="md:col-span-2">
        <p className="text-vault-text text-right m-2 text-lg">
          {!trackIsSubtrack && trackPosition && (
            <Link
              href={`/the_vault/request/${trackSlug}`}
              className="text-vault-link hover:bg-vault-link hover:text-vault-background p-2 rounded-xl text-2xl"
            >
              REQUEST
            </Link>
          )}
        </p>
        <p className="text-vault-text text-right mx-2 md:my-2 text-lg">
          {/* {!trackIsSubtrack && trackPosition && trackLastPlayed > createdAt && (
            <span>Last Played: {formatTimeAgo(trackLastPlayed)}</span>
          )} */}
        </p>
      </div>
    </div>
  );
}

export async function TrackGridItemsWithoutArt({
  trackSlug,
  trackId,
  trackTitle,
  trackPosition,
  trackIsSubtrack,
  trackLastPlayed,
  libraryArtists,
  createdAt,
}: TrackGridItemsProps) {
  return (
    <div className="grid gap-8 p-4 mb-4 md:grid-cols-4 grid-cols-1 mx-12 shadow-lg shadow-vault-menubar hover:shadow-vault-link transition duration-500 rounded-xl">
      <div className="md:col-span-2">
        <p className="text-vault-text text-left mx-2 md:my-2 text-lg">
          {!trackIsSubtrack && trackPosition && (
            <strong className="align-middle p-2 border-2 rounded-full border-vault-border">
              {trackPosition}
            </strong>
          )}
          <span className="text-4xl align-middle items-center">
            {trackIsSubtrack && <span className="text-gray-500">{'>'}</span>}{' '}
            {trackTitle}{' '}
          </span>
        </p>
        <p className="text-vault-text text-left mx-2 md:my-2 text-lg">
          {!trackIsSubtrack &&
            trackPosition &&
            libraryArtists.map((artist) => artist.artistName).join(', ')}
        </p>
      </div>
      <div className="md:col-span-2">
        <p className="text-vault-text text-right m-2 text-lg">
          {!trackIsSubtrack && trackPosition && (
            <Link
              href={`/the_vault/request/${trackSlug}`}
              className="text-vault-link hover:bg-vault-link hover:text-vault-background p-2 rounded-xl text-2xl"
            >
              REQUEST
            </Link>
          )}
        </p>
        <p className="text-vault-text text-right mx-2 md:my-2 text-lg">
          {!trackIsSubtrack && trackPosition && trackLastPlayed > createdAt && (
            <span>Last Played: {formatTimeAgo(trackLastPlayed)}</span>
          )}
        </p>
      </div>
    </div>
  );
}
