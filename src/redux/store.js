import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({});

export const persistor = persistStore(store);
