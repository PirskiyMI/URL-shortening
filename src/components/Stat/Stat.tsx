import styles from './styles/Stat.module.scss';
import graphIcon from './../../assets/images/icon-brand-recognition.svg';
import clockIcon from './../../assets/images/icon-detailed-records.svg';
import pensIcon from './../../assets/images/icon-fully-customizable.svg';
import cn from 'classnames';

export const StatCard = () => {
   return (
      <div className={styles.card}>
         <div className={styles.card_icon}>
            <img src={graphIcon} alt="graph icon" />
         </div>
         <div className={styles.card_info}>
            <h3 className={styles.card_title}>Brand Recognition</h3>
            <p className={styles.card_text}>
               Boost your brand recognition with each click. Generic links don't mean a thing.
               Branded links help instill confidence in your content.
            </p>
         </div>
      </div>
   );
};

export const Stat = () => {
   return (
      <section className={styles.stat}>
         <div className={cn(styles.stat_container, '_container')}>
            <div className={styles.stat_body}>
               <h2 className={styles.stat_title}>Advanced statistics</h2>
               <p className={styles.stat_text}>
                  Track how your links are performing across the web with our advanced statistics
                  dashboard
               </p>
            </div>
            <div className={styles.stat_cards}>
               <StatCard />
               <div className={styles.stat_line}></div>
               <StatCard />
               <StatCard />
            </div>
         </div>
      </section>
   );
};
