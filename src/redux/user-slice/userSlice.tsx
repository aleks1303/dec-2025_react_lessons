import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser.ts";

type userSliceType = {
    users: IUser[],
    user:IUser | null,
    loadState: boolean
}
const userInitialState: userSliceType = {
    users: [],
    user: null,
    loadState:false
}

const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
   async (_, thunkAPI) => {
      const users = await  fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
       return thunkAPI.fulfillWithValue(users)
    }
);

export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
        })
})

export const userSliceAction = {
    ...userSlice.actions, loadUsers
}