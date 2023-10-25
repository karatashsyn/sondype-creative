import React, { useEffect, useState } from 'react'
import { getBlog } from '@/db'

export default function useGetBlog(slug) {
  const [loading, setLoading] = useState(true)
  const [blog, setBlog] = useState('')
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    getBlog(slug).then((res) => {
      setBlog(res)
      setLoading(false)
    })
  }, [slug])

  return { blog, loading, error }
}
