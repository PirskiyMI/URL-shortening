import styles from './styles/Form.module.scss';
import { FC } from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchShortLinks } from '../../store/actionsCreators/linksActionCreator';
import { Button } from '../Button/Button';

export const Form: FC = () => {
   const isLoading = useAppSelector((state) => state.linkReducer.isLoading);
   const [value, setValue] = useState('');
   const dispatch = useAppDispatch();
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const onSubmit = ({ url }: any) => {
      dispatch(fetchShortLinks(url));
      setValue('');
   };
   return (
      <section className={styles.form}>
         <div className={`${styles.form_container} _container`}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form_body} autoComplete="off">
               <label className={styles.form_label}>
                  <input
                     value={value}
                     disabled={isLoading}
                     type="url"
                     className={cn(styles.form_field, { [styles.form_field__error]: errors.url })}
                     placeholder="Shorten a link here..."
                     {...register('url', {
                        required: 'Enter url',
                        pattern: {
                           value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
                           message: 'Enter a valid url',
                        },
                        onChange(e) {
                           setValue(e.target.value);
                        },
                     })}
                  />
                  <span className={styles.form_error}>{errors.url && `${errors.url.message}`}</span>
               </label>
               <Button radius={10} type="submit">
                  shorten it!
               </Button>
            </form>
         </div>
      </section>
   );
};
