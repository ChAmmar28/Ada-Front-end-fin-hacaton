import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from './AxiosRequester'

interface initState {
   newsList: any[]
   newsDetails: any[]
   isLoading: boolean
   error: any
}

const initialState: initState = {
   newsList: [],
   newsDetails: [],
   isLoading: false,
   error: {},
}

export const getNewsList = createAsyncThunk<any[], void>(
   'NewsList',
   async () => {
      const response = await API.get(`news/news/`)
      console.log(response.data.results)
      return response.data.results
   }
)

export const getNewsDetails = createAsyncThunk<any, string>(
   'NewsDetails',
   async (id, thunkAPI) => {
      try {
         const response = await API.get(`news/news_detail/${id}/`)
         console.log(response.data.news)
         return response.data.news
      } catch (error) {
         return thunkAPI.rejectWithValue(error)
      }
   }
)

const newsListSlice = createSlice({
   name: 'newsList',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getNewsList.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getNewsList.fulfilled, (state, action) => {
         state.isLoading = false
         state.newsList = action.payload
      })
      builder.addCase(getNewsDetails.fulfilled, (state, action) => {
         state.isLoading = false
         state.newsDetails = action.payload
      })
      builder.addCase(getNewsList.rejected, (state, action) => {
         state.error = action.error
         state.isLoading = false
      })
   },
})

export type NewsListState = ReturnType<typeof newsListSlice.reducer>
export default newsListSlice.reducer
