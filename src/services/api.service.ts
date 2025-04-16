import {urlDummy, urlJs} from "../urls/url.ts";
import {IUserJs} from "../models/users-js/IUserJs.ts";
import {IUsersDummy} from "../models/users-dummy/IUsersDummy.ts";
import {IPostDummy} from "../models/posts-dummy/IPostDummy.ts";
import {IPostsJson} from "../models/posts-json/IPostsJson.ts";
import {ICommentsDummy} from "../models/comments-dummy/ICommentsDummy.ts";
import {ICommentJson} from "../models/comments-json.ts";


const serviceJSPh = {
    getAllUsersJs: async (): Promise<IUserJs[]> => {
      return await  fetch(urlJs.allUsersJs)
            .then((response) => response.json());
    },
    getAllPostJson: async (): Promise<IPostsJson[]> => {
      return await  fetch(urlJs.allPostsJs)
            .then((response) => response.json());
    },
    getAllCommentJson: async (): Promise<ICommentJson[]> => {
        return await fetch(urlJs.allCommentsJs)
            .then((response) => response.json());
    }
}



const serviceDummy = {
    getAllUsersDummy: async (): Promise<IUsersDummy[]> => {
      const {users} = await  fetch(urlDummy.allUsersDummy)
            .then((response) => response.json())
        return users
    },
    getAllPostsDummy: async ():Promise<IPostDummy[]> => {
        const {posts} = await fetch(urlDummy.allPostsDummy)
            .then((response) => response.json())
        return posts
    },
    getAllCommentsDummy: async (): Promise<ICommentsDummy[]> => {
        const {comments} = await fetch(urlDummy.allCommentsDummy)
            .then((response) => response.json())
        return comments
    }
}


export {
    serviceJSPh,
    serviceDummy
}