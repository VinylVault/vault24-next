import slugify from 'slugify'
import { discogsShelves } from './discogsConnect'


export const fetchShelves = async () => {
    const libraryShelfData = new Array
    const data = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/shelves/",{ cache: 'no-store' }).then(res => res.json())
    for (let libraryData of data) {
        if (libraryData.shelfLibrary == true && !libraryData.shelfIgnore == true && !libraryData.shelfWantlist == true) {
                libraryShelfData.push(libraryData)  
        }
    }
    return libraryShelfData    
}

export const fetchArtists = async () => {
    const libraryArtistsData = new Array
    const data = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/artists/",{ cache: 'no-store' }).then(res => res.json())
    for (let libraryData of data) {
        if (libraryData.artistLibrary == true) {
                libraryArtistsData.push(libraryData)  
        }
    }
    return libraryArtistsData    
}

export const artistSlugs = async () => {
    const libraryArtistSlugData = new Array
    const data = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/artists/",{ cache: 'no-store' }).then(res => res.json())
    // console.log(data)
    for (let libraryData of data) {
        // console.log(libraryData)
        libraryArtistSlugData.push(libraryData.artistSlug)  
    }
    // console.log(libraryGenreSlugData)
    return libraryArtistSlugData
}

export const fetchGenres = async () => {
    const libraryGenreData = new Array
    const data = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/genres/").then(res => res.json())
    for (let libraryData of data) {
        if (libraryData.genreLibrary == true && !libraryData.genreWantlist == true) {
                libraryGenreData.push(libraryData)  
        }
    }
    return libraryGenreData
}

export const genreSlugs = async () => {
    const libraryGenreSlugData = new Array
    const data = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/genres/",{ cache: 'no-store' }).then(res => res.json())
    // console.log(data)
    for (let libraryData of data) {
        // console.log(libraryData)
        libraryGenreSlugData.push(libraryData.genreSlug)  
    }
    // console.log(libraryGenreSlugData)
    return libraryGenreSlugData
}

export const fetchStyles = async () => {
    const libraryStyleData = new Array
    const data = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/styles/").then(res => res.json())
    // console.log(data)
    for (let libraryData of data) {
        // console.log(libraryData)
        if (libraryData.styleLibrary == true && !libraryData.styleWantlist == true) {
                libraryStyleData.push(libraryData)  
        }
    }
    // console.log(libraryStyleData)
    return libraryStyleData
}

export const styleSlugs = async () => {
    const libraryStyleSlugData = new Array
    const data = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/styles/",{ cache: 'no-store' }).then(res => res.json())
    // console.log(data)
    for (let libraryData of data) {
        // console.log(libraryData)
        libraryStyleSlugData.push(libraryData.styleSlug)
    }  
    // console.log(libraryStyleSlugData)
    return libraryStyleSlugData
}

export const fetchFormats = async () => {
    const libraryFormatData = new Array
    const data = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/formats/",{ cache: 'no-store' }).then(res => res.json())
    // console.log(data)
    for (let libraryData of data) {
        // console.log(libraryData)
        if (libraryData.formatLibrary == true && !libraryData.formatWantlist == true) {
                libraryFormatData.push(libraryData)  
        }
    }
    // console.log(libraryFormatData)
    return libraryFormatData
}

export const formatSlugs = async () => {
    const libraryFormatSlugData = new Array
    const data = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/formats/",{ cache: 'no-store' }).then(res => res.json())
    // console.log(data)
    for (let libraryData of data) {
        // console.log(libraryData)
        libraryFormatSlugData.push(libraryData.formatSlug)
    }  
    // console.log(libraryFormatSlugData)
    return libraryFormatSlugData
}

