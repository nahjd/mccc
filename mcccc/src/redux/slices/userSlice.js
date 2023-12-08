import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    editId: "",
    uname: '',
    upassword: '',
  },
  reducers: {
    setUsersData: (state, action) => {
      state.data = action.payload;
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
    setUname: (state, action) => {
      state.uname = action.payload;
    },
    setUpassword: (state, action) => {
      state.upassword = action.payload;
    },
  },
});

export const { setUsersData, setEditId, setUname, setUpassword } = usersSlice.actions;
export default usersSlice.reducer;
