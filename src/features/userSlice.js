import { createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./counterAPI";

// const initialState = {
//   value: 0,
//   status: "idle",
// };

export const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//selectors

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
