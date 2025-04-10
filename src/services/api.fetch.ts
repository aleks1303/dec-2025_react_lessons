import {IProducts} from "../models/IProducts.ts";

const endpointDummy = import.meta.env.VITE_API_URL

const getProducts = async (): Promise<IProducts[]> => {
    const {products} = await fetch(endpointDummy + '/products')
        .then(response => response.json())
    return products
}

export {
    getProducts
}