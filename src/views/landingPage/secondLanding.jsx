import React from 'react'
import Image from 'next/image'
import subRatioCalculator from '@/utils/subRatio'
import { Gravitas_One } from 'next/font/google'
const gravitasOne = Gravitas_One({ subsets: ['latin'], weight: '400' })
export default function SecondLanding({ secondRatio, windowSize }) {
  return (
    <div
      className={`flex w-[100%] h-full justify-center  md:px-16 sm:px-8 px-4  ${
        secondRatio >= 95 ? ' fixedContainer' : ''
      }`}
    >
      <div
        className={`w-[100%] h-full max-w-6xl ${
          secondRatio >= 100 && secondRatio < 112 ? 'relative' : ''
        }`}
      >
        {' '}
        <div className={`w-full h-[100vh] sticky top-0`}>
          <div className="w-full h-full flex justify-center md:flex-row max-md:flex-col max-md:justify-center items-center">
            <div
              className={`leftContainer absolute max-md:top-[96px] md:bottom-[-100%] md:left-0 max-md:left-6  max-md:opacity-0 `}
              style={{
                bottom: `${
                  windowSize >= 768 && secondRatio >= 52 && secondRatio < 64
                    ? +-(50 - ((+secondRatio - 52) / 12) * 80).toFixed(2)
                    : ''
                }%`,
                opacity: `${
                  windowSize < 768 && secondRatio >= 52 && secondRatio < 64
                    ? ((secondRatio - 52) / 12) * 100
                    : ''
                }%`,
              }}
            >
              <h3 className="xl:text-[96px] lg:text-[72px] md:text-[58px] text-[40px] leading-none">
                Başarının <br />
                anahtarı
              </h3>
              <div
                className="leftSpan w-full text-center mt-2 opacity-0 "
                style={{
                  opacity: `${
                    secondRatio >= 64 && secondRatio < 70
                      ? ((+secondRatio - 64) / 6) * 100
                      : ''
                  }%`,
                }}
              >
                <span className={`${gravitasOne.className}`}>“</span>
                <span>Bilinen Gerçekler</span>
                <span className={gravitasOne.className}>”</span>
              </div>
            </div>

            <div
              className="eyeContainer flex justify-center  transition-transform duration-[1s] fade-in "
              style={{
                scale: `${
                  secondRatio < 38
                    ? +secondRatio + 20
                    : secondRatio >= 38 && secondRatio < 52
                    ? 58
                    : secondRatio >= 52 && secondRatio <= 64
                    ? 110 - +secondRatio
                    : 46
                }%`,
                transform: `translateX(${
                  windowSize > 768 && secondRatio >= 52 ? -56 : 0
                }px)`,
                opacity: `${
                  windowSize <= 768 && secondRatio < 64
                    ? subRatioCalculator(secondRatio, 52, 64)
                    : 1
                }%`,
              }}
            >
              <Image
                className={`eyeImage lg:w-[600px] md:w-[280px]`}
                src={'/eye.png'}
                width={windowSize > 768 ? 800 : 240}
                height={windowSize > 768 ? 800 : 240}
                alt="Eye Image"
              />
            </div>

            <div
              className="rightContainer absolute max-md:bottom-[52px] md:right-0 max-md:right-6 md:bottom-[-100%] max-md:opacity-0 "
              style={{
                bottom: `${
                  windowSize >= 768 && secondRatio >= 70 && secondRatio < 82
                    ? +-(50 - ((+secondRatio - 70) / 12) * 80).toFixed(2)
                    : ''
                }%`,
                opacity: `${
                  windowSize < 768 && secondRatio >= 70 && secondRatio < 82
                    ? ((secondRatio - 70) / 12) * 100
                    : ''
                }%`,
              }}
            >
              <h3 className=" xl:text-[90px] lg:text-[72px] md:text-[58px] text-[40px] leading-none ">
                İnsanların <br />
                Bakışları
              </h3>
              <div
                className="rightSpan w-full text-center mt-2 opacity-0"
                style={{
                  opacity: `${
                    secondRatio >= 82 && secondRatio < 100
                      ? ((+secondRatio - 82) / 18) * 100
                      : ''
                  }%`,
                }}
              >
                <span className={`${gravitasOne.className} `}>“</span>
                <span>görülemeyen algılar</span>
                <span className={gravitasOne.className}>”</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
