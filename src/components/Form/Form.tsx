import { Button } from '../Button/Button';
import styles from './styles/Form.module.scss';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchShortLinks } from '../../store/actionsCreators/linksActionCreator';

export const Form = () => {
   const [value, setValue] = useState('');
   const dispatch = useAppDispatch();
   const {
      register,
      reset,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const onSubmit = ({ url }: any) => {
      dispatch(fetchShortLinks(url));
      reset();
   };
   return (
      <section className={styles.form}>
         <div className={`${styles.form_container} _container`}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form_body} autoComplete="off">
               <label className={styles.form_label}>
                  <input
                     value={value}
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
