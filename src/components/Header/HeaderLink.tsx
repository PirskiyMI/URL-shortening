import styles from './styles/HeaderLink.module.scss';
import { HeaderLinkProps } from './types';

export const HeaderLink = ({ address, title }: HeaderLinkProps) => {
   return (
      <li className={styles.header_item}>
         <a href={address}>{title}</a>
      </li>
   );
};
