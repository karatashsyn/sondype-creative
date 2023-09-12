/* eslint-disable @next/next/no-img-element */
import React, { use, useEffect, useRef } from 'react'
import RootLayout from '@/app/layout'
import useGetBlog from '@/hooks/useGetBlog'
import MainContainer from '@/components/UI/MainContainer'
import useTextPortion from '@/hooks/useTextPortion'
import { useRouter } from 'next/router'
import useWindow from '@/hooks/useWindow'
import LoadingBar from '@/components/UI/Effects/LoadingBar'
export default function Index() {
  const router = useRouter()
  const slug = router.asPath.split('/')[2].toString()
  const { firstPortion } = useTextPortion()
  const { blog, loading } = useGetBlog(slug)
  const { windowSize } = useWindow()
  return (
    <RootLayout>
      <MainContainer>
        <div className="w-full max-lg:pt-8">
          <div className="w-full flex max-lg:flex-col justify-between gap-8  lg:h-[440px] ">
            {loading ? (
              <div className="w-full flex flex-col gap-2 lg:hidden">
                <div className="w-full h-8 bg-[rgb(36,36,36)] loading"></div>
                <div className="w-1/2 h-8 bg-[rgb(36,36,36)] loading"></div>
              </div>
            ) : (
              <h1 className=" text-[32px] lg:hidden font-bold leading-none fade-in-fast">
                {blog?.title}
              </h1>
            )}
            <div className=" left-0 min-w-[64%] h-full overflow-hidden">
              {loading ? (
                <div className="w-full h-full max-h-[440px] max-w-[%100] bg-[rgb(36,36,36)] loading"></div>
              ) : (
                <img
                  src={blog?.images[0] ?? ''}
                  alt="Blog"
                  className=" fade-in-fast w-full h-full max-h-[440px] max-w-[%100]  object-cover object-center"
                />
              )}
            </div>
            <div className="flex flex-col w-full h-full justify-between py-1">
              {loading ? (
                <>
                  <div className="w-full flex flex-col gap-2 max-lg:hidden">
                    <div className="w-full h-8 bg-[rgb(36,36,36)] loading"></div>
                    <div className="w-1/2 h-8 bg-[rgb(36,36,36)] loading"></div>
                  </div>
                  <div className="w-full h-full ">
                    <div className="w-full flex flex-col gap-2 mt-8">
                      <LoadingBar />
                      <LoadingBar />
                      <LoadingBar />
                      <LoadingBar />
                      <LoadingBar />
                      <LoadingBar classname={'!w-[75%]'} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h1 className=" text-[32px] max-lg:hidden font-bold leading-none fade-in-fast">
                    {blog?.title}
                  </h1>
                  <article className="max-lg:hidden fade-in-fast">
                    {blog?.article
                      .split(' ')
                      .slice(0, firstPortion)
                      .join(' ')
                      .split('<newline>')
                      .map((part, i) => {
                        return (
                          <>
                            <span key={i}>{part}</span>
                            <br />
                            <br />
                          </>
                        )
                      })}
                  </article>
                </>
              )}
              <></>
            </div>
          </div>
          {/* Second part */}
          <div className="w-full justify-between gap-8 mt-8 mb-12">
            {loading ? (
              <div className="right-box max-lg:hidden object-cover object-center float-right bg-[rgb(32,32,32)] loading "></div>
            ) : (
              blog?.images[1] && (
                <img
                  src={blog?.images[1] ?? ''}
                  alt="Blog"
                  className="fade-in-fast right-img max-lg:hidden object-cover object-center float-right"
                />
              )
            )}

            <div className=" justify-between py-1 max-sm:text-center">
              {loading ? (
                <div className="flex flex-col gap-2">
                  <LoadingBar />
                  <LoadingBar />
                  <LoadingBar />
                  <LoadingBar />
                  <LoadingBar />
                  <LoadingBar />
                  <LoadingBar />
                  <LoadingBar />
                  <LoadingBar classname={'!w-[75%]'} />
                </div>
              ) : windowSize > 1024 ? (
                <>
                  <p className="fade-in-fast">
                    {blog?.article
                      .split(' ')
                      .slice(firstPortion, blog?.article.split(' ').length)
                      .join(' ')
                      .split('<newline>')
                      .map((part, i) => {
                        return (
                          <>
                            <span key={i}>{part}</span>
                            <br />
                            <br />
                          </>
                        )
                      })}
                  </p>
                </>
              ) : (
                <p className="fade-in-fast">{blog?.article}</p>
              )}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <img
              src={'/' + blog?.avatar + '.png'}
              className="w-12 h-12 rounded-full"
              alt=""
            />
            <div className="flex flex-col text-[12px] gap-[2px] leading-none text-[rgb(220,220,220)]">
              <span>{blog?.writer}</span>
              <span>İçerik Editörü</span>
              <span>info@sondype.com</span>
            </div>
          </div>
        </div>
      </MainContainer>
    </RootLayout>
  )
}
