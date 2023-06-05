export interface ButtonProps {
   type: 'button' | 'submit' | 'reset';
   radius: number;
   onClick?: () => void;
   children: React.ReactNode;
}
