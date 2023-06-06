import { FC } from 'react';
import styles from './Modal.module.scss';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setLoginModal, setRegistrationModal } from '../../store/slices/modalSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AnimatePresence, motion } from 'framer-motion';

interface ModalProps {
   isActive: boolean;
   children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ isActive, children }) => {
   const dispatch = useAppDispatch();
   const { loginModal, registrationModal } = useAppSelector((state) => state.modalReducer);

   return (
      <AnimatePresence>
         {isActive && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className={styles.modal}
               onClick={(e: any) => {
                  if (e.target.classList.contains(`${styles.modal}`) && loginModal) {
                     dispatch(setLoginModal(false));
                  } else if (e.target.classList.contains(`${styles.modal}`) && registrationModal) {
                     dispatch(setRegistrationModal(false));
                  }
               }}>
               <motion.div
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  exit={{ x: -10 }}
                  className={styles.modal_body}>
                  {children}
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};
