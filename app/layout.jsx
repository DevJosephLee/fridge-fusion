import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Arvo } from 'next/font/google'
import Nav from './_components/nav'

const arvo = Arvo({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'FridgeFusion'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={arvo.className}>
        <Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
