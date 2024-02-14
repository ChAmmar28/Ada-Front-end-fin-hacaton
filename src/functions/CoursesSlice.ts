import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from './AxiosRequester'

interface initState {
   coursesList: any[]
   newsDetails: any[]
   isLoading: boolean
   error: any
}

const initialState: initState = {
   coursesList: [],
   newsDetails: [],
   isLoading: false,
   error: {},
}

export const getCoursesList = createAsyncThunk<any[], void>(
   'CoursesList',
   async () => {
      const response = await API.get(`news/news/`)
      console.log(response.data.results)
      return response.data.results
   }
)

// export const getNewsDetails = createAsyncThunk<any[], void>(
//    'NewsDetails',
//    async (id) => {
//       const response = await API.get(`news/news_details/${id}/`)
//       console.log(response.data.results)
//       return response.data.results
//    }
// )

const coursesListSlice = createSlice({
   name: 'coursesList',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getCoursesList.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getCoursesList.fulfilled, (state, action) => {
         state.isLoading = false
         state.coursesList = action.payload
      })
      // builder.addCase(getNewsDetails.fulfilled, (state, action) => {
      //    state.isLoading = false
      //    state.newsDetails = action.payload
      // })
      builder.addCase(getCoursesList.rejected, (state, action) => {
         state.error = action.error
         state.isLoading = false
      })
   },
})

export type CoursesListState = ReturnType<typeof coursesListSlice.reducer>
export default coursesListSlice.reducer
