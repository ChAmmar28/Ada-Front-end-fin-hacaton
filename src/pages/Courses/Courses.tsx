import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCoursesList } from '../../functions/CoursesSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { AppDispatch } from '../../store/store'

const Courses = () => {
   const dispatch = useDispatch<AppDispatch>()
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(getCoursesList())
   }, [])

   const courses = useSelector((state: RootState) => state.newsList.newsList)
   console.log('courses: ', courses)
   return <div>COURSEs</div>
}

export default Courses
