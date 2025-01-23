import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { token: null },
  reducers: {
    loginReducer: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export default loginSlice.reducer;
export const { loginReducer } = loginSlice.actions;
