import Image from 'next/image';
import { formatTimeAgo } from '@/utils/formatTimeAgo';
import Link from 'next/link';
import { Button } from './Button';

type TrackGridItemsProps = {
  trackSlug: string;
  trackId: string;
  trackTitle: string;
  trackPosition: string;
  trackIsSubtrack: boolean;
  trackLastPlayed: Date;
  libraryArtists: TrackArtistProps[];
}

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
}

type TrackArtistProps = {
  artistName: string;
  artistSlug: string;
}

type TrackReleaseProps = {
  releaseTitle: string
  libraryArtists: ReleaseArtistProps[]
  releaseYear: number
  releaseLocalImage: string
  releaseSlug: string
  releaseAddedToDiscogs: Date
  releaseLastPlayed: Date
  releaseIsNew: boolean
  releaseIsNewAddition: boolean
  libraryShelves: ReleaseShelfProps[]
}

type ReleaseShelfProps = {
  shelfName: string
  shelfSlug: string
}

type ReleaseArtistProps = {
  artistId: string
  artistName: string
  artistSlug: string
}

export async function TrackGridItemsWithArt({
  trackSlug,
  trackId,
  trackTitle,
  trackPosition,
  trackIsSubtrack,
  libraryArtists,
  // libraryReleases
}: TrackGridItemsProps) {
  return (
    // [ [---------]  POS : TITLE                                   REQUEST LINK]
    // [ [-RELEASE-]  ARTISTS                                                   ]
    // [ [---ART---]  RELEASE TITLE : ARTISTS                       VIEW RELEASE]
    // [ [---------]                                               ?LAST PLAYED?]
    <div>
    </div>
  );
}

export async function PlaylistTrackGridItems({
  trackFeature,
  trackIsCurrent,
  trackIsNext,
  trackIsRequest,
  trackSlug,
  trackId,
  trackTitle,
  trackPosition,
  trackIsSubtrack,
  libraryArtists,
  libraryReleases
}: RequestTrackGridItemsProps) {
  return (
    // [         ?? CURRENT / NEXT TRACK ?? LISTENER REQUEST ?? FEATURE         ]
    // [ [---------]  POS : TITLE                                   REQUEST LINK]
    // [ [-RELEASE-]  ARTISTS                                                   ]
    // [ [---ART---]  RELEASE TITLE : ARTISTS                       VIEW RELEASE]
    // [ [---------]                                               ?LAST PLAYED?]
    <div>
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
}: TrackGridItemsProps) {
  return (
    // [ | POS | TITLE                                        REQUEST LINK]
    // [ ARTISTS                                             ?LAST PLAYED?]
    <div className="grid gap-4 p-4 md:grid-cols-4 grid-cols-1 mx-12 shadow-lg shadow-vault-menubar hover:shadow-vault-link transition duration-500 rounded-xl">
      <div className="md:col-span-2">
        <p className="text-vault-text align-left mx-2 md:my-2 text-lg">
          {!trackIsSubtrack && trackPosition && <strong className='align-middle p-2 border-2 rounded-full border-vault-border'>{trackPosition}</strong>}<span className="text-4xl align-middle items-center">{trackIsSubtrack && <span className='text-gray-500'>{'>'}</span>} {trackTitle}{' '}</span>
        </p>
        <p className="text-vault-text align-left mx-2 text-lg">
          {!trackIsSubtrack && trackPosition && libraryArtists
            .map((artist) => artist.artistName)
            .join(', ')}
        </p>
      </div>
      <div className="col-span-2">
        <p className="text-vault-text text-right m-2 text-lg">
          {!trackIsSubtrack && trackPosition && <Link href={`/the_vault/request/${trackSlug}`} className='text-vault-link hover:bg-vault-link hover:text-vault-background p-2 rounded-xl'>REQUEST</Link>}
          {' '}
          <br />{' '}
          {!trackIsSubtrack && trackPosition && <span>Last Played: {trackLastPlayed.toDateString()}</span>}
        </p>
      </div>
    </div>
  );
}
