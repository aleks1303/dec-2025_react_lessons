import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router.tsx";
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "./models/interfaces/IUser.ts";
import {IPosts} from "./models/interfaces/IPost.ts";

type userSliceType = {
    users: IUser[]
}
type postSliceType = {
    posts:IPosts[]
}
export const userInitialState: userSliceType = {users:[]}
export const postInitialState: postSliceType = {posts:[]}



export const userSlice = createSlice({
    name:"userSlice",
    initialState: userInitialState,
    reducers: {
        loadUsers: (state, action:PayloadAction<IUser[]>) => {
          state.users = action.payload
        }
    }
});
export const userSliceActions = {...userSlice.actions}

export const postSlice = createSlice({
    name: "postSlice",
    initialState: postInitialState,
    reducers: {
        loadPosts: (state,action:PayloadAction<IPosts[]>) => {
            state.posts = action.payload
        }
    }
});
export const postSliceActions = {...postSlice.actions}

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();


export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
});

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)


