import { NavLink } from "react-router-dom";
import { IVacancyProps } from "../../types/IVacancyProps";
import cls from "../../styles/VacancyCard.module.scss";
// import { IVacancyData } from "../../types/IVacancyData";
// import { useDispatch } from "react-redux";
// import MoreInfoSlice from "../../store/slices/MoreInfoSlice";

function VacancyCard({ data }: IVacancyProps) {
  return (
    <li className={cls.VacancyCard}>
      <NavLink to={""} className={cls.Wrapp}>
        <img src="" alt="" />
        <div>
          <p className={cls.title}>{data.title}</p>
          <p className={cls.owner}>{data.owner}</p>
          <p className={cls.salary}>{data.salary}</p>
        </div>
      </NavLink>
    </li>
  );
}

export default VacancyCard;
