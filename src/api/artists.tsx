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
                    }
                }
            }
        },
        orderBy: {
            artistName: 'asc',
        }
    })
    prisma.$disconnect()
    return getArtists
}