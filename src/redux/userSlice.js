import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    // token: null,
    isAuthenticted: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticted = true;
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticted = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

export const userInfo = (state) => state.user.user;
