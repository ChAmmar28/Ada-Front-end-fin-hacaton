import { useState } from 'react'
import { registerPost } from './RegistrationQuery'
import styles from '../../styles/RegistrationStyles.module.scss'

interface LogInProps {
   setLoginForm: React.Dispatch<React.SetStateAction<boolean>>
}

const Registration: React.FC<LogInProps> = ({ setLoginForm }) => {
   const [email, setEmail] = useState('')
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [password, setPassword] = useState('')
   const [confPassword, setConfPassword] = useState('')

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
            setLoginForm(true)
            console.log('Registration succes')
         } else {
            return <div>{reg.data}</div>
         }
      } catch (error) {
         console.error('Error during registration:', error)
      }
   }
   return (
      <div className={styles.registrationForm}>
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
      </div>
   )
}

export default Registration
