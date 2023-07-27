import React, { use, useEffect, useMemo, useState } from 'react'
import SondypeIcon from '../UI/Icons/SondypeIcon'
import Link from 'next/link'
import MainButton from '../UI/Buttons/MainButton'
import HamburgerMenu from '../UI/Icons/HamburgerIcon'
import useWindow from '@/hooks/useWindow'
import { useRouter } from 'next/router'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { windowSize } = useWindow()
  const { pathname } = useRouter()
  const currentPath = useMemo(() => pathname.split('/')[1], [pathname])

  useEffect(() => {
    if (windowSize > 768) {
      setIsOpen(false)
    }
  }, [windowSize])
  return (
    <nav
      className={`navbar fixed left-0 right-0 w-[100vw]lg:px-[80px] px-[24px] flex justify-between md:pt-7 pt-3 pb-2 gap-8 bg-black z-50`}
      style={{ boxShadow: '2px 8px 16px 8px black' }}
    >
      <div
        onClick={() => {
          setIsOpen(false)
        }}
        className={`fixed inset-0 ${
          isOpen ? 'bg-black opacity-75' : ''
        } sm:hidden sm:pointer-events-none ${isOpen ? '' : 'hidden'}`}
      ></div>
      <Link href={'/'} className="cursor-pointer">
        <div className="w-[200px] md:w-[240px]">
          <SondypeIcon />
        </div>
      </Link>
      <div
        className="sm:hidden z-50 cursor-pointer"
        onClick={() => {
          setIsOpen((val) => !val)
        }}
      >
        <HamburgerMenu />
      </div>
      <ul
        className={`flex gap-12 items-center max-sm:fixed max-sm:left-0 max-sm:right-0 max-sm:top-0 max-sm:flex-col  duration-200 max-sm:overflow-hidden max-sm:bg-gray-900 z-40 ${
          isOpen ? 'max-sm:h-[70vh] max-sm:pt-[80px]' : 'max-sm:h-0'
        }`}
      >
        <Link href={'/'}>
          <li
            className={`text-[15px] max-sm:font-bold  ${
              !currentPath.length ? 'activeLink' : ''
            }`}
          >
            Anasayfa
          </li>
        </Link>
        <Link href={'/contact'}>
          <li
            className={`text-[15px] max-sm:font-bold  ${
              currentPath === 'contact' ? 'activeLink' : ''
            }`}
          >
            İletişim
          </li>
        </Link>

        <Link href={'/aboutUs'}>
          <li
            className={`text-[15px] max-sm:font-bold  ${
              currentPath === 'aboutUs' ? 'activeLink' : ''
            }`}
          >
            Hakkımızda
          </li>
        </Link>
        <Link href={'/blog'}>
          <li
            className={`text-[15px] max-sm:font-bold  ${
              currentPath === 'blog' ? 'activeLink' : ''
            }`}
          >
            Blog
          </li>
        </Link>
      </ul>
    </nav>
  )
}
