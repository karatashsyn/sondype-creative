import React, { useEffect, useState } from 'react'
import { getBlogs } from '@/db'

export default function useGetBlogs() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    getBlogs().then((res) => {
      setBlogs(res)
    })
  }, [])

  return blogs
}
