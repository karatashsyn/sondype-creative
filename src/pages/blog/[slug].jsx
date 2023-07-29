/* eslint-disable @next/next/no-img-element */
import React, { use, useEffect, useRef } from 'react'
import RootLayout from '@/app/layout'
import useGetBlog from '@/hooks/useGetBlog'
import MainContainer from '@/components/UI/MainContainer'
import useTextPortion from '@/hooks/useTextPortion'
import { useRouter } from 'next/router'
export default function Index() {
  const router = useRouter()
  const slug = router.asPath.split('/')[2].toString()
  const { firstPortion } = useTextPortion()
  const { blog, loading } = useGetBlog(slug)

  return (
    <RootLayout>
      <MainContainer>
        {blog ? (
          <div className="  w-full  ">
            <div className="w-full flex justify-between gap-8  h-[440px]  ">
              <div className=" left-0 min-w-[64%] h-full overflow-hidden">
                <img
                  src={blog?.images[0] ?? ''}
                  alt="Blog"
                  className="w-full h-full max-w-[%100]  object-cover object-center"
                />
              </div>
              <div className="flex flex-col h-full justify-between py-1">
                <h1 className="text-[32px] font-bold leading-none">
                  {/* {blog.title} */}
                  Palms are sweaty, knees weak, arms are heavy
                </h1>

                <article>
                  {blog.main.split(' ').slice(0, firstPortion).join(' ')}
                </article>
              </div>
            </div>
          </div>
        ) : loading ? (
          <h1 className="w-full text-center text-[42px]">Loading</h1>
        ) : (
          <h1 className="w-full text-center font-bold text-[32px] translate-y-12">
            Sorry, this blog is not available anymore...
          </h1>
        )}
      </MainContainer>
    </RootLayout>
  )
}
