import firebaseApp from '@/FirebaseApp'
import './../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
