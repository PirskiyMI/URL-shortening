export interface HeaderLinkProps {
   address: string;
   title: string;
}
export interface HeaderMenuProps {
   menuIsActive: boolean;
}
export interface HeaderBurgerProps extends HeaderMenuProps {
   onClick: () => void;
}
