import { configureStore } from '@reduxjs/toolkit'
import newsListSlice, { NewsListState } from './../functions/NewsSlice'
import CoursesSlice, { CoursesListState } from '../functions/CoursesSlice'
import logIn, { LogInState } from '../components/Authorization/RegistrationQuery'
import CompaniesSlice, { CompaniesListState } from '../pages/Company/CompaniesSlice'
import VacationSlice, { VacationState } from "./slices/VacationSlice";
import MoreInfoSlice, { MoreInfoState } from "./slices/MoreInfoSlice";



export const store = configureStore({
   reducer: {
      newsList: newsListSlice,
      coursesList: CoursesSlice,
      token: logIn,
      companiesList: CompaniesSlice,
      vacationReducer: VacationSlice,
      moreInfoReducer: MoreInfoSlice,
   },
})

export type RootState = {
   newsList: NewsListState
   coursesList: CoursesListState
   token: LogInState
   companiesList: CompaniesListState
   vacationReducer: VacationState
   moreInfoReducer: MoreInfoState

}

export type AppDispatch = typeof store.dispatch
