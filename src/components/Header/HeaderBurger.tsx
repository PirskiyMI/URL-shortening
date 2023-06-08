import styles from './styles/HeaderBurger.module.scss';
import cn from 'classnames';
import { HeaderBurgerProps } from './types';
import { FC } from 'react';

export const HeaderBurger: FC<HeaderBurgerProps> = ({ menuIsActive, onClick }) => {
   return (
      <div
         className={cn(styles.header_burger, { [styles.header_burger__active]: menuIsActive })}
         onClick={() => onClick()}>
         <span></span>
      </div>
   );
};
