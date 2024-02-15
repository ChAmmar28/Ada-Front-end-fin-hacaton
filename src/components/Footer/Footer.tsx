import styles from '../../styles/footerStyles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
const Footer: React.FC = () => {
   return (
      <div>
         <div className={styles.footer}>
            <div>
               {' '}
               <a href="">Сайт Концертно - экскурсионных программ</a>
            </div>
            <div>
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
            <div>
               <h3>Контакты</h3>
               <ul>
                  <li>
                     <a href="https://2gis.kg/bishkek/firm/70000001068059058">
                        {' '}
                        <FontAwesomeIcon icon={faLocationPin} /> Токомбаева 23/1
                        (ул. Сухэ-Батора)
                     </a>
                  </li>
                  <li>
                     {' '}
                     <a href="https://www.instagram.com/adacourses/">
                        <FontAwesomeIcon icon={faInstagram} /> Instagram
                     </a>
                  </li>
                  <li>
                     {' '}
                     <a href="https://api.whatsapp.com/send/?phone=996555101815&text&type=phone_number&app_absent=0">
                        {' '}
                        <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Footer
