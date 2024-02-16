import VacancyList from "../../components/VacancyList/VacancyList";
import cls from "../../styles/HomePage.module.scss";

function HomePage() {
  return (
    <div className={cls.HomePage}>
      Home
      <VacancyList />
    </div>
  );
}

export default HomePage;
