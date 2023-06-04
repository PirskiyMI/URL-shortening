import styles from './styles/HeaderMenu.module.scss';

import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '../Button/Button';
import { HeaderNav } from './HeaderNav';
import { HeaderMenuProps } from './types';
import { useResize } from '../../hooks/useResize';

export const HeaderMenu = ({ menuIsActive }: HeaderMenuProps) => {
   const { width } = useResize();

   return (
      <>
         {width > 700 && (
            <div className={styles.header_menu}>
               <HeaderNav />
               <div className={styles.header_login}>
                  <button className={styles.header_item}>Login</button>
                  <Button>sign up</Button>
               </div>
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
                     <div className={styles.header_login}>
                        <button className={styles.header_item}>Login</button>
                        <Button>sign up</Button>
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         )}
      </>
   );
};
