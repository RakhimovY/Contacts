import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";
import usersReducer from './userSlice'

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMidlewere) =>
    getDefaultMidlewere().concat(contactsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
