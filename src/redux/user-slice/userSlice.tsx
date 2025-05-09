import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/userService.tsx";

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
     try {
        const users = await userService.getAllUsers()
         return thunkAPI.fulfillWithValue(users)
     } catch (e) {
         return thunkAPI.rejectWithValue(e)
     }
    }
);
const loadUser = createAsyncThunk(
    "userSlice/loadUser",
    async (id: string, thunkAPI) => {
       try {
           const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
               .then((response) => response.json())
           return thunkAPI.fulfillWithValue(user)
       } catch (e) {
           return thunkAPI.rejectWithValue(e)
       }
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
        .addCase(loadUsers.rejected, (state, action) => {
            console.log(state)
            console.log(action)
        })
        .addCase(loadUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        .addCase(loadUser.rejected, (state, action) => {
            console.log(state)
            console.log(action)
        })
})

export const userSliceAction = {
    ...userSlice.actions, loadUsers, loadUser
}