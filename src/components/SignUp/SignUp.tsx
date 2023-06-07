import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from './../AuthForm/AuthForm';
import { setUser } from '../../store/slices/userSlice';
import { setRegistrationModal } from '../../store/slices/modalSlice';
import { setError } from '../../store/slices/authErrorSlice';

export const SignUp = () => {
   const dispatch = useAppDispatch();

   const handleSignUp = (email: string, password: string) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
         .then(({ user }) => {
            dispatch(setUser({ email: user.email, id: user.uid, token: user.accessToken }));
            dispatch(setRegistrationModal(false));
         })
         .catch((error) => {
            const errorMessage = error.message;
            if(errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
               dispatch(setError('Email already in use'))
            }
         });
   };

   return <AuthForm title="sign up" handleClick={handleSignUp} />;
};
