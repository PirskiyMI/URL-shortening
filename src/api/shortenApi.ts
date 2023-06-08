import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const shortenApi = createApi({
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.shrtco.de/v2/',
   }),
   endpoints: (build) => ({
      fetchShortenLink: build.query({
         query: (url: string) => ({
            url: `/shorten`,
            params: { url: url },
         }),
      }),
   }),
});
