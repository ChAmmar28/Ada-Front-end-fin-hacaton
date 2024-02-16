import React, { useEffect, useState } from 'react'
import { getNewsList } from '../../functions/NewsSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useNavigate } from 'react-router-dom'

import styles from '../../styles/NewsListStyles.module.scss'
import AddNewsForm from './AddNewsForm'

const News: React.FC = () => {
   const [addNewsForm, setAddNewsForm] = useState(false)
   const dispatch = useDispatch<AppDispatch>()
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(getNewsList())
   }, [])

   const news = useSelector((state: RootState) => state.newsList.newsList)

   const toNewsDetails = (id: any) => {
      navigate(`/news/details/${id}`)
   }

   const handleAddNews = () => {
      setAddNewsForm(false)
   }

   return (
      <div className={styles.newsList}>
         {news.map((item) => (
            <div
               className={styles.newsList__item}
               key={item.id}
               onClick={() => toNewsDetails(item.id)}
            >
               <img width="100%" src={item.img} alt={item.place} />
               <p className={styles.newsList__item__title}>{item.title}</p>
            </div>
         ))}
         <button onClick={() => setAddNewsForm(true)}>Add+</button>
         <div>
            {addNewsForm && <AddNewsForm submit={() => handleAddNews} />}
         </div>
      </div>
   )
}

export default News
