import styles from './styles/Stat.module.scss';
import cn from 'classnames';
import { FC } from 'react';
import { StatCard } from './StatCard';
import { data } from './constants';

export const Stat: FC = () => {
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
               {data.map((el) => (
                  <StatCard key={el.id} {...el} />
               ))}
            </div>
         </div>
      </section>
   );
};
