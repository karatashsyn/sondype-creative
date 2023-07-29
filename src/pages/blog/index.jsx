import React from 'react'
import RootLayout from '@/app/layout'
import MainContainer from '@/components/UI/MainContainer'
import useGetBlogs from '@/hooks/useGetBlogs'
import BlogCard from '@/components/PageComponents/BlogCard'
export default function Index() {
  const blogs = useGetBlogs()
  return (
    <RootLayout>
      <MainContainer>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-2 min-h-[70vh]">
          {blogs ? (
            blogs.map((b, i) => (
              <>
                <BlogCard blog={b} />
              </>
            ))
          ) : (
            <></>
          )}
        </div>
      </MainContainer>
    </RootLayout>
  )
}
