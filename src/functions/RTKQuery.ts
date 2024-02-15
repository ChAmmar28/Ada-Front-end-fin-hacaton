// api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface NewsItem {
   id: number
   title: string
   content: string
}

export const api = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://it-intern-hub.freemyip.com/',
      mode: 'no-cors',
   }),
   endpoints: (builder) => ({
      getNews: builder.query<NewsItem[], void>({
         query: () => 'news/news/',
      }),
   }),
})

export const { useGetNewsQuery } = api
