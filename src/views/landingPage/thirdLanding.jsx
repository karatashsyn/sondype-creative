import React from 'react'
import Image from 'next/image'
import subRatioCalculator from '@/utils/subRatio'
export default function thirdLanding({ thirdRatio, windowSize }) {
  return (
    <div
      className={`flex w-[100%] h-full justify-center  md:px-16 sm:px-8 px-4  ${
        thirdRatio >= 90 ? ' fixedContainer' : ''
      }`}
    >
      <div className="w-[100%] h-full max-w-6xl">
        {' '}
        <div className="sticky top-0 h-[100vh]">
          <div className=" h-full flex max-md:flex-col  max-md:justify-center max-md:gap-2 justify-between items-center ">
            <div
              className="leftContainer xl:text-[64px] lg:text-[48px] text-[36px] leading-none min-w-max opacity-0"
              style={{
                opacity: `${subRatioCalculator(thirdRatio, 25, 52)}%`,
              }}
            >
              <span className="line-through">Eskimek</span> <br />
              <span className="underline">eskiye</span> göre <br />{' '}
              <span>daha kolay.</span>
            </div>

            <div
              style={{
                scale: `${
                  subRatioCalculator(thirdRatio, 25, 52) <= 100
                    ? (
                        100 -
                        subRatioCalculator(thirdRatio, 25, 52) / 2
                      ).toFixed(1)
                    : 50
                }%`,
              }}
            >
              <Image
                className="tvImage"
                src={'/tv.png'}
                width={420}
                height={300}
                alt="Tv Image"
              />
            </div>
            <div
              className="rightContainer text-end xl:text-[64px] lg:text-[48px] text-[36px] leading-none min-w-max opacity-0"
              style={{
                opacity: `${subRatioCalculator(thirdRatio, 58, 95)}%`,
              }}
            >
              <span className="">Çağı Yakala</span> <br />
              <span className="">Geride Kalma.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
