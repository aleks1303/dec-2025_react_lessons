import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userSliceType} from "../models/types-slices/userType.ts";
import {postSliceType} from "../models/types-slices/postType.ts";
import {IPost} from "../models/IPost.ts";
import {IUser} from "../models/IUser.ts";
import {useSelector} from "react-redux";

const initialStateUser: userSliceType = {users:[]}
const initialStatePost: postSliceType = {posts:[]}
export const userSlice = createSlice({
    name:"userSlice",
    initialState: initialStateUser,
    reducers: {
        loadUsers: (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
        }
    }
});
export const userSliceActions = {...userSlice.actions}

export const postSlice = createSlice({
    name:"postSlice",
    initialState: initialStatePost,
    reducers: {
        loadPost: (state, action:PayloadAction<IPost[]>) => {
            state.posts = action.payload
        }
    }
});
export const postSliceActions = {...postSlice.actions}

export const store = configureStore({
    reducer: {
        userSlice:userSlice.reducer,
        postSlice:postSlice.reducer
    }
});



export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();