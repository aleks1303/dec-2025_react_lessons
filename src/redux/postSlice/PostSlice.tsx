import {IPosts} from "../../models/interfaces/IPost.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {postService} from "../../services/api.service.tsx";

type postSliceType = {
    posts: IPosts[]
}

const postInitialState: postSliceType = {posts: []}

const loadPosts = createAsyncThunk(
    "postSlice/loadPosts",
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAllPosts()
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const postSlice = createSlice({
    name: "postSlice",
    initialState: postInitialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPosts[]>) => {
            state.posts = action.payload
        })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            })

});
export const postSliceActions = {...postSlice.actions, loadPosts}