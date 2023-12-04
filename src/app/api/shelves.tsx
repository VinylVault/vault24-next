import { discogsShelves } from "./discogsConnect"
import { generateSlugs } from "./utilities"

export const fetchShelves = async () => {
    const response = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/shelves/", { 
        cache: 'no-cache',
    });
    const data = await response.json();
    
    const libraryShelfData = data.filter((libraryData: { shelfLibrary: any; shelfIgnore: any; shelfWantlist: any; }) =>
        libraryData.shelfLibrary && !libraryData.shelfIgnore && !libraryData.shelfWantlist
    );
    
    return libraryShelfData;
}

export const fetchShelf = async (folderId:string) => {
    const libraryShelfDetailsSlug = new Array
    const data = await fetch("http://api.thevinylvaultshow.co.uk:7000/library_api/shelves/",{ cache: 'default', headers: {  'Cache-Control': 'max-age=60'  } }).then(res => res.json())
    for (let libraryData of data) {
        if (libraryData.shelfId == folderId) {
            libraryShelfDetailsSlug.push(libraryData.shelfSlug)  
        }
    }
    return libraryShelfDetailsSlug    
}

export const writeShelves = async () => {
    const existingShelves = (await fetchShelves()).map((shelf: { shelfId: { toString: () => any; }; }) => shelf.shelfId.toString());
    const privateFolders = process.env.PRIVATE_FOLDERS ? process.env.PRIVATE_FOLDERS.split(", ") : [];

    for (let shelf of await discogsShelves()) {
        if (existingShelves.includes(shelf.id.toString())) {
            continue;
        }

        if (privateFolders.includes(shelf.id.toString())) {
            let shelfIgnore = 'true';
        } else {
            const shelfSlug = await generateSlugs(`${shelf.name} ${shelf.id}`);
            const shelfToAdd = new FormData();
            shelfToAdd.append('shelfId', shelf.id);
            shelfToAdd.append('shelfName', shelf.name);
            shelfToAdd.append('shelfSlug', shelfSlug);
            shelfToAdd.append('shelfLibrary', 'true');
            shelfToAdd.append('shelfWantlist', 'false');
            shelfToAdd.append('shelfIgnore', 'false');

            const response = await fetch('http://api.thevinylvaultshow.co.uk:7000/library_api/addshelf/', {
                method: 'POST',
                body: shelfToAdd
            }).then(res => res.json());
            console.log(response);
        }
    }
}
