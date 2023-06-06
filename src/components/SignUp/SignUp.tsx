import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthForm } from './../AuthForm/AuthForm';
import { setUser } from '../../store/slices/userSlice';

export const SignUp = () => {
   const dispatch = useAppDispatch();

   const handleSignUp = (email: string, password: string) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
         .then(({ user }) => {
            dispatch(setUser({ email: user.email, id: user.uid, token: user.accessToken }));
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
         });
   };

   return <AuthForm title='sign up' handleClick={handleSignUp} />;
};
