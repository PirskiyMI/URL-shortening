import { ReactComponent as FacebookIcon } from './../../../assets/images/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from './../../../assets/images/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from './../../../assets/images/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from './../../../assets/images/icon-instagram.svg';

export const data = {
   columns: [
      {
         id: 1,
         title: 'features',
         links: [
            { id: 1, title: 'link shortening', path: '#' },
            { id: 2, title: 'branded links', path: '#' },
            { id: 3, title: 'analytics', path: '#' },
         ],
      },
      {
         id: 2,
         title: 'resources',
         links: [
            { id: 1, title: 'blog', path: '#' },
            { id: 2, title: 'developers', path: '#' },
            { id: 3, title: 'support', path: '#' },
         ],
      },
      {
         id: 3,
         title: 'company',
         links: [
            { id: 1, title: 'about', path: '#' },
            { id: 2, title: 'our team', path: '#' },
            { id: 3, title: 'careers', path: '#' },
            { id: 4, title: 'contact', path: '#' },
         ],
      },
   ],
   socials: [
      { id: 1, icon: FacebookIcon, alt: 'Facebook' },
      { id: 2, icon: TwitterIcon, alt: 'Twitter' },
      { id: 3, icon: PinterestIcon, alt: 'Pinterest' },
      { id: 4, icon: InstagramIcon, alt: 'Instagram' },
   ]
}
