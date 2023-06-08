import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/HeaderMenu.module.scss';

import { useResize } from '../../hooks/useResize';
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import { removeUser } from '../../store/slices/userSlice';

import { HeaderMenuProps } from './types';

import { HeaderNav } from './HeaderNav';
import { HeaderAuth } from './HeaderAuth';
import { Button } from '../Button/Button';

export const HeaderMenu: FC<HeaderMenuProps> = ({ menuIsActive }) => {
   const { width } = useResize();
   const { isAuth } = useAuth();
   const dispatch = useAppDispatch();

   const logoutHandler = () => {
      dispatch(removeUser());
   };

   return (
      <>
         {width > 700 && (
            <div className={styles.header_menu}>
               <HeaderNav />
               {isAuth ? (
                  <Button type="button" onClick={logoutHandler}>
                     Logout
                  </Button>
               ) : (
                  <HeaderAuth />
               )}
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
