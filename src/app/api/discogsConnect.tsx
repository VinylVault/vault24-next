import discogs from 'js_ts_discogs_api_v2_library'

const discogsClient = new discogs({})
// console.log(discogsClient)
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

export async function getReleases(pagenumber: string = '1') {
    let discogsReleases = await discogsClient.getUserFolderContents("0", pagenumber, "added", "desc");
    // console.log(discogsReleases)
    return discogsReleases.data
}

export async function getReleaseDetails(releaseId: string) {
    let discogsReleaseDetails = await discogsClient.getRelease(releaseId);
    // console.log(discogsReleaseDetails)
    return discogsReleaseDetails
}