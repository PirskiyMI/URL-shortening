import { HeaderLinkProps } from './types';

export const HeaderLink = ({ address, title }: HeaderLinkProps) => {
   return (
      <li>
         <a href={address}>
            {title}
         </a>
      </li>
   );
};
