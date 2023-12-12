import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function SearchReleases(searchTerm: string) {
  searchTerm = searchTerm.replace('%20', ' ');
  console.log(searchTerm);
  const searchResults = await prisma.libraryReleases.findMany({
    where: {
      releaseTitle: {
        contains: searchTerm,
        mode: 'insensitive',
      },
    },
    orderBy: {
      _relevance: {
        fields: ['releaseTitle'],
        search: searchTerm,
        sort: 'asc',
      },
    },
  });
  //   console.log(searchResults);
  return searchResults;
}

export async function SearchArtists(searchTerm: string) {
  searchTerm = searchTerm.replace('%20', ' ');
  //   console.log(searchTerm);
  const searchResults = await prisma.libraryArtists.findMany({
    where: {
      artistName: {
        contains: searchTerm,
        mode: 'insensitive',
      },
    },
    orderBy: {
      _relevance: {
        fields: ['artistName'],
        search: searchTerm,
        sort: 'desc',
      },
    },
  });
  //   console.log(searchResults);
  return searchResults;
}

export async function SearchTracks(searchTerm: string) {
  searchTerm = searchTerm.replace('%20', ' ');
  const searchResults = await prisma.libraryTracks.findMany({
    where: {
      trackTitle: {
        contains: searchTerm,
        mode: 'insensitive',
      },
    },
    orderBy: {
      _relevance: {
        fields: ['trackTitle'],
        search: searchTerm,
        sort: 'asc',
      },
    },
  });
  //   console.log(searchResults);
  return searchResults;
}
