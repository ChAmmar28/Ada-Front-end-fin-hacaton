import API from "../../functions/AxiosRequester";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface initState {
  list: any[];
  isLoading: boolean;
  error: any;
}

const initialState: initState = {
  list: [],
  isLoading: false,
  error: {},
};

export const getVacations = createAsyncThunk<any, void>(
  "getVacations",
  async () => {
    const response = await API.get(`vacancies/vacancies_view/`);
    console.log("response: ", response.data);
    return response.data;
  }
);

const VacationSlice = createSlice({
  name: "vacationSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVacations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getVacations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(getVacations.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export type VacationState = ReturnType<typeof VacationSlice.reducer>;
export default VacationSlice.reducer;

// import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import API from './AxiosRequester'
// import { AxiosResponse } from 'axios'

// interface initState {
//    newsList: any[]
//    newsDetails: any[]
//    isLoading: boolean
//    error: any
// }

// const initialState: initState = {
//    newsList: [],
//    newsDetails: [],
//    isLoading: false,
//    error: {},
// }

// export const getNewsList = createAsyncThunk<any[], void>(
//    'NewsList',
//    async () => {
//       const response = await API.get(news/news/)
//       console.log(response.data.results)
//       return response.data.results
//    }
// )

// export const getNewsDetails = createAsyncThunk<any, string>(
//    'NewsDetails', // изменено any[] на any и void на string
//    async (id, thunkAPI) => {
//       try {
//          const response = await API.get(news/news_detail/${id}/)
//          console.log(response.data.news)
//          return response.data.news
//       } catch (error) {
//          return thunkAPI.rejectWithValue(error)
//       }
//    }
// )

// const newsListSlice = createSlice({
//    name: 'newsList',
//    initialState,
//    reducers: {},
//    extraReducers: (builder) => {
//       builder.addCase(getNewsList.pending, (state) => {
//          state.isLoading = true
//       })
//       builder.addCase(getNewsList.fulfilled, (state, action) => {
//          state.isLoading = false
//          state.newsList = action.payload
//       })
//       builder.addCase(getNewsDetails.fulfilled, (state, action) => {
//          state.isLoading = false
//          state.newsDetails = action.payload
//       })
//       builder.addCase(getNewsList.rejected, (state, action) => {
//          state.error = action.error
//          state.isLoading = false
//       })
//    },
// })

// export type NewsListState = ReturnType<typeof newsListSlice.reducer>
// export default newsListSlice.reducer

// extraReducers: (builder) => {
//   // builder.addCase(getFilms.pending, (state) => {
//   //   state.isLoading = true;
//   // });
//   // builder.addCase(getFilms.fulfilled, (state, action) => {
//   //   state.isLoading = false;
//   //   state.list = action.payload.films;
//   // });
//   // builder.addCase(getFilms.rejected, (state, action) => {
//   //   state.error = action.error;
//   //   state.isLoading = false;
//   });
// },
