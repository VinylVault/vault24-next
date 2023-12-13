import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function SearchReleases(searchTerm: string) {
  searchTerm = searchTerm.replace('%20', '_');
  console.log(searchTerm);
  const searchResults = await prisma.libraryReleases.findMany({
    where: {
      AND: [
        {
          libraryShelves: {
            some: {
              shelfPrivate: false,
            },
          },
        },
        {
          libraryShelves: {
            some: {
              shelfWantlist: false,
            },
          },
        },
      ],
      releaseSlug: {
        contains: searchTerm,
        mode: 'insensitive',
      },
    },
    orderBy: {
      _relevance: {
        fields: ['releaseSlug'],
        search: searchTerm,
        sort: 'asc',
      },
    },
    include: {
      libraryArtists: true,
      libraryShelves: true,
    },
  });
  //   console.log(searchResults);
  return searchResults;
}

export async function SearchArtists(searchTerm: string) {
  searchTerm = searchTerm.replace('%20', '_');
  //   console.log(searchTerm);
  const searchResults = await prisma.libraryArtists.findMany({
    where: {
      artistSlug: {
        contains: searchTerm,
        mode: 'insensitive',
      },
    },
    orderBy: {
      _relevance: {
        fields: ['artistSlug'],
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
      trackSlug: {
        contains: searchTerm,
        mode: 'insensitive',
      },
      AND: [
        {
          libraryReleases: {
            some: {
              libraryShelves: {
                some: {
                  shelfPrivate: false,
                },
              },
            },
          },
        },
        {
          libraryReleases: {
            some: {
              libraryShelves: {
                some: {
                  shelfWantlist: false,
                },
              },
            },
          },
        },
      ],
    },
    orderBy: {
      _relevance: {
        fields: ['trackSlug'],
        search: searchTerm,
        sort: 'asc',
      },
    },
    include: {
      libraryArtists: true,
      libraryReleases: true,
    },
  });
  //   console.log(searchResults);
  return searchResults;
}
