-- CreateEnum
CREATE TYPE "FeatureType" AS ENUM ('None', 'Listener_Request', 'HalfPast_DoubleShot', 'In_Memoriam', 'Featured_On_Promo_Image', 'Featured_Artist', 'Featured_Album', 'Track_By_Track', 'Lefting_Original', 'Lefting_Cover', 'Special_3_Play', 'Special_4_Play', 'Golden_Year', 'World_Tour');

-- CreateEnum
CREATE TYPE "TrackStatus" AS ENUM ('Requested', 'Played', 'Current', 'Next', 'Listed', 'Rejected');

-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('Requested', 'Added_To_Playlist', 'Rejected');

-- CreateTable
CREATE TABLE "activityLog" (
    "activityLogId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "activityLogMessage" VARCHAR(2048) NOT NULL,
    "activityCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activityLog_pkey" PRIMARY KEY ("activityLogId")
);

-- CreateTable
CREATE TABLE "activityLogEntryType" (
    "activityLogEntryTypeName" VARCHAR(64) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activityLogEntryType_pkey" PRIMARY KEY ("activityLogEntryTypeName")
);

-- CreateTable
CREATE TABLE "availableShows" (
    "availableShowsName" VARCHAR(512) NOT NULL,
    "availableShowsImage" VARCHAR(1024) NOT NULL,
    "availableShowsAbout" VARCHAR(2048),
    "availableShowsDuration" INTEGER NOT NULL,
    "availableShowsActive" BOOLEAN DEFAULT false,
    "availableShowsSlug" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "availableShows_pkey" PRIMARY KEY ("availableShowsSlug")
);

-- CreateTable
CREATE TABLE "blogCollectionItems" (
    "blogCollectionItemsId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "collectionReason" VARCHAR(4096) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blogCollectionItems_pkey" PRIMARY KEY ("blogCollectionItemsId")
);

-- CreateTable
CREATE TABLE "blogPAPlaylistItems" (
    "paPlaylistItemsId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "paPlaylistReason" VARCHAR(4096),
    "paBoxSet" BOOLEAN NOT NULL DEFAULT false,
    "paAlbum" BOOLEAN NOT NULL DEFAULT false,
    "paSingle" BOOLEAN NOT NULL DEFAULT false,
    "paBook" BOOLEAN NOT NULL DEFAULT false,
    "paBookTitle" VARCHAR(512),
    "paBookAuthor" VARCHAR(512),
    "paBookImageURL" VARCHAR(1024),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blogPAPlaylistItems_pkey" PRIMARY KEY ("paPlaylistItemsId")
);

-- CreateTable
CREATE TABLE "blogPlaylist" (
    "blogPlaylistTitle" VARCHAR(128) NOT NULL,
    "blogPlaylistIntro" VARCHAR(1024) NOT NULL,
    "blogPlaylistImage" VARCHAR(1024),
    "blogPlayListSMImage" VARCHAR(1024),
    "blogPlayListListenAgain" VARCHAR(512),
    "viewCounter" INTEGER NOT NULL DEFAULT 0,
    "blogPlaylistSlug" VARCHAR(160) NOT NULL,
    "blogPlaylistPublishDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blogPlaylistPublished" BOOLEAN NOT NULL DEFAULT true,
    "blogPlaylistCurrent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blogPlaylist_pkey" PRIMARY KEY ("blogPlaylistSlug")
);

-- CreateTable
CREATE TABLE "blogPost" (
    "blogPostTitle" VARCHAR(128) NOT NULL,
    "blogPostIntro" VARCHAR(1024) NOT NULL,
    "blogPostImage" VARCHAR(1024),
    "blogPostSMImage" VARCHAR(1024),
    "blogPostContent" VARCHAR(20480),
    "viewCounter" INTEGER NOT NULL DEFAULT 0,
    "blogPostSlug" VARCHAR(160) NOT NULL,
    "blogPostPublishDate" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blogPostPublished" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blogPost_pkey" PRIMARY KEY ("blogPostSlug")
);

-- CreateTable
CREATE TABLE "blogPostType" (
    "postTypes" VARCHAR(512) NOT NULL,
    "isBlogPost" BOOLEAN NOT NULL DEFAULT false,
    "isPlaylist" BOOLEAN NOT NULL DEFAULT false,
    "postTypesSlug" VARCHAR(512) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blogPostType_pkey" PRIMARY KEY ("postTypes")
);

-- CreateTable
CREATE TABLE "bookedShows" (
    "bookedShowsFirst" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "bookedShowsLast" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "bookedShowsWeek1" BOOLEAN DEFAULT false,
    "bookedShowsWeek2" BOOLEAN DEFAULT false,
    "bookedShowsWeek3" BOOLEAN DEFAULT false,
    "bookedShowsWeek4" BOOLEAN DEFAULT false,
    "bookedShowsWeek5" BOOLEAN DEFAULT false,
    "bookedShowsActive" BOOLEAN DEFAULT false,
    "bookedShowsSlug" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bookedShows_pkey" PRIMARY KEY ("bookedShowsSlug")
);

-- CreateTable
CREATE TABLE "globalTags" (
    "tagSlug" VARCHAR(512) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "globalTags_pkey" PRIMARY KEY ("tagSlug")
);

-- CreateTable
CREATE TABLE "libraryArtists" (
    "artistId" VARCHAR(256) NOT NULL,
    "artistName" VARCHAR(512) NOT NULL,
    "artistDiscogsPage" VARCHAR(1024) NOT NULL DEFAULT '#',
    "artistSortLetter" VARCHAR(1) NOT NULL DEFAULT '-',
    "artistSortName" VARCHAR(256) NOT NULL DEFAULT '-',
    "artistReleaseQuantity" INTEGER NOT NULL DEFAULT 0,
    "artistTrackQuantity" INTEGER NOT NULL DEFAULT 0,
    "artistSlug" VARCHAR(300) NOT NULL,
    "artistLibrary" BOOLEAN NOT NULL DEFAULT false,
    "artistWantlist" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "libraryArtists_pkey" PRIMARY KEY ("artistSlug")
);

