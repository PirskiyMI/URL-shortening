import styles from './styles/FooterColumn.module.scss';
import { FC } from 'react';
import { FooterColumnProps, ILink } from './types';

export const FooterColumn: FC<FooterColumnProps> = ({ title, links }) => {
   return (
      <div className={styles.column}>
         <h2 className={styles.column_title}>{title}</h2>
         <ul className={styles.column_list}>
            {links.map(({ id, title, path }: ILink) => (
               <li className={styles.column_item} key={id}>
                  <a href={path} className={styles.column_link}>
                     {title}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
};
