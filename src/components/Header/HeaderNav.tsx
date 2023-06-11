import styles from './styles/HeaderNav.module.scss';
import { FC } from 'react';
import { HeaderLink } from './HeaderLink';

const linksAddresses = [
   { id: 1, address: '#', title: 'Features' },
   { id: 2, address: '#', title: 'Pricing' },
   { id: 3, address: '#', title: 'Resources' },
];

export const HeaderNav: FC = () => {
   return (
      <nav className={styles.header_nav}>
         <ul className={styles.header_list}>
            {linksAddresses.map((el) => (
               <HeaderLink key={el.id} address={el.address} title={el.title} />
            ))}
         </ul>
      </nav>
   );
};
