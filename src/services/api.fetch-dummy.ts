import {ITodos} from "../models/ITodos.ts";
import {IPosts} from "../models/IPosts.ts";

const endpointDummy = import.meta.env.VITE_API_URL



const getDummyTodos = async (): Promise<ITodos[]> => {
   const {todos} = await fetch(endpointDummy + '/todos')
        .then((response) => response.json())
    return todos
}

const getDummyPosts = async (): Promise<IPosts[]> => {
   const {posts} = await fetch(endpointDummy + '/posts')
        .then(response => response.json())
       return posts
}







export {
    getDummyTodos,
    getDummyPosts
}