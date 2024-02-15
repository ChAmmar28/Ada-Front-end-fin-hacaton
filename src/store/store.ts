import { configureStore } from '@reduxjs/toolkit'
import newsListSlice, { NewsListState } from './../functions/NewsSlice'
import CoursesSlice, { CoursesListState } from '../functions/CoursesSlice'
import VacationSlice, { VacationState } from "./slices/VacationSlice";
import MoreInfoSlice, { MoreInfoState } from "./slices/MoreInfoSlice";

export const store = configureStore({
   reducer: {
      newsList: newsListSlice,
      coursesList: CoursesSlice,
      vacationReducer: VacationSlice,
      moreInfoReducer: MoreInfoSlice,
   },
})

export type RootState = {
   newsList: NewsListState
   coursesList: CoursesListState
   vacationReducer: VacationState
   moreInfoReducer: MoreInfoState
}

export type AppDispatch = typeof store.dispatch
