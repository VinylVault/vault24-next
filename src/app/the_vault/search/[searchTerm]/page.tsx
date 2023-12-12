import { SearchArtists, SearchReleases, SearchTracks } from '@/api/search';
import { Suspense } from 'react';

export default async function SearchResults({
  params,
}: {
  params: { searchTerm: string };
}) {
  const releaseSearchResults = await SearchReleases(params.searchTerm);
  const artistSearchResults = await SearchArtists(params.searchTerm);
  const trackSearchResults = await SearchTracks(params.searchTerm);

  return <Suspense fallback={<p>SEARCHING</p>}></Suspense>;
}
