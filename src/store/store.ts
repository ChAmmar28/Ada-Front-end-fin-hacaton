import { configureStore } from '@reduxjs/toolkit'
import newsListSlice, { NewsListState } from './../functions/NewsSlice'
import CoursesSlice, { CoursesListState } from '../functions/CoursesSlice'
import logIn, {
   LogInState,
} from '../components/Authorization/RegistrationQuery'

export const store = configureStore({
   reducer: {
      newsList: newsListSlice,
      coursesList: CoursesSlice,
      token: logIn,
   },
})

export type RootState = {
   newsList: NewsListState
   coursesList: CoursesListState
   token: LogInState
}

export type AppDispatch = typeof store.dispatch
