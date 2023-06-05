import styles from './styles/Footer.module.scss';
import cn from 'classnames';
import { data } from './constants';
import { Logo } from '../Logo/Logo';
import { FooterSocials } from './FooterSocials';
import { FooterColumn } from './FooterColumn';


export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={cn(styles.footer_container, '_container')}>
            <Logo color='white'/>
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
