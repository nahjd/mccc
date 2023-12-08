import { createSlice } from "@reduxjs/toolkit";



 const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        carts:[],
        meals:[]
    },
    reducers: {
        addToCart: (state, action) => {
            state.carts.push(action.payload);
        },
        removeCart: (state, action) => {
            state.carts.slice(action.payload,1)
         },
         
        buyMeal: (state, action) => {
            state.meals.push(action.payload)
            
        }

       

    },
})


export const { addToCart,removvefromcart, buyMeal} = cartSlice.actions

export default cartSlice.reducer