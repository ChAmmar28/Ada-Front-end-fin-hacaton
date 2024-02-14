import { configureStore } from "@reduxjs/toolkit";
import VacationSlice, { VacationState } from "./slices/VacationSlice";

export const store = configureStore({
  reducer: {
    vacationReducer: VacationSlice,
  },
});

export type RootState = { vacationReducer: VacationState };

// import { configureStore } from '@reduxjs/toolkit'
// import newsListSlice, { NewsListState } from './../functions/NewsSlice'
// import CoursesSlice, { CoursesListState } from '../functions/CoursesSlice'

// export const store = configureStore({
//    reducer: {
//       newsList: newsListSlice,
//       coursesList: CoursesSlice,
//    },
// })

// export type RootState = {
//    newsList: NewsListState
//    coursesList: CoursesListState
// }

// export type AppDispatch = typeof store.dispatch
