import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost.ts";
import {getAll} from "../../services/api.service.tsx";

type postSliceType = {
    posts: IPost[],
    loading: boolean,
    error: string | null
}
const postInitSlice:postSliceType = {
    posts:[],
    loading: false,
    error: null
}

const loadPosts = createAsyncThunk(
    "postSlice/loadPosts",
   async (_, thunkAPI) => {
        try {
            const posts = await getAll<IPost[]>('/posts')
            return thunkAPI.fulfillWithValue(posts)
        }catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const postSlice = createSlice({
    name: "postSlice",
    initialState: postInitSlice,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(loadPosts.fulfilled, (state,action:PayloadAction<IPost[]>) => {
            state.loading = false
            state.posts = action.payload
        })
        .addCase(loadPosts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "Unknown error"
        })
});

export const postSliceActions = {
    ...postSlice, loadPosts
}