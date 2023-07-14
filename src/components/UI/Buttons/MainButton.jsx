import React from 'react'

export default function MainButton({ text }) {
  return (
    <button
      className="w-16 h-4 p-2 bg-blue-300 rounded-[4px]"
      type="button"
      value={text}
    >
      {text}
    </button>
  )
}
