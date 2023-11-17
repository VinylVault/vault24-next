import axios from "axios"
import { useEffect, useState } from "react"
// const Discogs = require('js_ts_discogs_api_v2_library').default

interface localShelf {
    shelfId: string
    shelfName: string
    shelfCount: number
    shelfLibrary: boolean
    shelfWantlist: boolean
    shelfIgnore: boolean
    shelfSlug: string
    shelfReleases: string[]
}

const localShelfData: localShelf[] = []



function GetLocalShelfData() {
    const [posts, setPosts]: [localShelf[], (posts: localShelf[]) => void] = useState(localShelfData);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");
    
    useEffect(() => {
        axios
            .get<localShelf[]>("http://192.168.0.10:7000/library_api/shelves", {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((response) => {
                setPosts(response.data)
                setLoading(false)
            })
            .catch(ex => {
                const error = axios.isAxiosError(ex) ? ex : new Error(ex);
                setError(error.message);
            })
    }, [])
}

const getShelfLocalData = GetLocalShelfData()
console.log(getShelfLocalData)

export { getShelfLocalData }