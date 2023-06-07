import styles from './styles/AuthForm.module.scss';
import { FC, useState } from 'react';
import { Button } from '../Button/Button';
import { AuthFormProps } from './types';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { useAppSelector } from '../../hooks/useAppSelector';

export const AuthForm: FC<AuthFormProps> = ({ title, handleClick }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { error } = useAppSelector((state) => state.errorReducer);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data: any) => {
      handleClick(data.email, data.password);
   };

   return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} autoComplete="on">
         <label className={styles.form_label}>
            <input
               className={cn(styles.form_field, { [styles.form_field__error]: errors?.email })}
               type="email"
               placeholder="Email"
               value={email}
               {...register('email', {
                  required: 'Enter email',
                  onChange(e) {
                     setEmail(e.target.value);
                  },
               })}
            />
            <span className={styles.form_error}>{errors?.email && 'Enter email'}</span>
         </label>
         <label className={styles.form_label}>
            <input
               className={cn(styles.form_field, { [styles.form_field__error]: errors?.password })}
               type="password"
               placeholder="Password"
               value={password}
               {...register('password', {
                  required: 'Enter password',
                  onChange(e) {
                     setPassword(e.target.value);
                  },
               })}
            />
            <span className={styles.form_error}>{errors?.password && 'Enter password'}</span>
         </label>
         {error && <div style={{color: 'red'}}>{error}</div>}
         <Button type="submit">{title}</Button>
      </form>
   );
};
