import { Suspense } from "react";
import { discogsShelves, getReleaseDetails, getReleases } from "../../api/discogsConnect";
import { importShelves, writeFormats, writeGenres, writeRelease, writeStyles } from "../../api/localConnect";

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
        let releaseGenreArray = new Array
        let releaseStyleArray = new Array
        var releaseFormatArray = new Array
        let releaseSlug = null

        let releaseTitle = oneDiscogsRelease.basic_information.title
        let releaseId = oneDiscogsRelease.id

        // console.log(oneDiscogsRelease)

        if (oneDiscogsRelease.basic_information.genres){
            for (let releaseGenre of oneDiscogsRelease.basic_information.genres) {
                let releaseGenreSlug = await writeGenres(releaseGenre, 'library')
                releaseGenreArray.push(releaseGenreSlug)
            }
        }

        if (oneDiscogsRelease.basic_information.styles){
            for (let releaseStyle of oneDiscogsRelease.basic_information.styles) {
                let releaseStyleSlug = await writeStyles(releaseStyle, 'library')
                releaseStyleArray.push(releaseStyleSlug)
            }
        }

        if (oneDiscogsRelease.basic_information.formats){
            for (let releaseFormat of oneDiscogsRelease.basic_information.formats) {
                // console.log(releaseFormat)
                let releaseFormatSlug = await writeFormats(releaseFormat.name, 'library')
                releaseFormatArray.push(releaseFormatSlug)
                if (releaseFormat.descriptions){
                    for (let formatDescriptor of releaseFormat.descriptions) {
                        // console.log(formatDescriptor)
                        let formatDescriptorSlug = await writeFormats(formatDescriptor, 'library')
                        releaseFormatArray.push(formatDescriptorSlug)
                    }
                }
            }
        }

        //TODO ARTISTS

        //TODO RECORD LABELS

        //TODO RELEASE DETAILS

        let discogsReleaseDetail = await getReleaseDetails(oneDiscogsRelease.id.toString())
        // console.log(discogsReleaseDetail)
        releaseSlug = await writeRelease(discogsReleaseDetail.data, oneDiscogsRelease.folder_id, oneDiscogsRelease.date_added, 'library', releaseGenreArray, releaseStyleArray, releaseFormatArray)

        //TODO ADD TRACKS
        
    }
    return (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <p>Finished</p>
          </Suspense>
        </>
      )
}
