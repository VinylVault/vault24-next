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
  });
  console.log(getRecentReleases);
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
  });
  console.log(getReleaseList);
  return getReleaseList;
}

export async function getOneRelease(releaseSlug:string) {
  console.log(releaseSlug)
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
  console.log(getReleaseDetails);
  return getReleaseDetails;
}
