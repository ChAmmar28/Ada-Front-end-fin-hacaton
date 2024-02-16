import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Vacancies from './pages/Vacancies/Vacancies'
import News from './pages/News/News'
import Posts from './pages/Posts/Posts'
import Company from './pages/Company/Company'
import Courses from './pages/Courses/Courses'
import NewsDetails from './pages/News/NewsDetails'
import Auth from './components/Authorization/Auth'
import VacancyPage from './pages/VacancyPage/VacancyPage'

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="/" index element={<HomePage />} />
               {/* <Route path="/vacancies" element={<Vacancies />} /> */}
               <Route path="/vacancies/:vacId" element={<VacancyPage />} />
               <Route path="/posts" element={<Posts />} />
               <Route path="/company" element={<Company />} />
               <Route path="/news" element={<News />} />
               <Route path="/news/details/:id" element={<NewsDetails />} />
               <Route path="/courses" element={<Courses />} />
               <Route path="/auth" element={<Auth />} />
               <Route path="*" element={<ErrorPage />} />
            </Route>
         </Routes>
      </>
   )
}

export default App
