import { useSelector } from 'react-redux'
import { IVacancyData } from '../../types/IVacancyData'
import { RootState } from '../../store/store'
import VacancyCard from '../VacancyCard/VacancyCard'
import cls from '../../styles/VacancyList.module.scss'
import { useDispatch } from 'react-redux'
import { getVacations } from '../../store/slices/VacationSlice'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
// import { getMoreInfo } from "../../store/slices/MoreInfoSlice";

function VacancyList() {
   const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch()
   useEffect(() => {
      dispatch(getVacations())
   }, [])

   // const handleClick = (data: IVacancyData) => {
   //   dispatch(getMoreInfo(data));
   // };
   useEffect(() => {
      dispatch(getVacations())
   }, [])

   const data: IVacancyData[] = useSelector(
      (state: RootState) => state.vacationReducer.list
   )
   return (
      <ul className={cls.VacancyList}>
         {data?.map((item) => (
            <VacancyCard key={item.id} data={item} />
         ))}
      </ul>
   )
}

export default VacancyList
