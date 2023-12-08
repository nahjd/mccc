import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: []
}


 const favSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
           state.wishlist.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
         }
        

       

    },
})


export const { addToFavorite,removeFavorite} = favSlice.actions

export default favSlice.reducer