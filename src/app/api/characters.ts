import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HTTP_METHOD, API_BASE_URL, RM_API_ENDPOINT } from "./constants";
import _ from "lodash";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL.R_M_BASE,
  }),
  endpoints: build => ({
    characters: build.query({
      query: (page = 1) => ({
        url: `${RM_API_ENDPOINT.CHARACTER}?page=${page}`,
        method: HTTP_METHOD.GET,
      }),
    }),
  }),
});

export const { useCharactersQuery } = characterApi;
