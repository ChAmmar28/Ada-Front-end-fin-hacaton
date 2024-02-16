import API from '../../functions/AxiosRequester'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IVacancyData } from '../../types/IVacancyData'

interface initState {
   obj: IVacancyData
   isLoading: boolean
   error: any
}

const initialState: initState = {
   obj: <IVacancyData>{},
   isLoading: false,
   error: {},
}

export const getMoreInfo = createAsyncThunk<any, any>(
   'MoreInfo',
   async (vacId, thunkAPI) => {
      try {
         const response = await API.get(`vacancies/vacancy/${vacId}/`)
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
         state.obj = action.payload
      })
   },
})

export type MoreInfoState = ReturnType<typeof MoreInfoSlice.reducer>
export default MoreInfoSlice.reducer
