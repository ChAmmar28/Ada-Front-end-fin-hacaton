import { useState } from 'react'
import Registration from './Registration'
import LogIn from './LogIn'

const Authorization = () => {
   const [regForm, setRegForm] = useState(true)
   const [loginForm, setLoginForm] = useState(false)
   const toggleForm = () => {
      console.log(regForm)
      console.log(loginForm)
      setRegForm(!regForm)
      setLoginForm(!loginForm)
   }
   return (
      <div>
         <div onClick={toggleForm}>
            <span>x</span>
         </div>
         {regForm && <Registration />}
         {loginForm && <LogIn />}
      </div>
   )
}

export default Authorization
