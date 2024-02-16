import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from './RegistrationQuery'
import { AppDispatch } from '../../store/store'
import styles from '../../styles/LogInStyles.module.scss'

const LogIn = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch<AppDispatch>()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const handleLogIn = async () => {
      console.log('handleLogIn called')
      const result = await dispatch(login({ email, password }))
      if (login.fulfilled.match(result)) {
         if (result.payload.success) {
            navigate('/')
            console.log(' Login succes')
         } else {
            console.log('Login failed')
         }
      }
   }

   const handleChangePassword = () => {}

   return (
      <div className={styles.logInContainer}>
         <ul>
            <li>
               <label>Email</label>
               <input type="mail" onChange={(e) => setEmail(e.target.value)} />
            </li>
            <li>
               <label>Password</label>
               <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
               />
            </li>
            <button onClick={handleLogIn}>Log In</button>
         </ul>
         {/* <p onClick={handleChangePassword}>Забыли пароль?</p> */}
      </div>
   )
}

export default LogIn
