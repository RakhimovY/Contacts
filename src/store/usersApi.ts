import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { IUser } from "../domain/IUser";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
    tagTypes: ["IUser"],
    endpoints: (builder) => ({
        get: builder.query<IUser[], {email: string, password: string}>({
            query: ({email, password}) => `/user?email=${email}&password=${password}`,
            providesTags: [{ type: "IUser", id: "LIST" }],
          }),
      
        edit: builder.mutation<IUser[], IUser>({
            query: (body) => ({
              url: `/user/${body.id}`,
              method: "PUT",
              body,
            }),
            invalidatesTags: ["IUser"],
          }),
    })});