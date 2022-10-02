import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContact } from "../domain/IContact";
import { IUser } from "../domain/IUser";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  tagTypes: ["IContact", "IUser"],
  endpoints: (builder) => ({
    getContacts: builder.query<IContact[], number>({
      query: (limit = 60) => `contacts?${limit && `limit=${limit}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "IContact" as const, id })),
              { type: "IContact", id: "LIST" },
            ]
          : [{ type: "IContact", id: "LIST" }],
    }),

    addContacts: builder.mutation({
      query: (body) => ({
        url: "/contacts",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "IContact", id: "LIST" }],
    }),

    editContacts: builder.mutation<IContact, IContact>({
      query: (body) => ({
        url: `/contacts/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["IContact"],
    }),

    deleteContacts: builder.mutation({
      query: (id?) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "IContact", id: "LIST" }],
    }),

    getUser: builder.query<IUser[], number>({
      query: (limit = 1) => `user?${limit && `limit=${limit}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "IUser" as const, id })),
              { type: "IUser", id: "LIST" },
            ]
          : [{ type: "IUser", id: "LIST" }],
    }),

    editUser: builder.mutation<IUser[], IUser>({
      query: (body) => ({
        url: `/user/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["IUser"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useEditUserMutation,
  useGetContactsQuery,
  useAddContactsMutation,
  useEditContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
