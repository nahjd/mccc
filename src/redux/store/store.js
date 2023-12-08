import { configureStore } from '@reduxjs/toolkit'
import favReducer from './../slices/favSlice'
import loginReducer from "./../slices/loginSlice";
import registerReducer from "./../slices/registerSlice";
import cartReducer from './../slices/cartSlice';
import mealsReducer from '../slices/mealsSlice';
import userReducer from '../slices/userSlice'
 const store = configureStore({
  reducer: {
    wishlist: favReducer,
    login: loginReducer,
    register: registerReducer,
    cart: cartReducer,
    meals: mealsReducer,
    users:userReducer

    
  },
})

export default store