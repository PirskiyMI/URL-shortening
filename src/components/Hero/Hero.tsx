import { Button } from '../Button/Button';
import styles from './styles/Hero.module.scss';
import cn from 'classnames';

import image from './../../assets/images/illustration-working.svg';

export const Hero = () => {
   return (
      <section className={styles.hero}>
         <div className={cn(styles.hero_container, '_container')}>
            <div className={styles.hero_body}>
               <div className={styles.hero_info}>
                  <h1 className={styles.hero_title}>More than just shorter links</h1>
                  <p className={styles.hero_text}>
                     Build your brand's recognition and get detailed insights on how your links are
                     performing.
                  </p>
               </div>
               <Button>get started</Button>
            </div>
            <div className={styles.hero_background}>
               <img className={styles.hero_image} src={image} alt="Man sitting at the computer"/>
            </div>
         </div>
      </section>
   );
};
