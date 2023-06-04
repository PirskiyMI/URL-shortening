import styles from './styles/HeaderBurger.module.scss';
import cn from 'classnames';
import { HeaderBurgerProps } from './types';

export const HeaderBurger = ({ menuIsActive, onClick }: HeaderBurgerProps) => {
   return (
      <div
         className={cn(styles.header_burger, { [styles.header_burger__active]: menuIsActive })}
         onClick={() => onClick()}>
         <span></span>
      </div>
   );
};
