import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
// Define your API endpoints
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (newUser) => ({
        url: "/adminLogin",
        method: "POST",
        body: {
          name: newUser.name,
          password: newUser.password,
        },
      }),
    }),
  }),
  overrideFetch: async ({ baseUrl, url, method, body }) => {
    try {
      const result = await axios.request({
        url: baseUrl + url,
        method,
        data: body,
      });
      return { data: result.data };
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
});

export const { useSigninMutation } = api;

export default api;
