
const endpointTodos = import.meta.env.VITE_API_URL

const getTodos = async () => {
   return await fetch(endpointTodos + '/' + 'todos')
        .then((response) => response.json())
}

export {
    getTodos
}