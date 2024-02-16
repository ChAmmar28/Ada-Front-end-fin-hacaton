import styles from '../../styles/HomePageStyles.module.scss'
import eldos from '../../assets/eldos.jpg'
import yiman from '../../assets/yiman.jpg'
import sultan from '../../assets/i.jpg'
import aizat from '../../assets/aizat.jpg'
import artem from '../../assets/artem.jpg'
import anton from '../../assets/anton2.jpg'
function HomePage() {
   return (
      <main className={styles.HomePage}>
         <h1>IT-intern-HUB</h1>
         <p className={styles.description}>
            Сборище бестыжих, безответственных, безчувтсвенных, безтактных,
            непунктальных людей
            <span>(кроме Султана)</span>. Но сайт у нас класный в голове
         </p>
         <h4>Наша команда</h4>
         <h5>Font-End</h5>
         <ul>
            <li>
               <div className={styles.imgCont}>
                  <img width="100%" height="100%" src={sultan} alt="front" />
               </div>
               <p>Султан</p>
            </li>
            <li>
               <div className={styles.imgCont}>
                  <img width="100%" height="100%" src={aizat} alt="front" />
               </div>
               <p>Айзат</p>
            </li>
            <li>
               <div className={styles.imgCont}>
                  <img
                     width="100%"
                     height="100%"
                     src="https://cs8.pikabu.ru/post_img/2017/06/18/11/149781534513182398.jpg"
                     alt="front"
                  />
               </div>
               <p>Аммар</p>
            </li>
            <li>
               <div className={styles.imgCont}>
                  <img
                     width="100%"
                     height="100%"
                     src="https://cs3.pikabu.ru/post_img/big/2014/02/16/8/1392554736_2135986208.jpg"
                     alt="front"
                  />
               </div>
               <p>Элеман</p>
            </li>
         </ul>
         <h5>Back-End</h5>
         <ul>
            <li>
               <div className={styles.imgCont}>
                  <img width="100%" height="100%" src={yiman} alt="front" />
               </div>
               <p>Ыйманбек</p>
            </li>
            <li>
               <div className={styles.imgCont}>
                  <img width="100%" height="100%" src={eldos} alt="front" />
               </div>
               <p>Элдос</p>
            </li>
         </ul>
         <h5>Наши менторы</h5>
         <ul>
            <li>
               <div className={styles.imgCont}>
                  <img width="100%" src={artem} alt="front" />
               </div>
               <p>Артем (Front-End)</p>
            </li>
            <li>
               <div className={styles.imgCont}>
                  <img width="100%" src={anton} alt="front" />
               </div>
               <p>Антон (Back-End)</p>
            </li>
         </ul>
      </main>
   )
}
export default HomePage
