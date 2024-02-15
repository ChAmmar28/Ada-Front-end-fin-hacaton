import { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import Authorization from './Authorization'

const Auth = () => {
   const [isAuth, setIsAuth] = useState(false)
   return <div>{isAuth ? <PersonalInfo /> : <Authorization />}</div>
}

export default Auth
