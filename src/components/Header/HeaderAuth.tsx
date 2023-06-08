import styles from './styles/HeaderAuth.module.scss'

import { setLoginModal, setRegistrationModal } from './../../store/slices/modalSlice';
import { Button } from '../Button/Button';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const HeaderAuth = () => {
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
