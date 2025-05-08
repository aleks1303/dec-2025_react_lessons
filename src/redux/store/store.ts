import {configureStore} from "@reduxjs/toolkit";

import {userSlice} from "../userSlice/userSlice.tsx";
import {postSlice} from "../postSlice/PostSlice.tsx";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
});