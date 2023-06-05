import styles from './styles/Footer.module.scss';
import cn from 'classnames';
import { data } from './constants';
import { FooterColumnProps, FooterSocialsProps, ILink, ISocial } from './types';
import { Logo } from '../Logo/Logo';

export const FooterColumn = ({ title, links }: FooterColumnProps) => {
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

export const FooterSocials = ({ socials }: FooterSocialsProps) => {
   return (
      <ul className={cn(styles.footer_socials, styles.socials)}>
         {socials.map(({ id, icon: SVG, alt }: ISocial) => (
            <li className={styles.socials_item} key={id}>
               <a href="#" className={styles.socials_link} aria-label={alt}>
                  <SVG />
               </a>
            </li>
         ))}
      </ul>
   );
};

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={cn(styles.footer_container, '_container')}>
            <Logo/>
            <nav className={styles.footer_nav}>
               <div className={styles.footer_columns}>
                  {data.columns.map(({ id, ...props }) => (
                     <FooterColumn key={id} {...props} />
                  ))}
               </div>
               <FooterSocials socials={data.socials} />
            </nav>
         </div>
      </footer>
   );
};