import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCompaniesList } from './CompaniesSlice'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import styles from '../../styles/companiesStyles.module.scss'
import AddCompany from './AddCompany'
const Company = () => {
   const [addForm, setAddForm] = useState(false)
   const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch()
   const companies = useSelector(
      (state: RootState) => state.companiesList.companiesList
   )
   console.log('companies: ', companies)
   useEffect(() => {
      const fetchData = async () => {
         try {
            await dispatch(getCompaniesList())
         } catch (error) {
            console.error('Error fetching company list:', error)
         }
      }

      fetchData()
   }, [])
   const handleAddCompany = () => {
      setAddForm(true)
   }
   return (
      <div className={styles.companyContainer}>
         <button onClick={handleAddCompany}>Add+</button>
         <div className={styles.companiesList}>
            {companies &&
               companies.map((item: any) => (
                  <div className={styles.companiesList__item} key={item.id}>
                     <h2 className={styles.companiesList__item__title}>
                        {item.name}
                     </h2>
                     <h5 className={styles.companiesList__item__owner}>
                        {item.owner}
                     </h5>
                     <p className={styles.companiesList__item__description}>
                        {item.description}
                     </p>
                     <div className={styles.companiesList__item__image}>
                        <img
                           width="100%"
                           src={`https://it-intern-hub.freemyip.com/${item.image}`}
                           alt=""
                        />
                     </div>
                  </div>
               ))}
         </div>
         {addForm && <AddCompany close={setAddForm} />}
      </div>
   )
}

export default Company
