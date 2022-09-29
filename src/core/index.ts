import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./API";
import userReducer from "../Redux/Slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMidlewere) =>
    getDefaultMidlewere().concat(contactsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
