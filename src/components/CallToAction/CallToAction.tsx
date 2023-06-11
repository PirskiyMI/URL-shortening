import styles from './styles/CallToAction.module.scss';
import { FC } from 'react';
import { Button } from '../Button/Button';

export const CallToAction: FC = () => {
   return (
      <section className={styles.call}>
         <div className={styles.call_body}>
            <h2 className={styles.call_title}>Boost your links today</h2>
            <Button type="button">get started</Button>
         </div>
      </section>
   );
};
