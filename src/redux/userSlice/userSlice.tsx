import {IUser} from "../../models/interfaces/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAllUsers} from "../../services/api.service.tsx";

type userSliceType = {
    users: IUser[]
}

const userInitialState: userSliceType = {users: []};


const loadUsers = createAsyncThunk(
    "userSlice/loadUser",
    async (_, thunkApi) => {
        try {
          const users = await getAllUsers()
            return thunkApi.fulfillWithValue(users)
         // throw  new Error('Error new')
        } catch (e) {
            console.log(e)
            return thunkApi.rejectWithValue('hello world')
        }
    }
)


export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            })

});
export const userSliceActions = {...userSlice.actions, loadUsers}