import React, { useEffect, useState } from 'react'
import { getBlogs } from '@/db'

export default function useGetBlogs() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    getBlogs().then((res) => {
      setLoading(false)
      setBlogs(res)
    })
  }, [])

  return { blogs, loading }
}
