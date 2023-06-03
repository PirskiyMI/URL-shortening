import { Button } from '../Button/Button';
import styles from './Header.module.scss';
import cn from 'classnames';
import { HeaderLinkProps } from './types';



export const HeaderLink = ({ address, title }: HeaderLinkProps) => {
   return (
      <li className={styles.header_item}>
         <a href={address} className={styles.header_link}>
            {title}
         </a>
      </li>
   );
};

const linksAddresses = [
   { id: 1, address: '#', title: 'Features' },
   { id: 2, address: '#', title: 'Pricing' },
   { id: 3, address: '#', title: 'Resources' },
];

export const HeaderNav = () => {
   return (
      <nav className={styles.header_nav}>
         <ul className={styles.header_list}>
            {linksAddresses.map((el) => (
               <HeaderLink key={el.id} address={el.address} title={el.title} />
            ))}
         </ul>
      </nav>
   );
};

export const Header = () => {
   return (
      <header className={styles.header}>
         <div className={cn(styles.header_container, '_container')}>
            <div className={styles.header_logo}>Shortly</div>
            <div className={styles.header_menu}>
               <HeaderNav />
               <div className={styles.header_login}>
                  <button className={styles.header_item}>Login</button>
                  <Button>sign up</Button>
               </div>
            </div>
            <div className={styles.header_burger}>
               <span></span>
            </div>
         </div>
      </header>
   );
};
