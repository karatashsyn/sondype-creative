import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function NavLink({ name, to }) {
  const { pathname } = useRouter()
  const currentPath = pathname.split('/')[1]
  useEffect(() => {}, [currentPath, to])
  return (
    <Link href={'/' + to}>
      <li
        className={`text-[15px] max-sm:font-bold  ${
          currentPath === to
            ? 'font-extrabold !text-white underline underline-offset-2'
            : ''
        }`}
      >
        {name}
      </li>
    </Link>
  )
}
