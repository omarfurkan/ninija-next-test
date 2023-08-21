import Navbar from './components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'


const poppins = Poppins({ family: 'Poppins', weight: '500', subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
