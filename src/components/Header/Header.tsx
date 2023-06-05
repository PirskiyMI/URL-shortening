import { useState } from 'react';

import styles from './styles/Header.module.scss';
import cn from 'classnames';
import { HeaderBurger } from './HeaderBurger';
import { HeaderMenu } from './HeaderMenu';
import { Logo } from '../Logo/Logo';

export const Header = () => {
   const [menuActive, setMenuActive] = useState(false);

   return (
      <header className={styles.header}>
         <div className={cn(styles.header_container, '_container')}>
            <Logo color='var(--color-primary-violet)'/>
            <HeaderMenu menuIsActive={menuActive} />
            <HeaderBurger menuIsActive={menuActive} onClick={() => setMenuActive(!menuActive)} />
         </div>
      </header>
   );
};
