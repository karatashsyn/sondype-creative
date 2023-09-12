import React from 'react'
import { useRouter } from 'next/router'
export default function BlogCard({ blog }) {
  const router = useRouter()

  return (
    <div
      className={`p-2 flex flex-col justify-between mx-auto w-full max-w-[360px] h-[432px] cursor-pointer bg-gray-950 transition-colors duration-200 rounded-[5px] fade-in-fast`}
      onClick={() => router.push(`/blogs/${blog.slug}`)}
    >
      <div>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-[220px] object-cover mb-[25px] rounded-[5px]"
          src={blog.thumbnail}
          alt="Blog Image"
          loading="lazy"
        />
        <div className="h-[72px] ">
          <h1 className="text-[28px] max-sm:text-[24px] font-medium leading-none">
            {blog.title}
          </h1>
        </div>
      </div>
      <span className="px-1 py-2 text-[16px] text-gray-300">{blog.date}</span>
    </div>
  )
}
