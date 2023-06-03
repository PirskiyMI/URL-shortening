import styles from './Button.module.scss';
import { ButtonProps } from './types';

export const Button = ({ children, onClick }: ButtonProps) => {
   return (
      <button type="button" className={styles.button} onClick={onClick}>
         {children}
      </button>
   );
};
