import { useAppDispatch } from '../../hooks/useAppDispatch';
import { removeError, setError } from '../../store/slices/authErrorSlice';
import { setLoginModal } from '../../store/slices/modalSlice';
import { setUser } from '../../store/slices/userSlice';
import { AuthForm } from '../AuthForm/AuthForm';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const SignIn = () => {
   const dispatch = useAppDispatch();
   const handleSignIn = (email: string, password: string) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
         .then(({ user }) => {
            dispatch(setUser({ id: user.uid, email: user.email, token: user.accessToken }));
            dispatch(removeError());
            dispatch(setLoginModal(false));
         })
         .catch((error) => {
            let errorMessage = error.message;
            if(errorMessage === 'Firebase: Error (auth/user-not-found).') {
               errorMessage = 'User not found'
            } else {
               errorMessage = 'Wrong password'
            }
            dispatch(setError(`${errorMessage}`));
         });
   };

   return <AuthForm title="sign in" handleClick={handleSignIn} />;
};
