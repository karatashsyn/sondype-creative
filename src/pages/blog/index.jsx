import React, { useMemo } from 'react'
import RootLayout from '@/app/layout'
import MainContainer from '@/components/UI/MainContainer'
import useGetBlogs from '@/hooks/useGetBlogs'
import BlogCard from '@/components/PageComponents/BlogCard'
import LoadingBlogCard from '@/components/UI/Effects/LoadingBlogCard'
export default function Index() {
  const { blogs, loading } = useGetBlogs()
  const fakeBlogsArray = useMemo(() => [1, 1, 1, 1, 1, 1, 1, 1], [])

  return (
    <RootLayout>
      <MainContainer>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-2 min-h-[70vh]">
          {loading ? (
            fakeBlogsArray.map((b, i) => <LoadingBlogCard key={i} />)
          ) : blogs?.length ? (
            blogs.map((b, i) => <BlogCard blog={b} key={i} />)
          ) : (
            <h1>Hiç İçerik Bulunamadı</h1>
          )}
        </div>
      </MainContainer>
    </RootLayout>
  )
}
