import React from 'react'
import SondypeIcon from '../UI/Icons/SondypeIcon'
import Link from 'next/link'
import MainButton from '../UI/Buttons/MainButton'
export default function Navbar() {
  return (
    <nav
      className="navbar fixed w-[100vw] px-[80px] flex justify-between py-7 gap-8 bg-black z-10"
      style={{ boxShadow: '2px 8px 16px 8px black' }}
    >
      <SondypeIcon />
      <ul className="flex gap-12 items-center">
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
