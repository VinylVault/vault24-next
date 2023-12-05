import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/**
 * Fetches the shelf details from the library API.
 * 
 * @param folderId - The ID of the folder to fetch the shelf details for.
 * @returns An array of shelf slugs.
 */
export const fetchShelf = async (folderId: string): Promise<string[]> => {
    try {
      const shelfData = await prisma.libraryGenres.findMany;
      const libraryShelfDetailsSlug = shelfData
        .filter((libraryData) => libraryData.shelfId === folderId)
        .map((libraryData) => libraryData.shelfSlug);
      return libraryShelfDetailsSlug;
    } catch (error) {
      // Handle any errors here
      console.error('An error occurred while fetching shelf details:', error);
      return [];
    }
  };