import { createSlice } from "@reduxjs/toolkit";

const userSlice  = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            return action.payload;
            
        },
        logoutUser: (state) => {
           return null;
        },
    },
})


export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;