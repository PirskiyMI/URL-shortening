import styles from './styles/HeaderAuth.module.scss';
import { FC } from 'react';
import { setLoginModal, setRegistrationModal } from './../../store/slices/modalSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Button } from '../Button/Button';

export const HeaderAuth: FC = () => {
   const dispatch = useAppDispatch();

   return (
      <div className={styles.header_login}>
         <button
            type="button"
            className={styles.header_item}
            onClick={() => dispatch(setLoginModal(true))}>
            Login
         </button>
         <Button type="button" onClick={() => dispatch(setRegistrationModal(true))}>
            sign up
         </Button>
      </div>
   );
};
