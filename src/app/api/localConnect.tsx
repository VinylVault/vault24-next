import slugify from 'slugify'
import { discogsShelves } from './discogsConnect'

export const fetchShelves = async () => {
    const libraryShelfData = new Array
    const data = await fetch("http://192.168.0.10:7000/library_api/shelves").then(res => res.json())
    for (let libraryData of data) {
        if (libraryData.shelfLibrary == true) {
            if (libraryData.shelfIgnore == false) {
                libraryShelfData.push(libraryData)  
            }
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
        if (!existingShelves.includes(shelf.id.toString())) {
            if (!process.env.PRIVATE_FOLDERS) {
                continue
            } else {
                if (!process.env.PRIVATE_FOLDERS.split(", ").includes(shelf.id.toString())) {
                    let shelfSlug = await generateSlugs(shelf.name)
                    console.log("Missing Shelf: " +shelfSlug + " " + shelf.name)
                    let shelfToAdd = new FormData()
                        shelfToAdd.append('shelfId',shelf.id)
                        shelfToAdd.append('shelfName',shelf.name)
                        shelfToAdd.append('shelfSlug',shelfSlug)
                        fetch(`http://192.168.0.10:7000/library_api/addshelf/`, {
                            method: 'POST',
                            body: shelfToAdd
                        })
                }
            }
        }
    }
}
