import { useEffect, useState } from 'react'
import PersonalInfo from './PersonalInfo'
import Authorization from './Authorization'
import styles from '../../styles/AuthStyles.module.scss'

const Auth = () => {
   const [isAuth, setIsAuth] = useState(false)
   const token = localStorage.getItem('AuthToken')
   useEffect(() => {
      console.log(isAuth)
      if (!token) {
         setIsAuth(!isAuth)
      }
      console.log(isAuth)
   }, [token])
   return (
      <div className={styles.authContainer}>
         {isAuth && <Authorization />}{' '}
         {!isAuth && <PersonalInfo setIsAuth={setIsAuth} />}
      </div>
   )
}

export default Auth
