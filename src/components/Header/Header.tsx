import { NavLink } from 'react-router-dom'
import { CircleUserRound, LogIn } from 'lucide-react'
import '../../styles/HeaderStyles.scss'
import { useEffect, useState } from 'react'

const Header: React.FC = () => {
   const [isAuthHead, setIsAuthHead] = useState(true)
   const token = localStorage.getItem('AuthToken')
   useEffect(() => {
      if (token === null) {
         setIsAuthHead(false)
      } else {
         setIsAuthHead(true)
      }
   }, [isAuthHead])
   return (
      <header>
         <div className="logo">
            <NavLink to="/">IT-internHUB</NavLink>
         </div>
         <div className="navBar">
            <ul>
               <li>
                  {' '}
                  <NavLink
                     to="/vacancies"
                     className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                     }
                  >
                     Ваканции
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/posts"
                     className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                     }
                  >
                     Публикации
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/company"
                     className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                     }
                  >
                     Компании
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/news"
                     className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                     }
                  >
                     Новости
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/courses"
                     className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                     }
                  >
                     Курсы
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="https://t.me/+x32bgUZeSA83MGE6"
                     className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                     }
                  >
                     Сообщество
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="https://t.me/INTERN_gpt_ada_bot"
                     className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                     }
                  >
                     ChatGPT
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/auth">
                     {isAuthHead ? <CircleUserRound /> : <LogIn />}
                  </NavLink>
               </li>
            </ul>
         </div>
      </header>
   )
}

export default Header
