import { NavLink } from "react-router-dom";

import cls from "../../styles/VacancyCard.module.scss";

function VacancyCard() {
  return (
    <li>
      <NavLink to={""}>
        {" "}
        <img src="" alt="" />
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </NavLink>
    </li>
  );
}

export default VacancyCard;
