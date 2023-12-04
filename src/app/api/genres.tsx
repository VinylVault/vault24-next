/**
 * Fetches the shelf details from the library API.
 * 
 * @param folderId - The ID of the folder to fetch the shelf details for.
 * @returns An array of shelf slugs.
 */
export const fetchShelf = async (folderId: string): Promise<string[]> => {
    try {
      const response = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/shelves/", {
        cache: 'no-store'
      });
      const data: Array<{ shelfId: string; shelfSlug: string }> = await response.json();
      const libraryShelfDetailsSlug = data
        .filter((libraryData) => libraryData.shelfId === folderId)
        .map((libraryData) => libraryData.shelfSlug);
      return libraryShelfDetailsSlug;
    } catch (error) {
      // Handle any errors here
      console.error('An error occurred while fetching shelf details:', error);
      return [];
    }
  };