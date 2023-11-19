import discogs from 'js_ts_discogs_api_v2_library'

const discogsClient = new discogs({})

const discogsShelfData = new Array
const ignoreFolders = new Array;



export const discogsShelves = async () => {
    let discogsFolders = await discogsClient.getUserFolders();
        for (let discogsLibraryShelf of discogsFolders.data.folders) {
            if (!process.env.IGNORE_FOLDERS) {
                continue
            } else {
                for (let ifenv of process.env.IGNORE_FOLDERS.split(", ")) {
                    ignoreFolders.push(Number(ifenv));
                }
            }
            if (!ignoreFolders.includes(discogsLibraryShelf.id)) {
                discogsShelfData.push(discogsLibraryShelf)
            }
        }
    return discogsShelfData
}