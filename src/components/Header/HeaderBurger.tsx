import styles from './styles/HeaderBurger.module.scss';
import { FC } from 'react';
import cn from 'classnames';
import { HeaderBurgerProps } from './types';

export const HeaderBurger: FC<HeaderBurgerProps> = ({ menuIsActive, onClick }) => {
   return (
      <div
         className={cn(styles.header_burger, { [styles.header_burger__active]: menuIsActive })}
         onClick={() => onClick()}>
         <span></span>
      </div>
   );
};
