import { NavLink } from "react-router-dom";
import '../../styles/HeaderStyles.scss'

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to='/'>IT-internHUB</NavLink>
      </div>
      <div className="navBar">
        <ul>
        <li>        <NavLink to='/vacancy' className={({isActive}) => isActive ? 'active-link' : ''}>Ваканции</NavLink>
        </li>
          <li><NavLink to='/events' className={({isActive}) => isActive ? 'active-link' : ''}>Мероприятия</NavLink></li>
          <li><NavLink to='/organization' className={({isActive}) => isActive ? 'active-link' : ''}>Организации</NavLink></li>
          <li><NavLink to='/community' className={({isActive}) => isActive ? 'active-link' : ''}>Сообщества</NavLink></li>
          <li><NavLink to='/chatGPT' className={({isActive}) => isActive ? 'active-link' : ''}>ChatGPT</NavLink></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
