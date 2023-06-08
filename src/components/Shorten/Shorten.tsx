import { shortenApi } from '../../api/shortenApi';
import styles from './styles/Shorten.module.scss';
import { FC } from 'react';

export const Shorten: FC = () => {
   // const { data } = shortenApi.useFetchShortenLinkQuery(
   //    'https://react-hook-form.com/get-started#Handleerrors',
   // );
   //    console.log(data);
      

   const links = ['ccskrf 1', 'ccskrf 2', 'ccskrf 3', 'ccskrf 4'];

   if (links.length === 0) {
      return null;
   }

   return (
      <section className={styles.shorten}>
         <div className={`${styles.shorten_container} _container`}>
            {links.map((el) => (
               <div key={el} className={styles.shorten_body}>
                  {el}
               </div>
            ))}
         </div>
      </section>
   );
};