-- CreateTable
CREATE TABLE "libraryFormats" (
    "format" VARCHAR(256) NOT NULL,
    "formatCount" INTEGER NOT NULL DEFAULT 0,
    "formatLibrary" BOOLEAN NOT NULL DEFAULT false,
    "formatWantlist" BOOLEAN NOT NULL DEFAULT false,
    "formatSlug" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "libraryFormats_pkey" PRIMARY KEY ("formatSlug")
);

-- CreateTable
CREATE TABLE "libraryGenres" (
    "genre" VARCHAR(256) NOT NULL,
    "genreCount" INTEGER NOT NULL DEFAULT 0,
    "genreLibrary" BOOLEAN NOT NULL DEFAULT false,
    "genreWantlist" BOOLEAN NOT NULL DEFAULT false,
    "genreHasNewReleases" BOOLEAN NOT NULL DEFAULT false,
    "genreSlug" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "libraryGenres_pkey" PRIMARY KEY ("genreSlug")
);

-- CreateTable
CREATE TABLE "libraryLocations" (
    "locationId" VARCHAR(256) NOT NULL,
    "location" VARCHAR(256) NOT NULL,
    "locationCount" INTEGER NOT NULL DEFAULT 0,
    "locationSlug" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "libraryLocations_pkey" PRIMARY KEY ("locationSlug")
);

-- CreateTable
CREATE TABLE "libraryRecordLabels" (
    "recordlabelId" VARCHAR(256) NOT NULL,
    "recordlabelName" VARCHAR(512) NOT NULL,
    "recordlabelDiscogsPage" VARCHAR(1024) NOT NULL DEFAULT '#',
    "recordlabelSortLetter" VARCHAR(1) NOT NULL DEFAULT '-',
    "recordlabelSortName" VARCHAR(256) NOT NULL DEFAULT '-',
    "recordlabelImageUrl" VARCHAR(1024) NOT NULL DEFAULT '#',
    "recordlabelReleaseQuantity" INTEGER NOT NULL DEFAULT 0,
    "recordlabelTrackQuantity" INTEGER NOT NULL DEFAULT 0,
    "recordlabelSlug" VARCHAR(300) NOT NULL,
    "recordlabelLibrary" BOOLEAN NOT NULL DEFAULT false,
    "recordlabelWantlist" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "libraryRecordLabels_pkey" PRIMARY KEY ("recordlabelSlug")
);

-- CreateTable
CREATE TABLE "libraryReleases" (
    "releaseId" VARCHAR(256) NOT NULL,
    "releaseMasterId" VARCHAR(256) NOT NULL,
    "releaseDiscogsPage" VARCHAR(1024) NOT NULL DEFAULT '#',
    "releaseTitle" VARCHAR(512) NOT NULL,
    "releaseLocalImage" VARCHAR(1024) NOT NULL,
    "releaseDiscogsImageUrl" VARCHAR(1024) NOT NULL DEFAULT '#',
    "releaseSortLetter" VARCHAR(1) NOT NULL DEFAULT '-',
    "releaseSortName" VARCHAR(512) NOT NULL DEFAULT '-',
    "releaseCatalogueNumber" VARCHAR(512) NOT NULL DEFAULT '-',
    "releaseTrackCount" INTEGER NOT NULL DEFAULT 0,
    "releaseYear" INTEGER NOT NULL DEFAULT 0,
    "releaseDecade50s" BOOLEAN NOT NULL DEFAULT false,
    "releaseDecade60s" BOOLEAN NOT NULL DEFAULT false,
    "releaseDecade70s" BOOLEAN NOT NULL DEFAULT false,
    "releaseDecade80s" BOOLEAN NOT NULL DEFAULT false,
    "releaseDecade90s" BOOLEAN NOT NULL DEFAULT false,
    "releaseDecade00s" BOOLEAN NOT NULL DEFAULT false,
    "releaseDecade10s" BOOLEAN NOT NULL DEFAULT false,
    "releaseDecade20s" BOOLEAN NOT NULL DEFAULT false,
    "releaseNumberDiscs" INTEGER NOT NULL DEFAULT 0,
    "releaseReviewRating" INTEGER NOT NULL DEFAULT 0,
    "releaseWantlistRating" INTEGER NOT NULL DEFAULT 0,
    "releaseTimesPlayed" INTEGER NOT NULL DEFAULT 0,
    "releaseLastPlayed" TIMESTAMPTZ(6) NOT NULL DEFAULT '1970-01-01 01:00:01+00'::timestamp with time zone,
    "releaseAddedToDiscogs" TIMESTAMPTZ(6) NOT NULL DEFAULT '1970-01-01 01:00:01+00'::timestamp with time zone,
    "releaseIsNewAddition" BOOLEAN NOT NULL DEFAULT false,
    "releaseIsNew" BOOLEAN NOT NULL DEFAULT false,
    "releaseTracksAdded" TIMESTAMPTZ(6) NOT NULL DEFAULT '1970-01-01 01:00:01+00'::timestamp with time zone,
    "releaseLibrary" BOOLEAN NOT NULL DEFAULT false,
    "releaseWantlist" BOOLEAN NOT NULL DEFAULT false,
    "releaseSlug" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "libraryReleases_pkey" PRIMARY KEY ("releaseSlug")
);

-- CreateTable
CREATE TABLE "libraryShelves" (
    "shelfId" VARCHAR(256) NOT NULL,
    "shelfName" VARCHAR(512) NOT NULL,
    "shelfCount" INTEGER NOT NULL DEFAULT 0,
    "shelfLibrary" BOOLEAN NOT NULL DEFAULT false,
    "shelfWantlist" BOOLEAN NOT NULL DEFAULT false,
    "shelfPrivate" BOOLEAN NOT NULL DEFAULT false,
    "shelfSlug" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "libraryShelves_pkey" PRIMARY KEY ("shelfSlug")
);

