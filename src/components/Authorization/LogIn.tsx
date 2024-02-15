import { useState } from 'react'
import { logIn } from './RegistrationQuery'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
   const navigate = useNavigate()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleLogIn = () => {
      const login = logIn(email, password)
      console.log('login: ', login)
      navigate('/')
   }
   const handleChangePassword = () => {}

   return (
      <div>
         <ul>
            <li>
               <label>email</label>
               <input type="mail" onChange={(e) => setEmail(e.target.value)} />
            </li>
            <li>
               <label>password</label>
               <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
               />
            </li>
            <button onClick={handleLogIn}>Log In</button>
         </ul>
         <p onClick={handleChangePassword}>Забыли пароль?</p>
      </div>
   )
}

export default LogIn