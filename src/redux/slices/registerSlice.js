import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: "register",
    initialState: {
        isRegistered: false
    },
    reducers: {
        registerSuccess: (state) => {
            state.isRegistered = true
        }
    }
})
export const {registerSuccess} = registerSlice.actions
export default registerSlice.reducer