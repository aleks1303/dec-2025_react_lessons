import {IComments} from "../models/IComments.ts";

const endpointComments = import.meta.env.VITE_API_URL

const getComments = async (): Promise<IComments[]> => {
  return await  fetch(endpointComments)
        .then((response) => response.json())
}

export {
    getComments
}