import styles from './styles/HeaderLink.module.scss';
import { HeaderLinkProps } from './types/types';

export const HeaderLink = ({ address, title }: HeaderLinkProps) => {
   return (
      <li className={styles.header_item}>
         <a href={address} className={styles.header_link}>
            {title}
         </a>
      </li>
   );
};
