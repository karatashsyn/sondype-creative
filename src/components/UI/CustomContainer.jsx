import React from 'react'

export default function CustomContainer({ children }) {
  return (
    <div className="flex w-[100%] h-full justify-center  md:px-16 sm:px-8 px-4">
      <div className="w-[100%] h-full max-w-6xl">{children}</div>
    </div>
  )
}
