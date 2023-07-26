import React from 'react'
import RootLayout from '@/app/layout'
import MainContainer from '@/components/UI/MainContainer'
import useGetBlogs from '@/hooks/useGetBlogs'
import BlogCard from '@/components/PageComponents/BlogCard'
import CustomContainer from '@/components/UI/CustomContainer'
export default function Index() {
  const blogs = useGetBlogs()
  return (
    <RootLayout>
      <MainContainer>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-2 justify-center">
          {blogs ? (
            blogs.map((b, i) => (
              <div key={i}>
                <BlogCard blog={b} />
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </MainContainer>
    </RootLayout>
  )
}
