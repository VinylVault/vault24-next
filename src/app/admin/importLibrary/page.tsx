import { Suspense } from "react";
import { discogsShelves, getReleaseDetails, getReleases } from "../../api/discogsConnect";
import { importShelves, writeFormats, writeGenres, writeStyles } from "../../api/localConnect";

const download = require('image-downloader')

let path = require('path');
let fs = require('fs');

export default async function main() {

    await importShelves()
    
    let discogsReleaseList = await getReleases()
    let fullDiscogsReleaseList = new Array
    let pagination = discogsReleaseList.pagination
    let releases = undefined
    releases = discogsReleaseList.releases

    for (let i = 1; i <= pagination.pages; i++) {
        discogsReleaseList = await getReleases(i.toString())
        fullDiscogsReleaseList = fullDiscogsReleaseList.concat(discogsReleaseList.releases)
    }

    for (let oneDiscogsRelease of fullDiscogsReleaseList) {
        // console.log(oneDiscogsRelease)
        if (oneDiscogsRelease.basic_information.genres){
            for (let releaseGenre of oneDiscogsRelease.basic_information.genres) {
                await writeGenres(releaseGenre, 'library')
            }
        }
        if (oneDiscogsRelease.basic_information.styles){
            for (let releaseStyle of oneDiscogsRelease.basic_information.styles) {
                await writeStyles(releaseStyle, 'library')
            }
        }
        if (oneDiscogsRelease.basic_information.formats){
            for (let releaseFormat of oneDiscogsRelease.basic_information.formats) {
                for (let formatDescriptor of releaseFormat?.descriptions) {
                    console.log(formatDescriptor)
                    await writeFormats(formatDescriptor, 'library')
                }
            }
        }
        // let discogsReleaseDetail = await getReleaseDetails(oneDiscogsRelease.id.toString())
        // console.log(discogsReleaseDetail)
        
    }
    return (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <p>Finished</p>
          </Suspense>
        </>
      )
}
