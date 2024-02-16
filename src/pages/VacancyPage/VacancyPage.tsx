import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getMoreInfo } from '../../store/slices/MoreInfoSlice'

function VacancyPage() {
   const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch()
   const { vacId } = useParams()

   const vacData = useSelector((state: RootState) => state.moreInfoReducer.obj)

   useEffect(() => {
      if (vacId) {
         dispatch(getMoreInfo(vacId))
      }
   }, [dispatch, vacId])

   return (
      <div>
         <p>{vacData.title}</p>
         <p>{vacData.description}</p>
         <p>{vacData.owner}</p>
         <p>{vacData.salary}</p>
      </div>
   )
}

export default VacancyPage
