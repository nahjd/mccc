import { createSlice } from '@reduxjs/toolkit';

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    data: [],
    editId: "",
    mealName: '',
    mealPrice: 0,
  },
  reducers: {
    setMealsData: (state, action) => {
      state.data = action.payload;
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
    setMealName: (state, action) => {
      state.mealName = action.payload;
    },
    setMealPrice: (state, action) => {
      state.mealPrice = action.payload;
    },
  },
});

export const { setMealsData, setEditId, setMealName, setMealPrice } = mealsSlice.actions;
export default mealsSlice.reducer;
