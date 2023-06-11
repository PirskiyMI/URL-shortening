import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './styles/Shorten.module.scss';
import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../Button/Button';
import cn from 'classnames';

export const Shorten: FC = () => {
   const [copied, setCopied] = useState<string | null>(null);
   const { links } = useAppSelector((state) => state.linkReducer);

   const copieToClipboard = (link: string) => {
      navigator.clipboard.writeText(link).then(() => {
         setCopied(link);
      });
   };

   if (links.length === 0) {
      return null;
   }

   return (
      <section className={styles.shorten}>
         <div className={`${styles.shorten_container} _container`}>
            {links.map((el) => (
               <AnimatePresence key={el.code}>
                  <motion.div
                     className={cn(styles.shorten_body, {
                        [styles.shorten_body__active]: copied === el['full_short_link'],
                     })}
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}>
                     <div className={styles.shorten_links}>
                        <span className={styles.shorten_link}>{el['original_link']}</span>
                        <span className={styles.shorten_link__short}>{el['full_short_link']}</span>
                     </div>
                     <Button
                        type="button"
                        radius={10}
                        onClick={() => copieToClipboard(el['full_short_link'])}>
                        {copied === el['full_short_link'] ? 'Copied!' : 'Copy'}
                     </Button>
                  </motion.div>
               </AnimatePresence>
            ))}
         </div>
      </section>
   );
};
