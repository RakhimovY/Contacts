import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContact } from "../domain/IContact";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  tagTypes: ["IContact"],
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
        url: "contacts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["IContact"],
    }),

    editContacts: builder.mutation<IContact, IContact>({
      query: (body) => ({
        url: `contacts/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["IContact"],
    }),

    deleteContacts: builder.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "IContact", id: "LIST" }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useEditContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
