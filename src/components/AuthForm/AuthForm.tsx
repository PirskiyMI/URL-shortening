import { FC, useState } from 'react';
import styles from './AuthForm.module.scss';
import { Button } from '../Button/Button';

interface AuthFormProps {
   title: string;
   handleClick: (email: string, password: string) => void;
}

export const AuthForm: FC<AuthFormProps> = ({ title, handleClick }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   return (
      <div className={styles.form}>
         <input
            className={styles.form_field}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <input
            className={styles.form_field}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <Button type='submit' onClick={() => handleClick(email, password)}>{title}</Button>
      </div>
   );
};
