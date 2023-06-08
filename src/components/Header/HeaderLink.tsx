import styles from './styles/HeaderLink.module.scss';
import { HeaderLinkProps } from './types';
import { FC } from 'react';

export const HeaderLink: FC<HeaderLinkProps> = ({ address, title }) => {
   return (
      <li className={styles.header_item}>
         <a href={address}>{title}</a>
      </li>
   );
};