-- CreateTable
CREATE TABLE "libraryStyles" (
    "style" VARCHAR(256) NOT NULL,
    "styleCount" INTEGER NOT NULL DEFAULT 0,
    "styleLibrary" BOOLEAN NOT NULL DEFAULT false,
    "styleWantlist" BOOLEAN NOT NULL DEFAULT false,
    "styleSlug" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "libraryStyles_pkey" PRIMARY KEY ("styleSlug")
);

-- CreateTable
CREATE TABLE "libraryTracks" (
    "trackId" VARCHAR(256) NOT NULL,
    "trackPosition" VARCHAR(256) NOT NULL,
    "trackTitle" VARCHAR(1024) NOT NULL,
    "trackSortLetter" VARCHAR(1) NOT NULL DEFAULT '-',
    "trackSortName" VARCHAR(1024) NOT NULL DEFAULT '-',
    "trackTimesPlayed21" INTEGER NOT NULL DEFAULT 0,
    "trackTimesPlayed22" INTEGER NOT NULL DEFAULT 0,
    "trackTimesPlayed23" INTEGER NOT NULL DEFAULT 0,
    "trackLastPlayed" TIMESTAMPTZ(6) NOT NULL DEFAULT '1970-01-01 01:00:01+00'::timestamp with time zone,
    "trackIsHeading" BOOLEAN NOT NULL DEFAULT false,
    "trackIsIndex" BOOLEAN NOT NULL DEFAULT false,
    "trackIsSubtrack" BOOLEAN NOT NULL DEFAULT false,
    "trackSlug" VARCHAR(1024) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "libraryTracks_pkey" PRIMARY KEY ("trackSlug")
);

-- CreateTable
CREATE TABLE "libraryUnavailableReasons" (
    "unavailablereason" VARCHAR(512) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "libraryUnavailableReasons_pkey" PRIMARY KEY ("unavailablereason")
);

-- CreateTable
CREATE TABLE "radioStationDetails" (
    "radioStationDetailsName" VARCHAR(512) NOT NULL,
    "radioStationDetailsAbout" VARCHAR(2048),
    "radioStationDetailsLogo" VARCHAR(256) NOT NULL,
    "radioStationDetailsURL" VARCHAR(512) NOT NULL,
    "radioStationDetailsActive" BOOLEAN NOT NULL DEFAULT false,
    "radioStationDetailsLiveStream" VARCHAR(512),
    "radioStationDetailsSlug" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "radioStationDetails_pkey" PRIMARY KEY ("radioStationDetailsSlug")
);

-- CreateTable
CREATE TABLE "showTypes" (
    "showType" VARCHAR(30) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "showTypes_pkey" PRIMARY KEY ("showType")
);

-- CreateTable
CREATE TABLE "socialMedia" (
    "socialMediaId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "socialMediaPlatform" VARCHAR(256) NOT NULL,
    "socialMediaLink" VARCHAR(256) NOT NULL,
    "socialMediaIcon" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "socialMedia_pkey" PRIMARY KEY ("socialMediaId")
);

-- CreateTable
CREATE TABLE "trackOnPlaylist" (
    "trackOnPlaylistId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "trackStatus" "TrackStatus" NOT NULL DEFAULT 'Listed',
    "trackFeature" "FeatureType",
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "trackOnPlaylist_pkey" PRIMARY KEY ("trackOnPlaylistId")
);

-- CreateTable
CREATE TABLE "trackPlanning" (
    "trackPlanningId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "trackFeature" "FeatureType" DEFAULT 'Listener_Request',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "requestedBy" VARCHAR(256),
    "requestedFor" VARCHAR(256),
    "requestMessage" VARCHAR(512),
    "trackPlayed" "RequestStatus" NOT NULL DEFAULT 'Requested',

    CONSTRAINT "trackPlanning_pkey" PRIMARY KEY ("trackPlanningId")
);

-- CreateTable
CREATE TABLE "userAccounts" (
    "userAccountName" VARCHAR(512) NOT NULL,
    "userAccountPassword" VARCHAR(512) NOT NULL,
    "userAccountEmail" VARCHAR(512) NOT NULL,
    "userAccountEnabled" BOOLEAN NOT NULL DEFAULT false,
    "userAccountDeleted" BOOLEAN NOT NULL DEFAULT false,
    "userAccountAdministrator" BOOLEAN NOT NULL DEFAULT false,
    "userAccountSlug" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userAccounts_pkey" PRIMARY KEY ("userAccountSlug")
);

-- CreateTable
CREATE TABLE "vinylEmporiums" (
    "vinylEmporiumId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "vinylEmporiumName" VARCHAR(512) NOT NULL,
    "vinylEmporiumStreet" VARCHAR(512),
    "vinylEmporiumTown" VARCHAR(512) NOT NULL,
    "vinylEmporiumCounty" VARCHAR(512),
    "vinylEmporiumPostcode" VARCHAR(10),
    "vinylEmporiumCountry" VARCHAR(128),
    "vinylEmporiumPhone" VARCHAR(32),
    "vinylEmporiumEmail" VARCHAR(512),
    "vinylEmporiumGoogleMaps" VARCHAR(512),
    "vinylEmporiumDiscogsStore" VARCHAR(512),
    "vinylEmporiumWebsite" VARCHAR(512),
    "vinylEmporiumFaceBook" VARCHAR(512),
    "vinylEmporiumTwitter" VARCHAR(512),
    "vinylEmporiumInstagram" VARCHAR(512),
    "vinylEmporiumYouTube" VARCHAR(512),

    CONSTRAINT "vinylEmporiums_pkey" PRIMARY KEY ("vinylEmporiumId")
);

-- CreateTable
CREATE TABLE "_activityLogToactivityLogEntryType" (
    "A" UUID NOT NULL,
    "B" VARCHAR(64) NOT NULL
);

-- CreateTable
CREATE TABLE "_availableShowsTobookedShows" (
    "A" VARCHAR(256) NOT NULL,
    "B" VARCHAR(256) NOT NULL
);

