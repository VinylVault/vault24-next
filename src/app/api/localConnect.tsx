import slugify from 'slugify'
import { discogsShelves } from './discogsConnect'

export const fetchShelves = async () => {
    const libraryShelfData = new Array
    const data = await fetch("http://192.168.0.10:7000/library_api/shelves").then(res => res.json())
    for (let libraryData of data) {
        if (libraryData.shelfLibrary == true && libraryData.shelfIgnore == false) {
                libraryShelfData.push(libraryData)  
        }
    }
    return libraryShelfData    
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
            }
        }
    }
}

export const recentReleases = async () => {
    const libraryReleaseData = new Array
    const data = await fetch("http://192.168.0.10:7000/library_api/releases").then(res => res.json())
    for (let releaseData of data) {
        if (releaseData.releaseLibrary == true && releaseData.releaseUnavailable == false && !releaseData.releaseOrdered == true && releaseData.releaseIsNewAddition == true) {
            libraryReleaseData.push(releaseData)
        }
    }
    console.log (libraryReleaseData)
    return libraryReleaseData
}