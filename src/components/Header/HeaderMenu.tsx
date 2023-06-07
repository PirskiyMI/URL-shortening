import styles from './styles/HeaderMenu.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useResize } from '../../hooks/useResize';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import { Button } from '../Button/Button';
import { HeaderNav } from './HeaderNav';
import { HeaderMenuProps } from './types';
import { setLoginModal, setRegistrationModal } from './../../store/slices/modalSlice';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../store/slices/userSlice';

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

export const HeaderMenu = ({ menuIsActive }: HeaderMenuProps) => {
   const { width } = useResize();
   const { isAuth } = useAuth();
   const dispatch = useAppDispatch();

   const logoutHandler = () => {
      dispatch(removeUser())
   };

   return (
      <>
         {width > 700 && (
            <div className={styles.header_menu}>
               <HeaderNav />
               {isAuth ? <Button type="button" onClick={logoutHandler}>Logout</Button> : <HeaderAuth />}
            </div>
         )}
         {width <= 700 && (
            <AnimatePresence>
               {menuIsActive && (
                  <motion.div
                     initial={{ x: '-60%', opacity: 0 }}
                     animate={{ x: '-50%', opacity: 1 }}
                     exit={{ x: '-60%', opacity: 0 }}
                     className={styles.header_menu}>
                     <HeaderNav />
                     {isAuth ? <div>Logout</div> : <HeaderAuth />}
                  </motion.div>
               )}
            </AnimatePresence>
         )}
      </>
   );
};
