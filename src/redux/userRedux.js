import { createSlice } from "@reduxjs/toolkit";

const userRedux = createSlice({
    name: "user",
    initialState: {
       currentUser: null,
        isFetching: false,
        isSuccess: false,
        error: false
    },
    reducers: {
        loginStart:(state)=>{
            state.isFetching = true
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.isSuccess = true;
            state.currentUser = action.payload
        },
        loginFailure:(state,action)=>{
            state.isFetching = false;
            state.error = true
        },
    },
});

export const { loginStart, loginSuccess, loginFailure } = userRedux.actions;
export default userRedux.reducer;