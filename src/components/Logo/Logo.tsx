import styles from './Logo.module.scss';
import { ReactComponent as LogoIcon } from './../../assets/images/logo.svg';

export const Logo = () => {
   return (
      <a href="#" className={styles.logo}>
         <LogoIcon />
      </a>
   );
};
