import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../user-slice/userSlice.tsx";
import {postSlice} from "../post-slice/postSlice.tsx";
import {commentSlice} from "../comment-slice/commentSlice.tsx";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer
    }
});

