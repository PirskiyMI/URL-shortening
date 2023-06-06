import { FC } from 'react';
import styles from './Modal.module.scss';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setLoginModal, setRegistrationModal } from '../../store/slices/modalSlice';
import { useAppSelector } from '../../hooks/useAppSelector';

interface ModalProps {
   children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ children }) => {
   const dispatch = useAppDispatch();
   const { loginModal, registrationModal } = useAppSelector((state) => state.modalReducer);

   return (
      <div
         className={styles.modal}
         onClick={(e: any) => {
            if (e.target.classList.contains(`${styles.modal}`) && loginModal) {
               dispatch(setLoginModal(false));
            } else if (e.target.classList.contains(`${styles.modal}`) && registrationModal) {
               dispatch(setRegistrationModal(false));
            }
         }}>
         <div className={styles.modal_body}>{children}</div>
      </div>
   );
};
