import styles from './styles/HeaderLink.module.scss';
import { FC } from 'react';
import { HeaderLinkProps } from './types';

export const HeaderLink: FC<HeaderLinkProps> = ({ address, title }) => {
   return (
      <li className={styles.header_item}>
         <a href={address}>{title}</a>
      </li>
   );
};
