import styles from "../../styles/footerStyles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faHeart } from "@fortawesome/free-solid-svg-icons";
const Footer: React.FC = () => {
  return (
      <footer className={styles.footer}>
      <div className={styles.general}>
        <div className={styles.first}>
          {" "}
          <a className={styles.excur}href="">Сайт Концертно - экскурсионных программ</a>
        </div>
        <div className={styles.second}>
          <h3>Мероприятия</h3>
          <ul>
            <li>
              <a href="">Экскурсии</a>
            </li>
            <li>
              <a href="">Концерты</a>
            </li>
            <li>
              <a href="">Афиша</a>
            </li>
          </ul>
        </div>
        <div className={styles.third}>
          <h3>Контакты</h3>
          <ul>
            <li>
              <a href="https://2gis.kg/bishkek/firm/70000001068059058"className={styles.aaa} >
                {" "}
                <FontAwesomeIcon className={styles.lll} icon={faLocationDot}  /> Токомбаева 23/1 (ул.
                Сухэ-Батора)
              </a>
            </li>
            <li>
              {" "}
              <a href="https://www.instagram.com/adacourses/" className={styles.aaa}>
                <FontAwesomeIcon className={styles.iii} icon={faInstagram} /> Instagram
              </a>
            </li>
            <li>
              {" "}
              <a href="https://api.whatsapp.com/send/?phone=996555101815&text&type=phone_number&app_absent=0" className={styles.aaa}>
                {" "}
                <FontAwesomeIcon className={styles.www} icon={faWhatsapp} /> WhatsApp
              </a>
              <p className={styles.aaa}><FontAwesomeIcon className={styles.ttt} icon={faPhone} /> +996-556-444-514</p>
            </li>
          </ul>
        </div>
        </div>
        <div className={styles.ada}><h5 className={styles.bbb}> <FontAwesomeIcon className={styles.hhh} icon={faHeart} /> 2024. Безумно можно пройти обучение в ADA.COURSES </h5></div>
      </footer>
  );
};

export default Footer; 