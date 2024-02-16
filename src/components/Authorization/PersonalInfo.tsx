import { useEffect } from 'react'
import styles from '../../styles/PersonalInfo.module.scss'
import { LogOut } from 'lucide-react'
interface PersonalInfoProps {
   setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}
const PersonalInfo: React.FC<PersonalInfoProps> = ({ setIsAuth }) => {
   const token = localStorage.getItem('AuthToken')
   const handleLogOut = () => {
      console.log('token', token)
      localStorage.removeItem('AuthToken')
      console.log('token remove')
      console.log(localStorage.getItem('AuthToken'))
      window.location.reload()
   }
   useEffect(() => {
      // setIsAuth(true)
      // window.location.reload()
   }, [token])
   return (
      <div className={styles.infoBlock}>
         <h1>Hello User</h1>
         <button onClick={handleLogOut}>
            <LogOut />
         </button>
      </div>
   )
}

export default PersonalInfo
