import { NavLink } from 'react-router-dom'
import { IVacancyProps } from '../../types/IVacancyProps'
import cls from '../../styles/VacancyCard.module.scss'
import { RootState } from '../../store/store'
import { useDispatch } from 'react-redux'
import { getMoreInfo } from '../../store/slices/MoreInfoSlice'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'

function VacancyCard({ data }: IVacancyProps) {
   const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch()
   const HandelClick = () => {
      dispatch(getMoreInfo(data.id))
   }

   return (
      <li className={cls.VacancyCard}>
         <NavLink
            to={`/vacancies/${data.id}`}
            className={cls.Wrapp}
            onClick={HandelClick}
         >
            <img src="" alt="" />
            <div>
               <p className={cls.title}>{data.title}</p>
               <p className={cls.owner}>{data.owner}</p>
               <p className={cls.salary}>{data.salary}</p>
            </div>
         </NavLink>
      </li>
   )
}

export default VacancyCard
