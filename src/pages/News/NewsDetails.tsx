import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../../store/store'
import { useEffect } from 'react'
import { NewsItem, getNewsDetails } from '../../functions/NewsSlice'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import styles from '../../styles/NewsDetails.module.scss'
import { XCircle } from 'lucide-react'

const NewsDetails = () => {
   const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch()
   const navigate = useNavigate()
   const { id } = useParams()
   console.log('id: ', id)
   const newsDetails = useSelector<RootState, NewsItem[]>(
      (state: RootState) => state.newsList.newsDetails
   )
   console.log('newsDetails: ', newsDetails)
   useEffect(() => {
      if (id) {
         dispatch(getNewsDetails(id))
      }
   }, [dispatch, id])
   const handleClose = () => {
      navigate(-1)
   }
   return (
      <div
         style={{
            backgroundImage: `url(https://it-intern-hub.freemyip.com${newsDetails.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
         className={styles.detailsContainer}
      >
         <div className={styles.over}></div>
         {newsDetails && (
            <div className={styles.detail}>
               <img
                  src={`https://it-intern-hub.freemyip.com${newsDetails.image}`}
                  alt="img"
               />
               <div className={styles.description}>
                  <h3>{newsDetails.title}</h3>
                  <h5>{newsDetails.owner}</h5>
                  <p>{newsDetails.place}</p>
                  <p>{newsDetails.text}</p>
                  <p>{newsDetails.links}</p>
                  <p>{newsDetails.created_at}</p>
               </div>
               <div onClick={handleClose} className={styles.closeBtn}>
                  <XCircle />
               </div>
            </div>
         )}
      </div>
   )
}

export default NewsDetails
