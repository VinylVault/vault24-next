import { SearchArtists, SearchReleases, SearchTracks } from '@/api/search';
import { ArtistGridItems } from '@/components/ArtistGridItems';
import { ReleaseGridItems } from '@/components/ReleaseGridItems';
import { TrackGridItemsWithArt } from '@/components/TrackGridItems';
import { Suspense } from 'react';

export default async function SearchResults({
  params,
}: {
  params: { searchTerm: string };
}) {
  const releaseSearchResults = await SearchReleases(params.searchTerm);
  const artistSearchResults = await SearchArtists(params.searchTerm);
  const trackSearchResults = await SearchTracks(params.searchTerm);

  let searchTerm = params.searchTerm.replace('%20', ' ');

  return (
    <Suspense fallback={<p>SEARCHING</p>}>
      <div className="flex min-h-screen flex-col p-12 bg-vault-background">
        <h2 className="text-6xl font-bold font-title text-center pb-4 text-vault-title">
          Search Results For:
        </h2>
        <h3 className="text-4xl font-bold font-title text-center pb-4 text-vault-genre">
          <span className="text-vault-genre capitalize">{searchTerm}</span>
        </h3>
        {releaseSearchResults?.length > 0 && (
          <>
            <h4
              id="Releases"
              className="text-3xl font-bold font-title text-left pb-4 text-vault-text"
            >
              Releases:
            </h4>
            <div className="grid gap-4 md:grid-cols-4 pb-8 grid-cols-1 mx-auto border-b-2 border-vault-border">
              {releaseSearchResults.map((release) => (
                <ReleaseGridItems key={release.releaseSlug} {...release} />
              ))}
            </div>
          </>
        )}
        {artistSearchResults?.length > 0 && (
          <>
            <h4
              id="Artists"
              className="text-3xl font-bold font-title text-left pb-4 text-vault-text"
            >
              Artists:
            </h4>
            <div className="grid gap-4 md:grid-cols-4 pb-8 grid-cols-1 mx-auto border-b-2 border-vault-border">
              {artistSearchResults.map((artist) => (
                <ArtistGridItems key={artist.artistSlug} {...artist} />
              ))}
            </div>
          </>
        )}
        {trackSearchResults?.length > 0 && (
          <>
            <h4
              id="Tracks"
              className="text-3xl font-bold font-title text-left pb-4 text-vault-text"
            >
              Tracks:
            </h4>
            {/* <div className="grid gap-4 md:grid-cols-4 pb-8 grid-cols-1 mx-auto border-b-2 border-vault-border"> */}
            {trackSearchResults.map((track) => (
              <TrackGridItemsWithArt key={track.trackSlug} {...track} />
            ))}
            {/* </div> */}
          </>
        )}
      </div>
    </Suspense>
  );
}
