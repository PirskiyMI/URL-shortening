import styles from './styles/HeaderMenu.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useResize } from '../../hooks/useResize';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import { Button } from '../Button/Button';
import { HeaderNav } from './HeaderNav';
import { HeaderMenuProps } from './types';
import { setLoginModal, setRegistrationModal } from './../../store/slices/modalSlice';

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

   return (
      <>
         {width > 700 && (
            <div className={styles.header_menu}>
               <HeaderNav />
               <HeaderAuth />
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
                     <HeaderAuth />
                  </motion.div>
               )}
            </AnimatePresence>
         )}
      </>
   );
};
