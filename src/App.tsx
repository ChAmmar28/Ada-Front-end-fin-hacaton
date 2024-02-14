import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Vacancies from './pages/Vacancies/Vacancies'
import ChatGPT from './pages/ChatGPT/ChatGPT'
import News from './pages/News/News'
import Posts from './pages/Posts/Posts'
import Company from './pages/Company/Company'
import Courses from './pages/Courses/Courses'
import NewsDetails from './pages/News/NewsDetails'

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="/" index element={<HomePage />} />
               <Route path="/vacancies" index element={<Vacancies />} />
               <Route path="/posts" index element={<Posts />} />
               <Route path="/company" index element={<Company />} />
               <Route path="/news" index element={<News />} />
               <Route
                  path="/news/details/:id"
                  index
                  element={<NewsDetails />}
               />
               <Route path="/courses" index element={<Courses />} />
               <Route path="/chatGPT" index element={<ChatGPT />} />
               <Route path="*" element={<ErrorPage />} />
            </Route>
         </Routes>
      </>
   )
}

export default App
