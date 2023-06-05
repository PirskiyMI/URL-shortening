import { Button } from '../Button/Button';
import styles from './styles/Form.module.scss';

export const Form = () => {
   return (
      <section className={styles.form}>
         <div className={`${styles.form_container} _container`}>
            <form className={styles.form_body}>
               <input
                  type="text"
                  className={styles.form_input}
                  placeholder="Shorten a link here..."
               />
               <Button radius={10} type="submit">
                  shorten it!
               </Button>
            </form>
         </div>
      </section>
   );
};
