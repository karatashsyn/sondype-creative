import React from 'react'
import Image from 'next/image'
export default function BlogCard({ blog }) {
  return (
    <div className=" flex flex-col justify-between max-w-[400px] h-[432px] cursor-pointer hover:bg-gray-900 transition-colors duration-200 rounded-[5px] ">
      <div>
        <img
          className="w-full h-[220px] object-cover mb-[25px] rounded-[5px]"
          src={blog.img}
          alt="Blog Image"
        />
        <div className="h-[72px] ">
          <h1 className="px-1 text-[28px] max-sm:text-[24px] font-medium leading-none">
            {blog.title}
          </h1>
        </div>
      </div>
      <span className="px-1 py-2 text-[16px] text-gray-300">12/7/22</span>
    </div>
  )
}
