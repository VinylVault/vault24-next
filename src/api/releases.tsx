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
  await prisma.$disconnect();
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
  await prisma.$disconnect();
  return getReleaseList;
}

export async function getOneRelease(releaseSlug: string) {
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
          libraryReleases: true,
        },
        orderBy: {
          trackSlug: 'asc',
        },
      },
    },
    where: {
      releaseSlug,
    },
  });
  // console.log(getReleaseDetails);
  await prisma.$disconnect();
  return getReleaseDetails;
}
