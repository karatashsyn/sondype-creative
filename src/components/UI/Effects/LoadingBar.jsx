import React from 'react'

export default function LoadingBar({ classname }) {
  return (
    <div className={`w-full h-4 bg-[rgb(24,24,24)] loading ${classname}`}></div>
  )
}
