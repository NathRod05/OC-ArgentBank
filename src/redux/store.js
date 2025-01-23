import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
  devTools: true,
});

export default store;
