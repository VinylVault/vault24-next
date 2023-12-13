import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getLatestPlayList() {
  const getLatestPlaylist = await prisma.blogPlaylist.findMany({
    orderBy: {
      blogPlaylistPublishDate: 'desc',
    },
    where: {
      blogPlaylistPublished: true,
    },
    include: {
      userAccounts: {
        select: {
          userAccountName: true,
          userAccountEmail: true,
          userAccountSlug: true,
        },
      },
      globalTags: true,
    },
    take: 1,
  });
  await prisma.$disconnect();
  return getLatestPlaylist;
}

export async function getAllPlayLists() {
  const getAllPlaylists = await prisma.blogPlaylist.findMany({
    orderBy: {
      blogPlaylistPublishDate: 'desc',
    },
    where: {
      blogPlaylistPublished: true,
    },
    include: {
      userAccounts: {
        select: {
          userAccountName: true,
          userAccountEmail: true,
          userAccountSlug: true,
        },
      },
      globalTags: true,
    },
  });
  await prisma.$disconnect();
  return getAllPlaylists;
}

export async function getOnePlaylist(showSlug: string) {
  const getOnePlaylist = await prisma.blogPlaylist.findUnique({
    where: {
      blogPlaylistSlug: showSlug,
    },
    include: {
      trackOnPlaylist: {
        where: {
          OR: [
            { trackStatus: 'Played' },
            { trackStatus: 'Current' },
            { trackStatus: 'Next' },
          ],
        },
        include: {
          libraryTracks: {
            include: {
              libraryArtists: true,
              libraryReleases: {
                include: {
                  libraryShelves: true,
                },
              },
            },
          },
          trackPlanning: true,
        },
        orderBy: {
          updatedAt: 'asc',
        },
      },
      userAccounts: {
        select: {
          userAccountName: true,
          userAccountEmail: true,
          userAccountSlug: true,
        },
      },
      bookedShows: {
        include: {
          radioStationDetails: true,
        },
      },
      globalTags: true,
    },
  });
  await prisma.$disconnect();
  return getOnePlaylist;
}
