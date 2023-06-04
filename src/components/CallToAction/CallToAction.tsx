import styles from './styles/CallToAction.module.scss';
import { Button } from '../Button/Button';

export const CallToAction = () => {
   return (
      <section className={styles.call}>
         <div className={styles.call_body}>
            <h2 className={styles.call_title}>Boost your links today</h2>
            <Button>get started</Button>
         </div>
      </section>
   );
};
