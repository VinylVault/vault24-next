import { SearchArtists, SearchReleases, SearchTracks } from '@/api/search';
import { Suspense } from 'react';

export default async function SearchResults({
  params,
}: {
  params: { searchTerm: string };
}) {
  console.log(params);

  const releaseSearchResults = await SearchReleases(params.searchTerm);
  const artistSearchResults = await SearchArtists(params.searchTerm);
  const trackSearchResults = await SearchTracks(params.searchTerm);

  return (
    <Suspense fallback={<p>Loading All Vinyl Vault Releases</p>}></Suspense>
  );
}
