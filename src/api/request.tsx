import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function ListRequests() {
  const getRequests = await prisma.trackPlanning.findMany({
    include: {
      libraryTracks: {
        include: {
          libraryArtists: true,
          libraryReleases: true,
        },
      },
    },
    orderBy: {
      createdAt: 'asc',
    },
    where: {
      trackPlayed: 'Requested',
    },
  });
  return getRequests;
}

export async function MoveRequestToPlaylist(trackPlanningId: string) {
  const getCurrentPlaylist = await prisma.blogPlaylist.findFirst({
    where: {
      blogPlaylistCurrent: true,
    },
  });

  const getRequestDetails = await prisma.trackPlanning.findFirst({
    include: {
      libraryTracks: true,
    },
    where: {
      trackPlanningId,
    },
  });

  if (getCurrentPlaylist) {
    await prisma.trackPlanning.update({
      where: {
        trackPlanningId,
      },
      data: {
        trackPlayed: 'Added_To_Playlist',
      },
    });

    const addTrackToPlaylist = await prisma.trackOnPlaylist.create({
      data: {
        trackStatus: 'Listed',
        trackFeature: 'Listener_Request',
        blogPlaylist: {
          connect: {
            blogPlaylistSlug: getCurrentPlaylist.blogPlaylistSlug,
          },
        },
        libraryTracks: {
          connect: {
            trackSlug: getRequestDetails?.libraryTracks[0].trackSlug,
          },
        },
        trackPlanning: {
          connect: {
            trackPlanningId,
          },
        },
      },
    });
    return addTrackToPlaylist;
  }
}

export async function PlayRequestNext(trackPlanningId: string) {
  const getCurrentPlaylist = await prisma.blogPlaylist.findFirst({
    where: {
      blogPlaylistCurrent: true,
    },
  });

  const getRequestDetails = await prisma.trackPlanning.findFirst({
    include: {
      libraryTracks: true,
    },
    where: {
      trackPlanningId,
    },
  });

  if (getCurrentPlaylist) {
    await prisma.trackPlanning.update({
      where: {
        trackPlanningId,
      },
      data: {
        trackPlayed: 'Added_To_Playlist',
      },
    });

    const addTrackToPlaylist = await prisma.trackOnPlaylist.create({
      data: {
        trackStatus: 'Next',
        trackFeature: 'Listener_Request',
        blogPlaylist: {
          connect: {
            blogPlaylistSlug: getCurrentPlaylist.blogPlaylistSlug,
          },
        },
        libraryTracks: {
          connect: {
            trackSlug: getRequestDetails?.libraryTracks[0].trackSlug,
          },
        },
        trackPlanning: {
          connect: {
            trackPlanningId,
          },
        },
      },
    });
    return addTrackToPlaylist;
  }
}
