import React from 'react'
import LoadingBar from './LoadingBar'

export default function LoadingBlogCard() {
  return (
    <div
      className={`p-2 flex flex-col justify-between mx-auto w-full max-w-[360px] h-[432px] cursor-pointer bg-[rgb(2,2,2)] transition-colors duration-200 rounded-[5px]`}
    >
      <div>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <div className="w-full h-[220px] mb-[25px] rounded-[5px] bg-[rgb(36,36,36)] loading"></div>
        <div className="h-[72px] ">
          <LoadingBar classname={'h-8 bg-[rgb(36,36,36)] w-32'} />
        </div>
      </div>
      <LoadingBar classname={'w-12'} />
    </div>
  )
}
