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

export const getMoreInfo = createAsyncThunk<any, void>(
  "getMoreInfo",
  async (id, thunkAPI) => {
    //  try {
    //     const response = await API.get(news/news_detail/${id}/)
    //     console.log(response.data.news)
    //     return response.data.news
    //  } catch (error) {
    //     return thunkAPI.rejectWithValue(error)
    //  }
    try {
      const response = await API.get(`vacancies/vacancy/${id}/`);
      console.log("response: ", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const MoreInfoSlice = createSlice({
  name: "MoreInfoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoreInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
  },
});

export type MoreInfoState = ReturnType<typeof MoreInfoSlice.reducer>;
export default MoreInfoSlice.reducer;
