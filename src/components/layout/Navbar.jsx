import React from 'react'
import SondypeIcon from '../UI/Icons/SondypeIcon'
import Link from 'next/link'
import MainButton from '../UI/Buttons/MainButton'
export default function Navbar() {
  return (
    <nav
      className="navbar fixed left-0 right-0 w-[100vw] lg:px-[80px] px-[24px] flex justify-between md:pt-7 pt-3 pb-2 gap-8 bg-black z-10 "
      style={{ boxShadow: '2px 8px 16px 8px black' }}
    >
      <Link href={'/'} className="cursor-pointer">
        <SondypeIcon />
      </Link>
      <ul className="flex gap-12 items-center">
        <Link href={'/'}>
          <li className="text-[15px]">Anasayfa</li>
        </Link>
        <Link href={'/contact'}>
          <li className="text-[15px]">İletişim</li>
        </Link>

        <Link href={'/aboutUs'}>
          <li className="text-[15px]">Hakkımızda</li>
        </Link>
        <Link href={'/blog'}>
          <li className="text-[15px]">Blog</li>
        </Link>
      </ul>
    </nav>
  )
}
