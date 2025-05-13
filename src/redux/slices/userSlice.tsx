import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/api.service.tsx";

type userSliceType = {
    users: IUser[],
    loading: boolean,
    error: string | null
}
const userInitSlice:userSliceType = {
    users:[],
    loading: false,
    error: null
}

 const loadUsers = createAsyncThunk(
     "userSlice/loadUsers",
    async (_, thunkAPI) => {
       try {
           const users = await getAll<IUser[]>('/users')
           return thunkAPI.fulfillWithValue(users)
       }catch (e) {
           return thunkAPI.rejectWithValue(e)
       }

    }
 );

export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitSlice,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadUsers.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
            state.loading = false
            state.users = action.payload
        })
        .addCase(loadUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Unknown error'
        })
});

export const userSliceActions = {
    ...userSlice, loadUsers
}