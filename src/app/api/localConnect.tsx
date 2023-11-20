import slugify from 'slugify'
import { discogsShelves } from './discogsConnect'

export const fetchShelves = async () => {
    const libraryShelfData = new Array
    const data = await fetch("http://192.168.0.10:7000/library_api/shelves").then(res => res.json())
    for (let libraryData of data) {
        if (libraryData.shelfLibrary == true && !libraryData.shelfIgnore == true && !libraryData.shelfWantlist == true) {
                libraryShelfData.push(libraryData)  
        }
    }
    return libraryShelfData    
}

export const fetchGenres = async () => {
    const libraryGenreData = new Array
    const data = await fetch("http://192.168.0.10:7000/library_api/genres").then(res => res.json())
    for (let libraryData of data) {
        if (libraryData.genreLibrary == true && !libraryData.genreWantlist == true) {
                libraryGenreData.push(libraryData)  
        }
    }
    return libraryGenreData
}

export const genreSlugs = async () => {
    const libraryGenreSlugData = new Array
    const data = await fetch("http://192.168.0.10:7000/library_api/genres",{ cache: 'no-store' }).then(res => res.json())
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
    const data = await fetch("http://192.168.0.10:7000/library_api/styles").then(res => res.json())
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
    const data = await fetch("http://192.168.0.10:7000/library_api/styles",{ cache: 'no-store' }).then(res => res.json())
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
    const data = await fetch("http://192.168.0.10:7000/library_api/formats",{ cache: 'no-store' }).then(res => res.json())
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
    const data = await fetch("http://192.168.0.10:7000/library_api/formats",{ cache: 'no-store' }).then(res => res.json())
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
                    fetch(`http://192.168.0.10:7000/library_api/addshelf/`, {
                        method: 'POST',
                        body: shelfToAdd
                    })
                console.log(shelfToAdd)
            }
        }
    }
}

export const recentReleases = async () => {
    const libraryReleaseData = new Array
    const data = await fetch("http://192.168.0.10:7000/library_api/recentreleases",{ cache: 'no-store' }).then(res => res.json())
    for (let releaseData of data) {
        if (releaseData.releaseLibrary == true && releaseData.releaseUnavailable == false && !releaseData.releaseOrdered == true && releaseData.releaseIsNewAddition == true) {
            libraryReleaseData.push(releaseData)
        }
    }
    console.log (libraryReleaseData)
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
            fetch(`http://192.168.0.10:7000/library_api/addgenre/`, {
                method: 'POST',
                body: genreData
            }).then(res => res.json())
        // console.log(genreData)
    } else {
        console.log("Exists")
    }
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

    let formatSlug = await generateSlugs(format)
    
    existingFormatSlugs = await formatSlugs()
    // console.log(existingFormatSlugs)
    
    if (!existingFormatSlugs.includes(formatSlug) && !process.env.IGNORE_FORMATS?.includes(formatSlug)) {
        let formatData = new FormData()
            formatData.append('format',format)
            formatData.append('formatLibrary',library)
            formatData.append('formatWantlist',wantlist)
            formatData.append('formatSlug',formatSlug)
            fetch(`http://192.168.0.10:7000/library_api/addformat/`, {
                method: 'POST',
                body: formatData
            }).then(res => res.json())
        console.log(formatData)
    } else {
        console.log("Exists")
    }
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
    console.log(existingGenreSlugs)
    existingStyleSlugs = await styleSlugs()
    console.log(existingStyleSlugs)
    
    if (!existingStyleSlugs.includes(styleSlug)) {
        let styleData = new FormData()
            styleData.append('style',style)
            styleData.append('styleLibrary',library)
            styleData.append('styleWantlist',wantlist)
            styleData.append('styleSlug',styleSlug)
            fetch(`http://192.168.0.10:7000/library_api/addstyle/`, {
                method: 'POST',
                body: styleData
            }).then(res => res.json())
        // console.log(styleData)
    } else {
        console.log("Exists")
    }
}