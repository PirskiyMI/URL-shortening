import { useState } from 'react';

import styles from './styles/Header.module.scss';
import cn from 'classnames';
import { HeaderBurger } from './HeaderBurger';
import { HeaderMenu } from './HeaderMenu';

export const Header = () => {
   const [menuActive, setMenuActive] = useState(false);
   

   return (
      <header className={styles.header}>
         <div className={cn(styles.header_container, '_container')}>
            <div className={styles.header_logo}>Shortly</div>
            <HeaderMenu menuIsActive={menuActive}/>
            <HeaderBurger menuIsActive={menuActive} onClick={() => setMenuActive(!menuActive)} />
         </div>
      </header>
   );
};
