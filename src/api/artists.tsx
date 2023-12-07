import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getAllArtists() {
  const getArtists = await prisma.libraryArtists.findMany({
    select: {
      artistName: true,
      artistReleaseQuantity: true,
      artistTrackQuantity: true,
      artistSlug: true,
      artistLibrary: true,
    },
    where: {
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
    orderBy: {
      artistName: 'asc',
    },
  });
  prisma.$disconnect();
  return getArtists;
}

export async function getOneArtist(artistSlug: string) {
  // console.log(artistSlug)
  const getArtistDetails = await prisma.libraryArtists.findUnique({
    include: {
      libraryReleases: {
        where: {
          libraryShelves: {
            some: {
              shelfPrivate: false,
            },
          },
        },
        include: {
          libraryShelves: true,
          libraryArtists: true,
        },
        orderBy: {
          releaseAddedToDiscogs: 'desc',
        },
      },
      libraryTracks: {
        include: {
          libraryArtists: true,
          libraryReleases: {
            where: {
              libraryShelves: {
                some: {
                  shelfPrivate: false,
                },
              },
            },
          },
        },
        orderBy: {
            trackTitle: 'asc',
        }
      },
    },
    where: {
      artistSlug,
    },
  });
  // console.log(getArtistDetails);
  prisma.$disconnect();
  return getArtistDetails;
}
