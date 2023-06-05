import { ReactComponent as LogoIcon } from './../../assets/images/logo.svg';

interface LogoProps {
   color: string;
}

export const Logo = ({ color }: LogoProps) => {
   return (
      <a href="#">
         <LogoIcon style={{ fill: `${color}` }} />
      </a>
   );
};