async function generateSlugs(name:string) {
    return slugify(name, {
        replacement: '-',
        remove: /[*+~.,()'"!#?:@/-]/g,
        lower: true,
    })
}

export const importShelves = async () => {
    const shelf = new Array
    const existingShelves = new Array
    for (let shelf of await fetchShelves()) {
        existingShelves.push(shelf.shelfId)        
    }
    // console.log(existingShelves)
    for (let shelf of await discogsShelves()) {
        let shelfIgnore = 'false'
        let shelfLibrary = 'true'
        let shelfWantlist = 'false'
        if (!existingShelves.includes(shelf.id.toString())) {
            if (!process.env.PRIVATE_FOLDERS) {
                continue
            } else {
                if (process.env.PRIVATE_FOLDERS.split(", ").includes(shelf.id.toString())){
                    shelfIgnore = 'true'
                }
                let shelfSlug = await generateSlugs(shelf.name + " " + shelf.id.toString())
                console.log("Missing Shelf: " +shelfSlug + " " + shelf.name)
                let shelfToAdd = new FormData()
                    shelfToAdd.append('shelfId',shelf.id)
                    shelfToAdd.append('shelfName',shelf.name)
                    shelfToAdd.append('shelfSlug',shelfSlug)
                    shelfToAdd.append('shelfLibrary',shelfLibrary)
                    shelfToAdd.append('shelfWantlist',shelfWantlist)
                    shelfToAdd.append('shelfIgnore',shelfIgnore)
                    await fetch(`http://api.thevinylvaultshow.co.uk:7000/library_api/addshelf/`, {
                        method: 'POST',
                        body: shelfToAdd
                    })
                // console.log(shelfToAdd)
            }
        }
    }
}

export const recentReleases = async () => {
    const libraryReleaseData = new Array
    const data = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/recentreleases/",{ cache: 'no-store' }).then(res => res.json())
    for (let releaseData of data) {
        if (releaseData.releaseLibrary == true && releaseData.releaseUnavailable == false && !releaseData.releaseOrdered == true && releaseData.releaseIsNewAddition == true) {
            libraryReleaseData.push(releaseData)
        }
    }
    // console.log (libraryReleaseData)
    return libraryReleaseData
}

export const writeGenres = async (genre:string, whichList:string) => {
    let library = 'false'
    let wantlist = 'false'

    let existingGenreSlugs =  new Array
    let existingStyleSlugs =  new Array

    if (whichList == 'library') {
        library = 'true'
    } else if (whichList == 'wantlist') {
        wantlist = 'true'
    }

    let genreSlug = await generateSlugs(genre)
    
    existingGenreSlugs = await genreSlugs()
    // console.log(existingGenreSlugs)
    existingStyleSlugs = await styleSlugs()
    // console.log(existingStyleSlugs)
    
    if (!existingGenreSlugs.includes(genreSlug)) {
        let genreData = new FormData()
            genreData.append('genre',genre)
            genreData.append('genreLibrary',library)
            genreData.append('genreWantlist',wantlist)
            genreData.append('genreSlug',genreSlug)
            let response = await fetch(`http://api.thevinylvaultshow.co.uk:7000/library_api/addgenre/`, {
                method: 'POST',
                body: genreData
            }).then(res => res.json())
            if (response.status === 400) {
                console.log(response.data);
            }
        // console.log(genreData)
    } else {
        console.log("Genre Exists")
    }
    return genreSlug
}

export const writeFormats = async (format:string, whichList:string) => {
    let library = 'false'
    let wantlist = 'false'

    let existingFormatSlugs =  new Array

    if (whichList == 'library') {
        library = 'true'
    } else if (whichList == 'wantlist') {
        wantlist = 'true'
    }

    // console.log("Format: " + format)
    // console.log("Format Type: " + typeof(format))
    let formatSlug = await generateSlugs(format)
    // console.log(formatSlug)
    existingFormatSlugs = await formatSlugs()
    // console.log(existingFormatSlugs)
    
    if (!existingFormatSlugs.includes(formatSlug) && !process.env.IGNORE_FORMATS?.includes(formatSlug)) {
        let formatData = new FormData()
            formatData.append('format',format)
            formatData.append('formatLibrary',library)
            formatData.append('formatWantlist',wantlist)
            formatData.append('formatSlug',formatSlug)
            let response = await fetch(`http://api.thevinylvaultshow.co.uk:7000/library_api/addformat/`, {
                method: 'POST',
                body: formatData
            }).then(res => res.json())
            if (response.status === 400) {
                console.log(response.data);
            }
        // console.log(formatData)
    } else {
        console.log("Format Exists")
    }
    return formatSlug
}

export async function writeStyles(style:string, whichList:string) {
    let library = 'false'
    let wantlist = 'false'

    let existingGenreSlugs = new Array
    let existingStyleSlugs = new Array

    if (whichList == 'library') {
        library = 'true'
    } else if (whichList == 'wantlist') {
        wantlist = 'true'
    }

    let styleSlug = await generateSlugs(style)
    
    existingGenreSlugs = await genreSlugs()
    // console.log(existingGenreSlugs)
    existingStyleSlugs = await styleSlugs()
    // console.log(existingStyleSlugs)
    
    if (!existingStyleSlugs.includes(styleSlug)) {
        let styleData = new FormData()
            styleData.append('style',style)
            styleData.append('styleLibrary',library)
            styleData.append('styleWantlist',wantlist)
            styleData.append('styleSlug',styleSlug)
            let response = await fetch(`http://api.thevinylvaultshow.co.uk:7000/library_api/addstyle/`, {
                method: 'POST',
                body: styleData
            }).then(res => res.json())
                console.log(response);
        // console.log(styleData)
    } else {
        console.log("Style Exists")
    }
    return styleSlug
}

export const writeArtists = async (artist:object, whichList:string) => {
    let library = 'false'
    let wantlist = 'false'

    let existingArtistSlugs = new Array

    if (whichList == 'library') {
        library = 'true'
    } else if (whichList == 'wantlist') {
        wantlist = 'true'
    }





}

export const writeRelease = async (release:any, folder:string, date_added:string, whichList:string, genres:any, styles:any, formats:any) => {
    let library = 'false'
    let wantlist = 'false'
    let ordered = 'false'

    let existingReleaseSlugs = new Array

    if (whichList == 'library') {
        library = 'true'
    } else if (whichList == 'wantlist') {
        wantlist = 'true'
    }

    if (folder == "4456475"){
        ordered = 'true'
    }

    // console.log(release)

    let releaseTitleFixed = await sanitizeNamesTitles(release.title)

    let releaseDecade = await calculateReleaseDecade(release.year.toString())

    let releaseSlug = "null"

    if (releaseTitleFixed){
        releaseSlug = await generateSlugs(releaseTitleFixed[0] + " " + release.id)
    } else {
        releaseSlug = "fix-me"
    }

    let isReleaseNew = await calcualteDate(date_added, release.released)

    let releaseData = new FormData()
    releaseData.append('releaseId',release.id)
    releaseData.append('releaseMasterId',release.master_id || 'n/a')
    releaseData.append('releaseDiscogsPage',"https://www.discogs.com/release/" + release.id)
    releaseData.append('releaseTitle',release.title)
    await fetch(release.images[0].resource_url)
        .then(response => response.blob())
        .then(blob => {
            releaseData.append('releaseLocalImage', blob, releaseSlug + ".jpg");
        })
    releaseData.append('releaseDiscogsImageUrl',release.images[0].resource_url || '#')
    if (releaseTitleFixed){
    releaseData.append('releaseSortLetter', releaseTitleFixed[1])
    releaseData.append('releaseSortName', releaseTitleFixed[0])
    }
    releaseData.append('releaseCatalogueNumber',release.labels[0].catno)
    releaseData.append('releaseYear',release.year)
    releaseData.append('releaseDecade50s',releaseDecade[0])
    releaseData.append('releaseDecade60s',releaseDecade[1])
    releaseData.append('releaseDecade70s',releaseDecade[2])
    releaseData.append('releaseDecade80s',releaseDecade[3])
    releaseData.append('releaseDecade90s',releaseDecade[4])
    releaseData.append('releaseDecade00s',releaseDecade[5])
    releaseData.append('releaseDecade10s',releaseDecade[6])
    releaseData.append('releaseDecade20s',releaseDecade[7])
    releaseData.append('releaseNumberDiscs',release.format_quantity)
    releaseData.append('releaseAddedToDiscogs',date_added)
    releaseData.append('releaseIsNewAddition',isReleaseNew[0])
    releaseData.append('releaseIsNew',isReleaseNew[1])
    releaseData.append('releaseLibrary',library)
    releaseData.append('releaseOrdered',ordered)
    releaseData.append('releaseWantlist',wantlist)
    releaseData.append('releaseSlug',releaseSlug)

    let response = await fetch(`http://api.thevinylvaultshow.co.uk:7000/library_api/addrelease/`, {
        method: 'POST',
        body: releaseData
    }).then(res => res.json())
    if (response.status === 400) {
        console.log(response.data);
    }
    // console.log(releaseData)

    // console.log(genres)

    for (let genre of genres){
        let releaseGenreLink = new FormData()
        releaseGenreLink.append('releaseSlug',releaseSlug)
        releaseGenreLink.append('genreSlug',genre)
        // console.log(genre)
        // console.log(releaseGenreLink)

        let releaseGenreResponse = await fetch(`http://api.thevinylvaultshow.co.uk:7000/library_api/link/releases/genres/`, {
            method: 'POST',
            body: releaseGenreLink
        }).then(res => res.json())
        // if (releaseGenreResponse.status === 400) {
            console.log(releaseGenreResponse);
        // }
    }

    for (let style of styles){
        let releaseStyleLink = new FormData()
        releaseStyleLink.append('releaseSlug',releaseSlug)
        releaseStyleLink.append('styleSlug',style)
        // console.log(style)
        // console.log(releaseStyleLink)

        let releaseStyleResponse = await fetch(`http://api.thevinylvaultshow.co.uk:7000/library_api/link/releases/styles/`, {
            method: 'POST',
            body: releaseStyleLink
        }).then(res => res.json())
        // if (releaseStyleResponse.status === 400) {
            console.log(releaseStyleResponse);
        // }
    }

    for (let format of formats){
        if (!process.env.IGNORE_FORMATS?.includes(format)){
            let releaseFormatLink = new FormData()
            releaseFormatLink.append('releaseSlug',releaseSlug)
            releaseFormatLink.append('formatSlug',format)
            // console.log(format)
            // console.log(releaseFormatLink)

            let releaseFormatResponse = await fetch(`http://api.thevinylvaultshow.co.uk:7000/library_api/link/releases/formats/`, {
                method: 'POST',
                body: releaseFormatLink
            }).then(res => res.json())
            // if (releaseFormatResponse.status === 400) {
                console.log(releaseFormatResponse);
            // }
        }
    }

}

async function calculateReleaseDecade(releaseYear:number){
    var is1950s = 'false'
    var is1960s = 'false'
    var is1970s = 'false'
    var is1980s = 'false'
    var is1990s = 'false'
    var is2000s = 'false'
    var is2010s = 'false'
    var is2020s = 'false'

    if (releaseYear >= 1950 && releaseYear < 1959){
        is1950s = 'true'
    }
    if (releaseYear >= 1960 && releaseYear < 1969){
        is1960s = 'true'
    }
    if (releaseYear >= 1970 && releaseYear < 1979){
        is1970s = 'true'
    }
    if (releaseYear >= 1980 && releaseYear < 1989){
        is1980s = 'true'
    }
    if (releaseYear >= 1990 && releaseYear < 1999){
        is1990s = 'true'
    }
    if (releaseYear >= 2000 && releaseYear < 2009){
        is2000s = 'true'
    }
    if (releaseYear >= 2010 && releaseYear < 2019){
        is2010s = 'true'
    }
    if (releaseYear >= 2020 && releaseYear < 2029){
        is2020s = 'true'
    }
    return [is1950s, is1960s, is1970s, is1980s, is1990s, is2000s, is2010s, is2020s]
}

async function sanitizeNamesTitles(nameTitle:string){
    // Split "The", "A", "An", "Sir", etc from the beginning of strings for sorting.
    if (nameTitle.startsWith(" ")){
        nameTitle = nameTitle.slice(1)
    }
    nameTitle = nameTitle.replace("\"", "")

    let words = nameTitle.split(" ")
    if(process.env.IGNORE_WORDS){
        if (!process.env.IGNORE_WORDS.includes(words[0])){
            return [nameTitle, nameTitle.charAt(0).toUpperCase()]
        } else {
            return [nameTitle.substring(nameTitle.indexOf(" ") + 1), nameTitle.substring(nameTitle.indexOf(" ") + 1).charAt(0).toUpperCase()]
        }
    }
}

async function calcualteDate(addedDate:string, releaseDate:string){
    const today = new Date
    let newAddition = 'false'
    let newRelease = 'false'

    let freshRelease = (today.getTime() - new Date(releaseDate).getTime()) / 1000
    let recentlyReleased = Math.ceil(freshRelease / (3600 * 24))


    let howNew = (new Date().getTime() - new Date(addedDate).getTime()) / 1000
    let recentlyAdded = Math.ceil(howNew / (3600 * 24))
    // console.log("Days In Library: " + diffDays)
    // console.log(typeof(diffDays))

    if (process.env.IS_NEW_ADDITION){
        if (recentlyAdded <= parseInt(process.env.IS_NEW_ADDITION)){
            newAddition = 'true'
        }
    }

    if (process.env.IS_NEW_RELEASE){
        if (recentlyReleased <= parseInt(process.env.IS_NEW_RELEASE)){
            newRelease = 'true'
        }
    }

    return [newAddition, newRelease]
}