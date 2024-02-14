import { NavLink } from "react-router-dom";
import { IVacancyProps } from "../../types/IVacancyProps";
// import cls from "../../styles/VacancyCard.module.scss";

function VacancyCard({ data }: IVacancyProps) {
  return (
    <li>
      <NavLink to={""}>
        <img src="" alt="" />
        <div>
          <p>{data.title}</p>
          <p>{data.owner}</p>
          <p>{data.salary}</p>
        </div>
      </NavLink>
    </li>
  );
}

export default VacancyCard;
