import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getLatestPlayList() {
    const getBlogPost = await prisma.blogPlaylist.findMany({
        orderBy: {
            blogPlaylistPublishDate: 'desc',
        },
        where: {
            blogPlaylistPublished: true
        },
        take: 1,
    });
    await prisma.$disconnect();
    return getBlogPost;
}

export async function getAllPlayLists() {
    const getBlogPost = await prisma.blogPlaylist.findMany({
        orderBy: {
            blogPlaylistPublishDate: 'desc',
        },
        where: {
            blogPlaylistPublished: true
        },
    });
    await prisma.$disconnect();
    return getBlogPost;
}

export async function getOnePlaylist(showSlug:string) {
    const getBlogPost = await prisma.blogPlaylist.findUnique({
        where: {
            blogPlaylistSlug: showSlug,
        },
        include: {
            trackOnPlaylist: {
                where: {
                    OR: [
                        {trackStatus: 'Played'},
                        {trackStatus: 'Current'},
                        {trackStatus: 'Next'},
                    ],
                },
                include: {
                    libraryTracks: {
                        include: {
                            libraryArtists: true,
                            libraryReleases: {
                                include: {
                                    libraryShelves: true
                                },
                            },
                        },
                    },
                },
                orderBy: {
                    updatedAt: 'asc',
                }
            },
            userAccounts: {
                select: {
                    userAccountName: true,
                    userAccountEmail: true,
                    userAccountSlug: true
                }
            },
            globalTags: true,

            }
    })
    await prisma.$disconnect()
    console.log(getBlogPost)
    return getBlogPost
}