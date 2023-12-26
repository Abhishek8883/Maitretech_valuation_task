import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        isAuthenticated: false,
        error: null,
     
    },
    reducers: {
        setCredentials: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            if(action.payload.accessToken){
                state.token = action.payload.accessToken
            }
            if(action.payload.isAuthenticated){
                state.isAuthenticated = action.payload.isAuthenticated
            }
        },

        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


       
    }

})

export const { setCredentials,setError} = userSlice.actions;

export default userSlice.reducer;

