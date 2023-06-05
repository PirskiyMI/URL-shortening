import styles from './Button.module.scss';
import { ButtonProps } from './types';

export const Button = ({ type, children, onClick, radius = 30 }: ButtonProps) => {
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
