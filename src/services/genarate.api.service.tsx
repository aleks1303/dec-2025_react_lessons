
const baseUrl = import.meta.env.VITE_API_URL

const getAll =  async <T,> (endpoint: string): Promise<T> => {
    return  await fetch(baseUrl + endpoint)
        .then((response) => response.json())
}

export {
    getAll
}