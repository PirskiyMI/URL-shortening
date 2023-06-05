export interface ISocial {
   id: number;
   icon: React.JSXElementConstructor<any>;
   alt: string;
}

export interface FooterSocialsProps {
   socials: ISocial[];
}

export interface ILink {
   id: number;
   title: string;
   path: string;
}

export interface FooterColumnProps {
   title: string;
   links: ILink[];
}
