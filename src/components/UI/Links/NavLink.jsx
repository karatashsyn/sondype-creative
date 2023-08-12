import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function NavLink({ name, to }) {
  const { pathname } = useRouter()
  const currentPath = pathname.split('/')[1]
  useEffect(() => {}, [currentPath, to])
  return (
    <Link
      href={'/' + to}
      className="max-sm:w-3/4 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:border-b-[1px] max-sm:border-[rgb(80,80,80)] max-sm:pb-6"
    >
      <li
        className={`text-[15px]  max-sm:font-bold cursor-pointer  ${
          currentPath === to
            ? 'font-extrabold !text-white underline underline-offset-2 '
            : ''
        }`}
      >
        {name}
      </li>
    </Link>
  )
}
