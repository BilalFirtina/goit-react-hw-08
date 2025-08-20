import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import contactReducer from "./contacts/slice";

export const store = configureStore({
  reducer: contactReducer,
});
