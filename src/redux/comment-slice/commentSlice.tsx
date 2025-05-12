import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../models/IComments.ts";
import {commentsService} from "../../services/api.service.tsx";

type CommentSliceType = {
    comments: IComment[]
}
const commentInitialState: CommentSliceType = {
    comments: []
}

 const loadComment = createAsyncThunk(
     "commentSlice/loadComment",
    async (_, thunkAPI) => {
         try{
         const comments = await commentsService.getAllComments()
                return thunkAPI.fulfillWithValue(comments)
         }catch (e) {
             return thunkAPI.rejectWithValue(e)
         }
     }
 );

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: commentInitialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComment.fulfilled, (state, action:PayloadAction<IComment[]>) => {
            state.comments = action.payload
        })

})
export const commentsSliceActions = {
    ...commentSlice, loadComment
}