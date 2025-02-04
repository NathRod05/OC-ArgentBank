import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, PERSIST } from "redux-persist";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import loginReducer from "./loginSlice";
import userReducer from "./userSlice";

const userPersistConfig = {
  key: "user",
  storage,
};
const loginPersistConfig = {
  key: "login",
  storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedLoginReducer = persistReducer(loginPersistConfig, loginReducer);

export const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(thunk),
  devTools: true,
});

export const persistedStore = persistStore(store);
