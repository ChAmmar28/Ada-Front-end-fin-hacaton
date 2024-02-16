import { useState } from 'react'
import { registerPost } from './RegistrationQuery'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
   const [email, setEmail] = useState('')
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [password, setPassword] = useState('')
   const [confPassword, setConfPassword] = useState('')

   // const [token, setToken] = useState('')
   // const [activate, setActivate] = useState(false)

   const navigate = useNavigate()

   const handleRegistration = async () => {
      try {
         const reg = await registerPost(
            email,
            firstName,
            lastName,
            password,
            confPassword
         )

         console.log('reg: ', reg)
         if (reg.success) {
            console.log('object')
         } else {
            return <div>{reg.data}</div>
         }

         // // Проверяем успешность регистрации
         // if (reg.success) {
         //    // Устанавливаем activate в true
         //    setActivate(true)
         // } else {
         //    // Обработка неудачи, если необходимо
         //    console.error('Registration failed:', reg.data)
         // }
      } catch (error) {
         console.error('Error during registration:', error)
      }
   }
   // const handleActivate = () => {
   //    try {
   //       const active = activateAccount(token)
   //       console.log('active: ', active)
   //       navigate('/login')
   //    } catch (error) {
   //       console.error('Error during activation:', error)
   //    }
   // }
   return (
      <div>
         <ul>
            <li>
               <label>Email</label>
               <input onChange={(e) => setEmail(e.target.value)} type="email" />
            </li>
            <li>
               <label>First Name</label>
               <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
               />
            </li>
            <li>
               <label>Last Name</label>
               <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
               />
            </li>
            <li>
               <label>Password</label>
               <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
               />
            </li>
            <li>
               <label>Confirm Password</label>
               <input
                  onChange={(e) => setConfPassword(e.target.value)}
                  type="password"
               />
            </li>
            <button onClick={handleRegistration}>Reg</button>
         </ul>
         {/* {activate && (
            <div>
               <input
                  type="text"
                  placeholder="token"
                  onChange={(e) => setToken(e.target.value)}
               />
               <button onClick={handleActivate}>Activate</button>
            </div>
         )} */}
      </div>
   )
}

export default Registration
