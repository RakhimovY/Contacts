import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";
import { usersApi } from "./usersApi";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMidlewere) =>
    getDefaultMidlewere().concat(contactsApi.middleware, usersApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
