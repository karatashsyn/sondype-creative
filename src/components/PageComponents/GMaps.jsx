/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function GMaps() {
  return (
    <div className="flex flex-col gap-4 max-sm:items-center">
      <a
        className="w-min"
        href="https://www.google.com/maps/place/Yunus+Emre,+1328%2F1.+Sk.,+34260+Sultangazi%2F%C4%B0stanbul/@41.0934499,28.894937,15.25z/data=!4m6!3m5!1s0x14cab1abf3b7efc7:0x844c1203fb00e079!8m2!3d41.0934522!4d28.9007333!16s%2Fg%2F1tnpbrkj?entry=ttu"
        target="_blank"
      >
        <div className="relative bg-[#D9D9D9] cursor-pointer  w-96 h-48 rounded-[24px]  overflow-hidden transition-all duration-200 flex items-center justify-center">
          <div className="transition-opacity duration-200 absolute inset-0 opacity-0 hover:opacity-50 bg-black"></div>
          <img alt="Maps" src="/maps.png" />
        </div>
      </a>
      <span className="text-[18px] px-2">
        1328/1. Sk. No:18 D:9 <br /> Yunus Emre, 34260 Sultangazi/İstanbul
        <br />
        info@sondype.com
      </span>
    </div>
  )
}
