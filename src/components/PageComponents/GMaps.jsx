import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

export default function GMaps() {
  return (
    <div className="flex flex-col gap-4 max-sm:items-center">
      <div className="bg-[#D9D9D9] cursor-pointer  w-96 h-48 rounded-[24px] hover:rounded-md transition-all duration-200 flex items-center justify-center">
        <h1 className="text-black font-bold"> Maps</h1>
      </div>
      <span className="text-[18px] px-2">
        1328/1. Sk. No:18 D:9 <br /> Yunus Emre, 34260 Sultangazi/İstanbul
        <br />
        info@sondype.com
      </span>
    </div>
  )
}