-- CreateTable
CREATE TABLE "_availableShowsToshowTypes" (
    "A" VARCHAR(256) NOT NULL,
    "B" VARCHAR(30) NOT NULL
);

-- CreateTable
CREATE TABLE "_blogCollectionItemsToblogPost" (
    "A" UUID NOT NULL,
    "B" VARCHAR(160) NOT NULL
);

-- CreateTable
CREATE TABLE "_blogCollectionItemsTolibraryReleases" (
    "A" UUID NOT NULL,
    "B" VARCHAR(300) NOT NULL
);

-- CreateTable
CREATE TABLE "_blogPAPlaylistItemsToblogPost" (
    "A" UUID NOT NULL,
    "B" VARCHAR(160) NOT NULL
);

-- CreateTable
CREATE TABLE "_blogPAPlaylistItemsTolibraryReleases" (
    "A" UUID NOT NULL,
    "B" VARCHAR(300) NOT NULL
);

-- CreateTable
CREATE TABLE "_blogPlaylistToblogPost" (
    "A" VARCHAR(160) NOT NULL,
    "B" VARCHAR(160) NOT NULL
);

-- CreateTable
CREATE TABLE "_blogPlaylistTobookedShows" (
    "A" VARCHAR(160) NOT NULL,
    "B" VARCHAR(256) NOT NULL
);

-- CreateTable
CREATE TABLE "_blogPlaylistToglobalTags" (
    "A" VARCHAR(160) NOT NULL,
    "B" VARCHAR(512) NOT NULL
);

-- CreateTable
CREATE TABLE "_blogPlaylistTotrackOnPlaylist" (
    "A" VARCHAR(160) NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_blogPlaylistTouserAccounts" (
    "A" VARCHAR(160) NOT NULL,
    "B" VARCHAR(256) NOT NULL
);

-- CreateTable
CREATE TABLE "_blogPostToblogPostType" (
    "A" VARCHAR(160) NOT NULL,
    "B" VARCHAR(512) NOT NULL
);

-- CreateTable
CREATE TABLE "_blogPostToglobalTags" (
    "A" VARCHAR(160) NOT NULL,
    "B" VARCHAR(512) NOT NULL
);

-- CreateTable
CREATE TABLE "_blogPostTolibraryReleases" (
    "A" VARCHAR(160) NOT NULL,
    "B" VARCHAR(300) NOT NULL
);

-- CreateTable
CREATE TABLE "_blogPostTouserAccounts" (
    "A" VARCHAR(160) NOT NULL,
    "B" VARCHAR(256) NOT NULL
);

-- CreateTable
CREATE TABLE "_bookedShowsToradioStationDetails" (
    "A" VARCHAR(256) NOT NULL,
    "B" VARCHAR(256) NOT NULL
);

-- CreateTable
CREATE TABLE "_bookedShowsToshowTypes" (
    "A" VARCHAR(256) NOT NULL,
    "B" VARCHAR(30) NOT NULL
);

-- CreateTable
CREATE TABLE "_libraryArtistsTolibraryReleases" (
    "A" VARCHAR(300) NOT NULL,
    "B" VARCHAR(300) NOT NULL
);

-- CreateTable
CREATE TABLE "_libraryArtistsTolibraryTracks" (
    "A" VARCHAR(300) NOT NULL,
    "B" VARCHAR(1024) NOT NULL
);

-- CreateTable
CREATE TABLE "_libraryFormatsTolibraryReleases" (
    "A" VARCHAR(256) NOT NULL,
    "B" VARCHAR(300) NOT NULL
);

-- CreateTable
CREATE TABLE "_libraryGenresTolibraryReleases" (
    "A" VARCHAR(256) NOT NULL,
    "B" VARCHAR(300) NOT NULL
);

-- CreateTable
CREATE TABLE "_currentLocation" (
    "A" VARCHAR(300) NOT NULL,
    "B" VARCHAR(300) NOT NULL
);

-- CreateTable
CREATE TABLE "_libraryLocation" (
    "A" VARCHAR(300) NOT NULL,
    "B" VARCHAR(300) NOT NULL
);

-- CreateTable
CREATE TABLE "_libraryRecordLabelsTolibraryReleases" (
    "A" VARCHAR(300) NOT NULL,
    "B" VARCHAR(300) NOT NULL
);

-- CreateTable
CREATE TABLE "_libraryReleasesTolibraryShelves" (
    "A" VARCHAR(300) NOT NULL,
    "B" VARCHAR(300) NOT NULL
);

-- CreateTable
CREATE TABLE "_libraryReleasesTolibraryStyles" (
    "A" VARCHAR(300) NOT NULL,
    "B" VARCHAR(256) NOT NULL
);

-- CreateTable
CREATE TABLE "_libraryReleasesTolibraryTracks" (
    "A" VARCHAR(300) NOT NULL,
    "B" VARCHAR(1024) NOT NULL
);

-- CreateTable
CREATE TABLE "_releaseUnavailable" (
    "A" VARCHAR(300) NOT NULL,
    "B" VARCHAR(512) NOT NULL
);

-- CreateTable
CREATE TABLE "_libraryTracksTotrackOnPlaylist" (
    "A" VARCHAR(1024) NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_libraryTracksTotrackPlanning" (
    "A" VARCHAR(1024) NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_trackUnavailable" (
    "A" VARCHAR(1024) NOT NULL,
    "B" VARCHAR(512) NOT NULL
);

