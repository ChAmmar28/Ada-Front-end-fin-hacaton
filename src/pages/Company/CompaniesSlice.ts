import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import API from '../../functions/AxiosRequester'

interface initCompanies {
   description: string
   id: number
   image: string
   name: string
   owner: string
}

interface initState {
   companiesList: initCompanies[]
   isLoading: boolean
   error: any
}

const initialState: initState = {
   companiesList: [],
   isLoading: false,
   error: {},
}

export const getCompaniesList = createAsyncThunk('CompaniesList', async () => {
   try {
      const response = await API.get(`companies/companies/`)
      return response.data.results
   } catch (error) {
      throw error
   }
})

interface CreateCompanyPayload {
   name: string
   description: string
   image: unknown
}

export const createCompany = createAsyncThunk(
   'createCompany',
   async (payload: CreateCompanyPayload, { rejectWithValue }) => {
      try {
         const { name, description, image } = payload
         const authToken = localStorage.getItem('AuthToken')
         const url = 'companies/create/'

         const headers = {
            Authorization: `Token ${authToken}`,
            'Content-Type': 'application/json',
         }

         const postData = {
            name: name,
            description: description,
            image: image,
         }

         const response = await API.post(url, postData, { headers })
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getNewsDetails = createAsyncThunk<any, string>(
   'NewsDetails',
   async (id, thunkAPI) => {
      try {
         const response = await API.get(`companies/company/${id}/`)
         console.log(response.data.news)
         return response.data.news
      } catch (error) {
         return thunkAPI.rejectWithValue(error)
      }
   }
)

const CompaniesListSlice = createSlice({
   name: 'companiesList',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getCompaniesList.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getCompaniesList.fulfilled, (state, action) => {
         state.isLoading = false
         state.companiesList = action.payload
      })
      builder.addCase(getNewsDetails.fulfilled, (state, action) => {
         state.isLoading = false
         state.newsDetails = action.payload
      })
      builder.addCase(getCompaniesList.rejected, (state, action) => {
         state.error = action.error.message
         state.isLoading = false
      })
      builder.addCase(createCompany.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(createCompany.fulfilled, (state, action) => {
         state.isLoading = false
         state.companiesList.push(action.payload)
      })
      builder.addCase(createCompany.rejected, (state, action) => {
         state.error = action.error.message
         state.isLoading = false
      })
   },
})

export type CompaniesListState = ReturnType<typeof CompaniesListSlice.reducer>
export default CompaniesListSlice.reducer
