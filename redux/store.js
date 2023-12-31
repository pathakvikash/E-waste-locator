// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { demoReducer } from "./actions/demoSlice";
import { userReducer } from "./actions/userSlice";

export const store = configureStore({
  reducer: { demo: demoReducer, user: userReducer },
});