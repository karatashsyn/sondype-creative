import React from 'react'
import SondypeIcon from '../UI/Icons/SondypeIcon'
import Link from 'next/link'


export default function Navbar() {
  return (
    
    <nav className='fixed w-[100vw] px-[80px] flex justify-between pt-14'>
        <SondypeIcon/>
        <ul className='flex gap-[48px]'>
         
            <Link href={'/contact'}>
              <li>contact</li>
              </Link>
      
          <Link href={'/aboutUs'}>
            <li>About Us</li>
            </Link>
            <Link href={'/blog'}>
            <li>Blog</li>
            </Link>
        </ul>
    </nav>
  )
}
