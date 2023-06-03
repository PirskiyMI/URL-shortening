import { useState } from 'react';

import { Button } from '../Button/Button';
import styles from './styles/Header.module.scss';
import cn from 'classnames';
import { HeaderNav } from './HeaderNav';
import { HeaderBurger } from './HeaderBurger';

export const Header = () => {
   const [menuActive, setMenuActive] = useState(false);

   return (
      <header className={styles.header}>
         <div className={cn(styles.header_container, '_container')}>
            <div className={styles.header_logo}>Shortly</div>
            <div className={cn(styles.header_menu, { [styles.header_menu__active]: menuActive })}>
               <HeaderNav />
               <div className={styles.header_login}>
                  <button className={styles.header_item}>Login</button>
                  <Button>sign up</Button>
               </div>
            </div>
            <HeaderBurger menuIsActive={menuActive} onClick={() => setMenuActive(!menuActive)} />
         </div>
      </header>
   );
};
