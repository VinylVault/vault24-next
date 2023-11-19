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
    console.log(libraryShelfData)
    return libraryShelfData    
}
