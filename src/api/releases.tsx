import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getRecentReleases() {
  const getRecentReleases = await prisma.libraryReleases.findMany({
    include: {
      libraryArtists: true,
      libraryShelves: true,
    },
    where: {
      AND: [
        { releaseIsNewAddition: true },
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
    },
    orderBy: {
      releaseAddedToDiscogs: 'desc',
    },
    take: 50,
  });
  // console.log(getRecentReleases);
  prisma.$disconnect()
  return getRecentReleases;
}

export async function getAllReleases() {
  
  const getReleaseList = await prisma.libraryReleases.findMany({
    include: {
      libraryArtists: true,
      libraryShelves: true,
    },
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
    },
    orderBy: {
      releaseSortName: 'asc',
    },
  });
  // console.log(getReleaseList);
  prisma.$disconnect()
  return getReleaseList;
}

export async function getOneRelease(releaseSlug:string) {
  // console.log(releaseSlug)
  const getReleaseDetails = await prisma.libraryReleases.findUnique({
    include: {
      libraryArtists: true,
      libraryShelves: true,
      libraryGenres: true,
      libraryStyles: true,
      libraryFormats: true,
      libraryRecordLabels: true,
      libraryTracks: {
        include: {
          libraryArtists: true,
        },
      }
    },
    where: {
      releaseSlug,
    },
  });
  // console.log(getReleaseDetails);
  prisma.$disconnect()
  return getReleaseDetails;
}
