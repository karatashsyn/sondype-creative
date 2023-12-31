import Navbar from '@/components/layout/Navbar'
import Head from 'next/head'
import Footer from '@/components/layout/Footer'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Sondype Creative</title>
      </Head>
      <Navbar />
      <div className="flex flex-col justify-between min-h-[100vh]">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
