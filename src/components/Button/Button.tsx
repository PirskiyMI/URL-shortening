import styles from './styles/Button.module.scss';
import { FC } from 'react';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ type, children, onClick, radius = 30 }) => {
   return (
      <button
         type={type}
         className={styles.button}
         onClick={onClick}
         style={{ borderRadius: `${radius}px` }}>
         {children}
      </button>
   );
};
