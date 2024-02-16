import { useState } from 'react'
import Registration from './Registration'
import LogIn from './LogIn'
import styles from '../../styles/AuthorizationStyles.module.scss'
import { ToggleRight } from 'lucide-react'

const Authorization = () => {
   const [regForm, setRegForm] = useState(true)
   const [loginForm, setLoginForm] = useState(false)
   const toggleForm = () => {
      setRegForm(!regForm)
      setLoginForm(!loginForm)
   }
   return (
      <div className={styles.authContainer}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               paddingTop: '20px',
            }}
         >
            <ToggleRight
               cursor="pointer"
               display="block"
               width="50px"
               hanging="50px"
               onClick={toggleForm}
            />
         </div>
         {regForm && <Registration setLoginForm={toggleForm} />}
         {loginForm && <LogIn />}
      </div>
   )
}

export default Authorization
