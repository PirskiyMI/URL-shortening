import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './styles/Shorten.module.scss';
import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../Button/Button';

export const Shorten: FC = () => {
   const { links } = useAppSelector((state) => state.linkReducer);
   console.log(links);

   if (links.length === 0) {
      return null;
   }

   return (
      <section className={styles.shorten}>
         <div className={`${styles.shorten_container} _container`}>
            {links.map((el) => (
               <AnimatePresence key={el.code}>
                  <motion.div
                     className={styles.shorten_body}
                     initial={{ opacity: 0, x: -10}}
                     animate={{ opacity: 1, x: 0}}
                     >
                     <span className={styles.shorten_link}>{el['original_link']}</span>
                     <span className={styles.shorten_link__short}>{el['full_short_link']}</span>
                     <Button type='button' radius={10}>Copy</Button>
                  </motion.div>
               </AnimatePresence>
            ))}
         </div>
      </section>
   );
};
