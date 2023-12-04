import { Suspense } from 'react';
import {
  discogsShelves,
  getReleaseDetails,
  getReleases,
} from '../../api/discogsConnect';
import {
  fetchReleaseDetails,
  releaseSlugs,
  writeArtists,
  writeFormats,
  writeGenres,
  writeRecordLabels,
  writeRelease,
  writeStyles,
} from '../../api/localConnect';
import { fetchShelf, writeShelves } from '@/app/api/shelves';
import { generateSlugs } from '@/app/api/utilities';

const download = require('image-downloader');

let path = require('path');
let fs = require('fs');

export default async function main() {
  await writeShelves();

  let discogsReleaseList = await getReleases();
  let fullDiscogsReleaseList = new Array();
  let pagination = discogsReleaseList.pagination;
  let releases = undefined;
  releases = discogsReleaseList.releases;

  for (let i = 1; i <= pagination.pages; i++) {
    discogsReleaseList = await getReleases(i.toString());
    fullDiscogsReleaseList = fullDiscogsReleaseList.concat(
      discogsReleaseList.releases,
    );
  }

  for (let oneDiscogsRelease of fullDiscogsReleaseList) {
    let releaseGenreArray = new Set();
    let releaseStyleArray = new Set();
    let releaseFormatArray = new Set();
    let releaseArtistArray = new Set();
    let releaseRecordLabelArray = new Set();
    let releaseShelfArray = new Array();
    let releaseSlug = null;

    let releaseTitle = oneDiscogsRelease.basic_information.title;
    let releaseId = oneDiscogsRelease.id;

    let releaseSlugList = await releaseSlugs();

    let isReleaseInLibrary: any = null;

    isReleaseInLibrary = await fetchReleaseDetails(
      await generateSlugs(releaseTitle + ' ' + releaseId),
    );
    console.log(await generateSlugs(releaseTitle + ' ' + releaseId));

    if (isReleaseInLibrary.status) {
      console.log(isReleaseInLibrary.status);
      if (isReleaseInLibrary.status == 404) {
        console.log('Release Not In Library. Importing...');
        // console.log(oneDiscogsRelease)

        releaseShelfArray = await fetchShelf(oneDiscogsRelease.folder_id);

        if (oneDiscogsRelease.basic_information.genres) {
          for (let releaseGenre of oneDiscogsRelease.basic_information.genres) {
            let releaseGenreSlug = await writeGenres(releaseGenre, 'library');
            releaseGenreArray.add(releaseGenreSlug);
          }
        }

        if (oneDiscogsRelease.basic_information.styles) {
          for (let releaseStyle of oneDiscogsRelease.basic_information.styles) {
            let releaseStyleSlug = await writeStyles(releaseStyle, 'library');
            releaseStyleArray.add(releaseStyleSlug);
          }
        }

        if (oneDiscogsRelease.basic_information.formats) {
          for (let releaseFormat of oneDiscogsRelease.basic_information
            .formats) {
            // console.log(releaseFormat)
            let releaseFormatSlug = await writeFormats(
              releaseFormat.name,
              'library',
            );
            releaseFormatArray.add(releaseFormatSlug);
            if (releaseFormat.descriptions) {
              for (let formatDescriptor of releaseFormat.descriptions) {
                // console.log(formatDescriptor)
                let formatDescriptorSlug = await writeFormats(
                  formatDescriptor,
                  'library',
                );
                releaseFormatArray.add(formatDescriptorSlug);
              }
            }
          }
        }

        if (oneDiscogsRelease.basic_information.artists) {
          for (let releaseArtist of oneDiscogsRelease.basic_information
            .artists) {
            let releaseArtistSlug = await writeArtists(
              releaseArtist,
              'library',
            );
            releaseArtistArray.add(releaseArtistSlug);
            console.log(releaseArtistArray);
          }
        }

        if (oneDiscogsRelease.basic_information.labels) {
          for (let releaseRecordLabel of oneDiscogsRelease.basic_information
            .labels) {
            let releaseRecordLabelSlug = await writeRecordLabels(
              releaseRecordLabel,
              'library',
            );
            releaseRecordLabelArray.add(releaseRecordLabelSlug);
            console.log(releaseRecordLabelArray);
          }
        }

        //TODO RELEASE DETAILS

        let discogsReleaseDetail = await getReleaseDetails(
          oneDiscogsRelease.id.toString(),
        );
        // console.log(discogsReleaseDetail)
        releaseSlug = await writeRelease(
          discogsReleaseDetail.data,
          oneDiscogsRelease.folder_id,
          oneDiscogsRelease.date_added,
          'library',
          releaseGenreArray,
          releaseStyleArray,
          releaseFormatArray,
          releaseArtistArray,
          releaseRecordLabelArray,
          releaseShelfArray,
        );

        //TODO ADD TRACKS
      } else {
        console.log('Release Already In Library. Skipping...');
        // console.log(isReleaseInLibrary)
      }
    }
  }
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <p>Finished</p>
      </Suspense>
    </>
  );
}
