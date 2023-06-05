import styles from './styles/FooterSocials.module.scss';
import { FooterSocialsProps, ISocial } from './types';

export const FooterSocials = ({ socials }: FooterSocialsProps) => {
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
