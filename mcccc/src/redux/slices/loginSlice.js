import { createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
  name: "login",
  initialState: {
    currentUser: null,
    isLogin: false,
    wishlist: [],
    cart: [],
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isLogin = false;
    },
    addToFavorite: (state, action) => {
      console.log("oldu");
      state.wishlist.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    addToCart: (state, action) => {
      if (state.cart.find((item) => item.id === action.payload.id)) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    clearFav: (state) => {
      state.wishlist = [];
    },
    updateUserBalance: (state, action) => {
      state.currentUser.balance = action.payload;
    },
    increaseCount: (state, action) => {
      if (state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.find((item) => item.id === action.payload.id).count += 1;
      }
    },
    decreaseCount: (state, action) => {
      if (
        state.cart.find((item) => item.id === action.payload.id) &&
        state.cart.find((item) => item.id === action.payload.id).count > 1
      ) {
        state.cart.find((item) => item.id === action.payload.id).count -= 1;
      }
    },
  },
});

export const {
  loginSuccess,
  logout,
  addToFavorite,
  removeFavorite,
  addToCart,
  removeFromCart,
  clearCart,
  clearFav,
  increaseCount,
  decreaseCount,
  updateUserBalance
} = loginSlice.actions;
export default loginSlice.reducer;
