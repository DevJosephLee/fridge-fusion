import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Arvo } from 'next/font/google';
import Nav from './_components/nav';

const arvo = Arvo({
  weight: '400',
  subsets: ['latin']
});

export const metadata = {
  title: 'FridgeFusion'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={arvo.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
};
