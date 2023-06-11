import { ReactComponent as LogoIcon } from './../../assets/images/logo.svg';
import { FC } from 'react';

interface LogoProps {
   color: string;
}

export const Logo: FC<LogoProps> = ({ color }) => {
   return (
      <a href="#">
         <LogoIcon style={{ fill: `${color}` }} />
      </a>
   );
};
