import {IPosts} from "../models/IPosts.ts";

const getPosts = async (): Promise<IPosts[]> => {
   return await fetch(import.meta.env.VITE_API_URL)
        .then((response) => response.json())
}

export {
    getPosts
}