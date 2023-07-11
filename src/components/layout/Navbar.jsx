import React from 'react'
import SondypeIcon from '../UI/Icons/SondypeIcon'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-[100vw] px-[80px] flex justify-between pt-14 gap-8">
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
