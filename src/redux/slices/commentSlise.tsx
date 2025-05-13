import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../models/IComment.ts";
import {getAll} from "../../services/api.service.tsx";

type commentSliceType = {
    comments: IComment[],
    landing: boolean,
    error: string | null
}
const commentInitSlice:commentSliceType = {
    comments:[],
    landing: false,
    error: null
}

const loadComments = createAsyncThunk(
    "commentSlice/loadComments",
    async (_, thunkAPI) => {
        try {
            const comments = await getAll<IComment[]>('/comments')
            return thunkAPI.fulfillWithValue(comments)
        }catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: commentInitSlice,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComments.pending, (state) => {
            state.landing = true
            state.error = null
        })
        .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>) => {
            state.landing = false
            state.comments = action.payload
        })
        .addCase(loadComments.rejected, (state, action) => {
            state.landing = false
            state.error = action.error.message || "Unknown error"
        })

});

export const commentSliceActions = {
    ...commentSlice, loadComments
}