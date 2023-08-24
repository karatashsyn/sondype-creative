import React from 'react'

export default function MainContainer({ children }) {
  return (
    <div className=" mx-auto lg:px-[80px] px-[24px] pt-[96px]  max-w-[1600px]">
      {children}
    </div>
  )
}
