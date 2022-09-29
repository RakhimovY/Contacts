import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./API";
import userSlice from "../Redux/Slice/userSlice";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMidlewere) =>
    getDefaultMidlewere().concat(contactsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
