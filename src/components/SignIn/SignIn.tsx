import { useAppDispatch } from '../../hooks/useAppDispatch';
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
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
         });
   };

   return <AuthForm title='sign in' handleClick={handleSignIn} />;
};
