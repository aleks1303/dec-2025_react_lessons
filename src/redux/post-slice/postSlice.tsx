import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost.ts";
import {postsService} from "../../services/api.service.tsx";

type postSliceType = {
   posts: IPost[],
}

const postInitialState: postSliceType = {
    posts: []
}

const loadPosts = createAsyncThunk(
    "postsSlice/loadPosts",
  async (_, thunkAPI) => {
   const posts = await postsService.getAllPosts()
        return thunkAPI.fulfillWithValue(posts)
  }
);


export const postSlice = createSlice({
    name: "postSlice",
    initialState: postInitialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        })
})

export const postsSliceActions = {
    ...postSlice.actions, loadPosts
}