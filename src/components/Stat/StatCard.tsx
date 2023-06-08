import styles from './styles/StatCard.module.scss';
import { StatCardProps } from './types';
import { FC } from 'react';

export const StatCard: FC<StatCardProps> = ({ title, text, icon }) => {
   return (
      <div className={styles.card}>
         <div className={styles.card_icon}>
            <img src={icon.src} alt={icon.alt} />
         </div>
         <div className={styles.card_info}>
            <h3 className={styles.card_title}>{title}</h3>
            <p className={styles.card_text}>{text}</p>
         </div>
      </div>
   );
};
