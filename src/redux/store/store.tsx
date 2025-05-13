import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/userSlice.tsx";
import {postSlice} from "../slices/postSlice.tsx";
import {commentSlice} from "../slices/commentSlise.tsx";

export const store = configureStore({
    reducer: {
        userSlice:userSlice.reducer,
        postSlice:postSlice.reducer,
        commentSlice:commentSlice.reducer
    }
});

