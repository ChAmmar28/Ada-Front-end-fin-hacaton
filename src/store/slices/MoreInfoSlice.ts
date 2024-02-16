import API from '../../functions/AxiosRequester'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
<<<<<<< HEAD

interface initState {
   list: any[]
=======
import { IVacancyData } from '../../types/IVacancyData'

interface initState {
   obj: IVacancyData
>>>>>>> fdb99ddfd25bbc7cbff682558f5705e5df631020
   isLoading: boolean
   error: any
}

const initialState: initState = {
<<<<<<< HEAD
   list: [],
=======
   obj: <IVacancyData>{},
>>>>>>> fdb99ddfd25bbc7cbff682558f5705e5df631020
   isLoading: false,
   error: {},
}

<<<<<<< HEAD
export const getMoreInfo = createAsyncThunk<any, void>(
   'getMoreInfo',
   async (vacId, thunkAPI) => {
      //  try {
      //     const response = await API.get(news/news_detail/${id}/)
      //     console.log(response.data.news)
      //     return response.data.news
      //  } catch (error) {
      //     return thunkAPI.rejectWithValue(error)
      //  }
      try {
         const response = await API.get(`vacancies/vacancy/${vacId}/`)
         console.log('response: ', response.data)
=======
export const getMoreInfo = createAsyncThunk<any, any>(
   'MoreInfo',
   async (vacId, thunkAPI) => {
      try {
         const response = await API.get(`vacancies/vacancy/${vacId}/`)
>>>>>>> fdb99ddfd25bbc7cbff682558f5705e5df631020
         return response.data
      } catch (error) {
         return thunkAPI.rejectWithValue(error)
      }
   }
)

const MoreInfoSlice = createSlice({
   name: 'MoreInfoSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getMoreInfo.fulfilled, (state, action) => {
         state.isLoading = false
<<<<<<< HEAD
         state.list = action.payload
=======
         state.obj = action.payload
>>>>>>> fdb99ddfd25bbc7cbff682558f5705e5df631020
      })
   },
})

export type MoreInfoState = ReturnType<typeof MoreInfoSlice.reducer>
export default MoreInfoSlice.reducer
