import styles from './styles/FooterSocials.module.scss';
import { FC } from 'react';
import { FooterSocialsProps, ISocial } from './types';

export const FooterSocials: FC<FooterSocialsProps> = ({ socials }) => {
   return (
      <ul className={styles.socials}>
         {socials.map(({ id, icon: SVG, alt }: ISocial) => (
            <li key={id}>
               <a href="#" aria-label={alt}>
                  <SVG className={styles.socials_icon} />
               </a>
            </li>
         ))}
      </ul>
   );
};