-- CreateTable
CREATE TABLE "_radioStationDetailsTosocialMedia" (
    "A" VARCHAR(256) NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_trackOnPlaylistTotrackPlanning" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "activityLogEntryType_activityLogEntryTypeName_key" ON "activityLogEntryType"("activityLogEntryTypeName");

-- CreateIndex
CREATE UNIQUE INDEX "blogPost_blogPostSlug_key" ON "blogPost"("blogPostSlug");

-- CreateIndex
CREATE UNIQUE INDEX "blogPostType_postTypes_key" ON "blogPostType"("postTypes");

-- CreateIndex
CREATE UNIQUE INDEX "blogPostType_postTypesSlug_key" ON "blogPostType"("postTypesSlug");

-- CreateIndex
CREATE UNIQUE INDEX "globalTags_tagSlug_key" ON "globalTags"("tagSlug");

-- CreateIndex
CREATE UNIQUE INDEX "libraryArtists_artistId_key" ON "libraryArtists"("artistId");

-- CreateIndex
CREATE UNIQUE INDEX "libraryArtists_artistSlug_key" ON "libraryArtists"("artistSlug");

-- CreateIndex
CREATE UNIQUE INDEX "libraryFormats_format_key" ON "libraryFormats"("format");

-- CreateIndex
CREATE UNIQUE INDEX "libraryFormats_formatSlug_key" ON "libraryFormats"("formatSlug");

-- CreateIndex
CREATE UNIQUE INDEX "libraryGenres_genre_key" ON "libraryGenres"("genre");

-- CreateIndex
CREATE UNIQUE INDEX "libraryGenres_genreSlug_key" ON "libraryGenres"("genreSlug");

-- CreateIndex
CREATE UNIQUE INDEX "libraryLocations_locationId_key" ON "libraryLocations"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "libraryLocations_locationSlug_key" ON "libraryLocations"("locationSlug");

-- CreateIndex
CREATE UNIQUE INDEX "libraryRecordLabels_recordlabelId_key" ON "libraryRecordLabels"("recordlabelId");

-- CreateIndex
CREATE UNIQUE INDEX "libraryRecordLabels_recordlabelSlug_key" ON "libraryRecordLabels"("recordlabelSlug");

-- CreateIndex
CREATE UNIQUE INDEX "libraryReleases_releaseId_key" ON "libraryReleases"("releaseId");

-- CreateIndex
CREATE UNIQUE INDEX "libraryReleases_releaseSlug_key" ON "libraryReleases"("releaseSlug");

-- CreateIndex
CREATE UNIQUE INDEX "libraryShelves_shelfId_key" ON "libraryShelves"("shelfId");

-- CreateIndex
CREATE UNIQUE INDEX "libraryShelves_shelfSlug_key" ON "libraryShelves"("shelfSlug");

-- CreateIndex
CREATE UNIQUE INDEX "libraryStyles_style_key" ON "libraryStyles"("style");

-- CreateIndex
CREATE UNIQUE INDEX "libraryStyles_styleSlug_key" ON "libraryStyles"("styleSlug");

-- CreateIndex
CREATE UNIQUE INDEX "libraryTracks_trackId_key" ON "libraryTracks"("trackId");

-- CreateIndex
CREATE UNIQUE INDEX "libraryTracks_trackSlug_key" ON "libraryTracks"("trackSlug");

-- CreateIndex
CREATE UNIQUE INDEX "libraryUnavailableReasons_unavailablereason_key" ON "libraryUnavailableReasons"("unavailablereason");

-- CreateIndex
CREATE UNIQUE INDEX "showTypes_showType_key" ON "showTypes"("showType");

-- CreateIndex
CREATE UNIQUE INDEX "userAccounts_userAccountEmail_key" ON "userAccounts"("userAccountEmail");

-- CreateIndex
CREATE UNIQUE INDEX "userAccounts_userAccountSlug_key" ON "userAccounts"("userAccountSlug");

-- CreateIndex
CREATE UNIQUE INDEX "_activityLogToactivityLogEntryType_AB_unique" ON "_activityLogToactivityLogEntryType"("A", "B");

-- CreateIndex
CREATE INDEX "_activityLogToactivityLogEntryType_B_index" ON "_activityLogToactivityLogEntryType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_availableShowsTobookedShows_AB_unique" ON "_availableShowsTobookedShows"("A", "B");

-- CreateIndex
CREATE INDEX "_availableShowsTobookedShows_B_index" ON "_availableShowsTobookedShows"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_availableShowsToshowTypes_AB_unique" ON "_availableShowsToshowTypes"("A", "B");

-- CreateIndex
CREATE INDEX "_availableShowsToshowTypes_B_index" ON "_availableShowsToshowTypes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogCollectionItemsToblogPost_AB_unique" ON "_blogCollectionItemsToblogPost"("A", "B");

-- CreateIndex
CREATE INDEX "_blogCollectionItemsToblogPost_B_index" ON "_blogCollectionItemsToblogPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogCollectionItemsTolibraryReleases_AB_unique" ON "_blogCollectionItemsTolibraryReleases"("A", "B");

-- CreateIndex
CREATE INDEX "_blogCollectionItemsTolibraryReleases_B_index" ON "_blogCollectionItemsTolibraryReleases"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogPAPlaylistItemsToblogPost_AB_unique" ON "_blogPAPlaylistItemsToblogPost"("A", "B");

-- CreateIndex
CREATE INDEX "_blogPAPlaylistItemsToblogPost_B_index" ON "_blogPAPlaylistItemsToblogPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogPAPlaylistItemsTolibraryReleases_AB_unique" ON "_blogPAPlaylistItemsTolibraryReleases"("A", "B");

-- CreateIndex
CREATE INDEX "_blogPAPlaylistItemsTolibraryReleases_B_index" ON "_blogPAPlaylistItemsTolibraryReleases"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogPlaylistToblogPost_AB_unique" ON "_blogPlaylistToblogPost"("A", "B");

-- CreateIndex
CREATE INDEX "_blogPlaylistToblogPost_B_index" ON "_blogPlaylistToblogPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogPlaylistTobookedShows_AB_unique" ON "_blogPlaylistTobookedShows"("A", "B");

-- CreateIndex
CREATE INDEX "_blogPlaylistTobookedShows_B_index" ON "_blogPlaylistTobookedShows"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogPlaylistToglobalTags_AB_unique" ON "_blogPlaylistToglobalTags"("A", "B");

-- CreateIndex
CREATE INDEX "_blogPlaylistToglobalTags_B_index" ON "_blogPlaylistToglobalTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogPlaylistTotrackOnPlaylist_AB_unique" ON "_blogPlaylistTotrackOnPlaylist"("A", "B");

-- CreateIndex
CREATE INDEX "_blogPlaylistTotrackOnPlaylist_B_index" ON "_blogPlaylistTotrackOnPlaylist"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogPlaylistTouserAccounts_AB_unique" ON "_blogPlaylistTouserAccounts"("A", "B");

-- CreateIndex
CREATE INDEX "_blogPlaylistTouserAccounts_B_index" ON "_blogPlaylistTouserAccounts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogPostToblogPostType_AB_unique" ON "_blogPostToblogPostType"("A", "B");

-- CreateIndex
CREATE INDEX "_blogPostToblogPostType_B_index" ON "_blogPostToblogPostType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogPostToglobalTags_AB_unique" ON "_blogPostToglobalTags"("A", "B");

-- CreateIndex
CREATE INDEX "_blogPostToglobalTags_B_index" ON "_blogPostToglobalTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogPostTolibraryReleases_AB_unique" ON "_blogPostTolibraryReleases"("A", "B");

-- CreateIndex
CREATE INDEX "_blogPostTolibraryReleases_B_index" ON "_blogPostTolibraryReleases"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blogPostTouserAccounts_AB_unique" ON "_blogPostTouserAccounts"("A", "B");

-- CreateIndex
CREATE INDEX "_blogPostTouserAccounts_B_index" ON "_blogPostTouserAccounts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_bookedShowsToradioStationDetails_AB_unique" ON "_bookedShowsToradioStationDetails"("A", "B");

-- CreateIndex
CREATE INDEX "_bookedShowsToradioStationDetails_B_index" ON "_bookedShowsToradioStationDetails"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_bookedShowsToshowTypes_AB_unique" ON "_bookedShowsToshowTypes"("A", "B");

-- CreateIndex
CREATE INDEX "_bookedShowsToshowTypes_B_index" ON "_bookedShowsToshowTypes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_libraryArtistsTolibraryReleases_AB_unique" ON "_libraryArtistsTolibraryReleases"("A", "B");

-- CreateIndex
CREATE INDEX "_libraryArtistsTolibraryReleases_B_index" ON "_libraryArtistsTolibraryReleases"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_libraryArtistsTolibraryTracks_AB_unique" ON "_libraryArtistsTolibraryTracks"("A", "B");

-- CreateIndex
CREATE INDEX "_libraryArtistsTolibraryTracks_B_index" ON "_libraryArtistsTolibraryTracks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_libraryFormatsTolibraryReleases_AB_unique" ON "_libraryFormatsTolibraryReleases"("A", "B");

-- CreateIndex
CREATE INDEX "_libraryFormatsTolibraryReleases_B_index" ON "_libraryFormatsTolibraryReleases"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_libraryGenresTolibraryReleases_AB_unique" ON "_libraryGenresTolibraryReleases"("A", "B");

-- CreateIndex
CREATE INDEX "_libraryGenresTolibraryReleases_B_index" ON "_libraryGenresTolibraryReleases"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_currentLocation_AB_unique" ON "_currentLocation"("A", "B");

-- CreateIndex
CREATE INDEX "_currentLocation_B_index" ON "_currentLocation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_libraryLocation_AB_unique" ON "_libraryLocation"("A", "B");

-- CreateIndex
CREATE INDEX "_libraryLocation_B_index" ON "_libraryLocation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_libraryRecordLabelsTolibraryReleases_AB_unique" ON "_libraryRecordLabelsTolibraryReleases"("A", "B");

-- CreateIndex
CREATE INDEX "_libraryRecordLabelsTolibraryReleases_B_index" ON "_libraryRecordLabelsTolibraryReleases"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_libraryReleasesTolibraryShelves_AB_unique" ON "_libraryReleasesTolibraryShelves"("A", "B");

-- CreateIndex
CREATE INDEX "_libraryReleasesTolibraryShelves_B_index" ON "_libraryReleasesTolibraryShelves"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_libraryReleasesTolibraryStyles_AB_unique" ON "_libraryReleasesTolibraryStyles"("A", "B");

-- CreateIndex
CREATE INDEX "_libraryReleasesTolibraryStyles_B_index" ON "_libraryReleasesTolibraryStyles"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_libraryReleasesTolibraryTracks_AB_unique" ON "_libraryReleasesTolibraryTracks"("A", "B");

-- CreateIndex
CREATE INDEX "_libraryReleasesTolibraryTracks_B_index" ON "_libraryReleasesTolibraryTracks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_releaseUnavailable_AB_unique" ON "_releaseUnavailable"("A", "B");

-- CreateIndex
CREATE INDEX "_releaseUnavailable_B_index" ON "_releaseUnavailable"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_libraryTracksTotrackOnPlaylist_AB_unique" ON "_libraryTracksTotrackOnPlaylist"("A", "B");

-- CreateIndex
CREATE INDEX "_libraryTracksTotrackOnPlaylist_B_index" ON "_libraryTracksTotrackOnPlaylist"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_libraryTracksTotrackPlanning_AB_unique" ON "_libraryTracksTotrackPlanning"("A", "B");

-- CreateIndex
CREATE INDEX "_libraryTracksTotrackPlanning_B_index" ON "_libraryTracksTotrackPlanning"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_trackUnavailable_AB_unique" ON "_trackUnavailable"("A", "B");

-- CreateIndex
CREATE INDEX "_trackUnavailable_B_index" ON "_trackUnavailable"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_radioStationDetailsTosocialMedia_AB_unique" ON "_radioStationDetailsTosocialMedia"("A", "B");

-- CreateIndex
CREATE INDEX "_radioStationDetailsTosocialMedia_B_index" ON "_radioStationDetailsTosocialMedia"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_trackOnPlaylistTotrackPlanning_AB_unique" ON "_trackOnPlaylistTotrackPlanning"("A", "B");

-- CreateIndex
CREATE INDEX "_trackOnPlaylistTotrackPlanning_B_index" ON "_trackOnPlaylistTotrackPlanning"("B");

-- AddForeignKey
ALTER TABLE "_activityLogToactivityLogEntryType" ADD CONSTRAINT "_activityLogToactivityLogEntryType_A_fkey" FOREIGN KEY ("A") REFERENCES "activityLog"("activityLogId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_activityLogToactivityLogEntryType" ADD CONSTRAINT "_activityLogToactivityLogEntryType_B_fkey" FOREIGN KEY ("B") REFERENCES "activityLogEntryType"("activityLogEntryTypeName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_availableShowsTobookedShows" ADD CONSTRAINT "_availableShowsTobookedShows_A_fkey" FOREIGN KEY ("A") REFERENCES "availableShows"("availableShowsSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_availableShowsTobookedShows" ADD CONSTRAINT "_availableShowsTobookedShows_B_fkey" FOREIGN KEY ("B") REFERENCES "bookedShows"("bookedShowsSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_availableShowsToshowTypes" ADD CONSTRAINT "_availableShowsToshowTypes_A_fkey" FOREIGN KEY ("A") REFERENCES "availableShows"("availableShowsSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_availableShowsToshowTypes" ADD CONSTRAINT "_availableShowsToshowTypes_B_fkey" FOREIGN KEY ("B") REFERENCES "showTypes"("showType") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogCollectionItemsToblogPost" ADD CONSTRAINT "_blogCollectionItemsToblogPost_A_fkey" FOREIGN KEY ("A") REFERENCES "blogCollectionItems"("blogCollectionItemsId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogCollectionItemsToblogPost" ADD CONSTRAINT "_blogCollectionItemsToblogPost_B_fkey" FOREIGN KEY ("B") REFERENCES "blogPost"("blogPostSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogCollectionItemsTolibraryReleases" ADD CONSTRAINT "_blogCollectionItemsTolibraryReleases_A_fkey" FOREIGN KEY ("A") REFERENCES "blogCollectionItems"("blogCollectionItemsId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogCollectionItemsTolibraryReleases" ADD CONSTRAINT "_blogCollectionItemsTolibraryReleases_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPAPlaylistItemsToblogPost" ADD CONSTRAINT "_blogPAPlaylistItemsToblogPost_A_fkey" FOREIGN KEY ("A") REFERENCES "blogPAPlaylistItems"("paPlaylistItemsId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPAPlaylistItemsToblogPost" ADD CONSTRAINT "_blogPAPlaylistItemsToblogPost_B_fkey" FOREIGN KEY ("B") REFERENCES "blogPost"("blogPostSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPAPlaylistItemsTolibraryReleases" ADD CONSTRAINT "_blogPAPlaylistItemsTolibraryReleases_A_fkey" FOREIGN KEY ("A") REFERENCES "blogPAPlaylistItems"("paPlaylistItemsId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPAPlaylistItemsTolibraryReleases" ADD CONSTRAINT "_blogPAPlaylistItemsTolibraryReleases_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPlaylistToblogPost" ADD CONSTRAINT "_blogPlaylistToblogPost_A_fkey" FOREIGN KEY ("A") REFERENCES "blogPlaylist"("blogPlaylistSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPlaylistToblogPost" ADD CONSTRAINT "_blogPlaylistToblogPost_B_fkey" FOREIGN KEY ("B") REFERENCES "blogPost"("blogPostSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPlaylistTobookedShows" ADD CONSTRAINT "_blogPlaylistTobookedShows_A_fkey" FOREIGN KEY ("A") REFERENCES "blogPlaylist"("blogPlaylistSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPlaylistTobookedShows" ADD CONSTRAINT "_blogPlaylistTobookedShows_B_fkey" FOREIGN KEY ("B") REFERENCES "bookedShows"("bookedShowsSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPlaylistToglobalTags" ADD CONSTRAINT "_blogPlaylistToglobalTags_A_fkey" FOREIGN KEY ("A") REFERENCES "blogPlaylist"("blogPlaylistSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPlaylistToglobalTags" ADD CONSTRAINT "_blogPlaylistToglobalTags_B_fkey" FOREIGN KEY ("B") REFERENCES "globalTags"("tagSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPlaylistTotrackOnPlaylist" ADD CONSTRAINT "_blogPlaylistTotrackOnPlaylist_A_fkey" FOREIGN KEY ("A") REFERENCES "blogPlaylist"("blogPlaylistSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPlaylistTotrackOnPlaylist" ADD CONSTRAINT "_blogPlaylistTotrackOnPlaylist_B_fkey" FOREIGN KEY ("B") REFERENCES "trackOnPlaylist"("trackOnPlaylistId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPlaylistTouserAccounts" ADD CONSTRAINT "_blogPlaylistTouserAccounts_A_fkey" FOREIGN KEY ("A") REFERENCES "blogPlaylist"("blogPlaylistSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPlaylistTouserAccounts" ADD CONSTRAINT "_blogPlaylistTouserAccounts_B_fkey" FOREIGN KEY ("B") REFERENCES "userAccounts"("userAccountSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPostToblogPostType" ADD CONSTRAINT "_blogPostToblogPostType_A_fkey" FOREIGN KEY ("A") REFERENCES "blogPost"("blogPostSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPostToblogPostType" ADD CONSTRAINT "_blogPostToblogPostType_B_fkey" FOREIGN KEY ("B") REFERENCES "blogPostType"("postTypes") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPostToglobalTags" ADD CONSTRAINT "_blogPostToglobalTags_A_fkey" FOREIGN KEY ("A") REFERENCES "blogPost"("blogPostSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPostToglobalTags" ADD CONSTRAINT "_blogPostToglobalTags_B_fkey" FOREIGN KEY ("B") REFERENCES "globalTags"("tagSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPostTolibraryReleases" ADD CONSTRAINT "_blogPostTolibraryReleases_A_fkey" FOREIGN KEY ("A") REFERENCES "blogPost"("blogPostSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPostTolibraryReleases" ADD CONSTRAINT "_blogPostTolibraryReleases_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPostTouserAccounts" ADD CONSTRAINT "_blogPostTouserAccounts_A_fkey" FOREIGN KEY ("A") REFERENCES "blogPost"("blogPostSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blogPostTouserAccounts" ADD CONSTRAINT "_blogPostTouserAccounts_B_fkey" FOREIGN KEY ("B") REFERENCES "userAccounts"("userAccountSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookedShowsToradioStationDetails" ADD CONSTRAINT "_bookedShowsToradioStationDetails_A_fkey" FOREIGN KEY ("A") REFERENCES "bookedShows"("bookedShowsSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookedShowsToradioStationDetails" ADD CONSTRAINT "_bookedShowsToradioStationDetails_B_fkey" FOREIGN KEY ("B") REFERENCES "radioStationDetails"("radioStationDetailsSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookedShowsToshowTypes" ADD CONSTRAINT "_bookedShowsToshowTypes_A_fkey" FOREIGN KEY ("A") REFERENCES "bookedShows"("bookedShowsSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookedShowsToshowTypes" ADD CONSTRAINT "_bookedShowsToshowTypes_B_fkey" FOREIGN KEY ("B") REFERENCES "showTypes"("showType") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryArtistsTolibraryReleases" ADD CONSTRAINT "_libraryArtistsTolibraryReleases_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryArtists"("artistSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryArtistsTolibraryReleases" ADD CONSTRAINT "_libraryArtistsTolibraryReleases_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryArtistsTolibraryTracks" ADD CONSTRAINT "_libraryArtistsTolibraryTracks_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryArtists"("artistSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryArtistsTolibraryTracks" ADD CONSTRAINT "_libraryArtistsTolibraryTracks_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryTracks"("trackSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryFormatsTolibraryReleases" ADD CONSTRAINT "_libraryFormatsTolibraryReleases_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryFormats"("formatSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryFormatsTolibraryReleases" ADD CONSTRAINT "_libraryFormatsTolibraryReleases_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryGenresTolibraryReleases" ADD CONSTRAINT "_libraryGenresTolibraryReleases_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryGenres"("genreSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryGenresTolibraryReleases" ADD CONSTRAINT "_libraryGenresTolibraryReleases_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_currentLocation" ADD CONSTRAINT "_currentLocation_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryLocations"("locationSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_currentLocation" ADD CONSTRAINT "_currentLocation_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryLocation" ADD CONSTRAINT "_libraryLocation_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryLocations"("locationSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryLocation" ADD CONSTRAINT "_libraryLocation_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryRecordLabelsTolibraryReleases" ADD CONSTRAINT "_libraryRecordLabelsTolibraryReleases_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryRecordLabels"("recordlabelSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryRecordLabelsTolibraryReleases" ADD CONSTRAINT "_libraryRecordLabelsTolibraryReleases_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryReleasesTolibraryShelves" ADD CONSTRAINT "_libraryReleasesTolibraryShelves_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryReleasesTolibraryShelves" ADD CONSTRAINT "_libraryReleasesTolibraryShelves_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryShelves"("shelfSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryReleasesTolibraryStyles" ADD CONSTRAINT "_libraryReleasesTolibraryStyles_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryReleasesTolibraryStyles" ADD CONSTRAINT "_libraryReleasesTolibraryStyles_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryStyles"("styleSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryReleasesTolibraryTracks" ADD CONSTRAINT "_libraryReleasesTolibraryTracks_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryReleasesTolibraryTracks" ADD CONSTRAINT "_libraryReleasesTolibraryTracks_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryTracks"("trackSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_releaseUnavailable" ADD CONSTRAINT "_releaseUnavailable_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryReleases"("releaseSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_releaseUnavailable" ADD CONSTRAINT "_releaseUnavailable_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryUnavailableReasons"("unavailablereason") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryTracksTotrackOnPlaylist" ADD CONSTRAINT "_libraryTracksTotrackOnPlaylist_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryTracks"("trackSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryTracksTotrackOnPlaylist" ADD CONSTRAINT "_libraryTracksTotrackOnPlaylist_B_fkey" FOREIGN KEY ("B") REFERENCES "trackOnPlaylist"("trackOnPlaylistId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryTracksTotrackPlanning" ADD CONSTRAINT "_libraryTracksTotrackPlanning_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryTracks"("trackSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_libraryTracksTotrackPlanning" ADD CONSTRAINT "_libraryTracksTotrackPlanning_B_fkey" FOREIGN KEY ("B") REFERENCES "trackPlanning"("trackPlanningId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_trackUnavailable" ADD CONSTRAINT "_trackUnavailable_A_fkey" FOREIGN KEY ("A") REFERENCES "libraryTracks"("trackSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_trackUnavailable" ADD CONSTRAINT "_trackUnavailable_B_fkey" FOREIGN KEY ("B") REFERENCES "libraryUnavailableReasons"("unavailablereason") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_radioStationDetailsTosocialMedia" ADD CONSTRAINT "_radioStationDetailsTosocialMedia_A_fkey" FOREIGN KEY ("A") REFERENCES "radioStationDetails"("radioStationDetailsSlug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_radioStationDetailsTosocialMedia" ADD CONSTRAINT "_radioStationDetailsTosocialMedia_B_fkey" FOREIGN KEY ("B") REFERENCES "socialMedia"("socialMediaId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_trackOnPlaylistTotrackPlanning" ADD CONSTRAINT "_trackOnPlaylistTotrackPlanning_A_fkey" FOREIGN KEY ("A") REFERENCES "trackOnPlaylist"("trackOnPlaylistId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_trackOnPlaylistTotrackPlanning" ADD CONSTRAINT "_trackOnPlaylistTotrackPlanning_B_fkey" FOREIGN KEY ("B") REFERENCES "trackPlanning"("trackPlanningId") ON DELETE CASCADE ON UPDATE CASCADE;
