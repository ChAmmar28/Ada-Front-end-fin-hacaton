import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store/store'
import { useEffect } from 'react'
import { getNewsDetails } from '../../functions/NewsSlice'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'

const NewsDetails = () => {
   const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch()
   const { id } = useParams()
   console.log('id: ', id)
   const newsDetails = useSelector(
      (state: RootState) => state.newsList.newsDetails
   )
   console.log('newsDetails: ', newsDetails)

   useEffect(() => {
      if (id) {
         dispatch(getNewsDetails(id))
      }
   }, [dispatch, id])
   return (
      <div>
         <div>
            <img
               src={`https://it-intern-hub.freemyip.com${newsDetails.image}`}
               alt="img"
            />
         </div>
         <div>
            <h3>{newsDetails.owner}</h3>
            <h5>{newsDetails.title}</h5>
            <p>{newsDetails.place}</p>
            <p>{newsDetails.text}</p>
            <p>{newsDetails.links}</p>
            <p>{newsDetails.created_at}</p>
         </div>
      </div>
   )
}

export default NewsDetails
