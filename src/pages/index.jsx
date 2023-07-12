import Image from 'next/image'
import SondypeIcon from '@/components/UI/Icons/SondypeIcon'
import RootLayout from '@/app/layout'
import { Gravitas_One } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'
import useIntersectionRatio from '@/hooks/useIntersectionRatio'
import useWindow from '@/hooks/useWindow'
import CustomContainer from '@/components/UI/Icons/CustomContainer'

const gravitasOne = Gravitas_One({ subsets: ['latin'], weight: '400' })
export default function Home() {
  const firstSectionRef = useRef(null)
  const secondSectionRef = useRef(null)
  const thirdSectionRef = useRef(null)
  const imgContainerRef = useRef(null)
  const firstContentRef = useRef(null)
  const { windowSize } = useWindow()
  const { firstRatio, secondRatio, thirdRatio } = useIntersectionRatio({
    firstSectionRef,
    secondSectionRef,
    thirdSectionRef,
  })

  useEffect(() => {
    if (secondRatio > 0 && secondRatio < 38) {
      imgContainerRef.current.style = 'scale:' + (+secondRatio * 2 + 20) + '%;'
    } else if (secondRatio >= 52 && secondRatio < 64) {
      imgContainerRef.current.style =
        'scale:' +
        (146 - +secondRatio) +
        '%;\n' +
        ` transform:translateX(${52 - +secondRatio * 2}px); `
    }
  }, [secondRatio])

  return (
    <RootLayout>
      <section
        className={`h-[100vh] first pt-48 min-h-max`}
        ref={firstSectionRef}
      >
        <CustomContainer className="maincontainer">
          <div ref={firstContentRef}>
            <h1 className="lg:text-[6.2vw] md:text-start text-center md:text-6xl text-5xl leading-none font-bold">
              <span className={`${gravitasOne.className}`}>“</span>
              Büyük başarılar, küçük detaylarda{' '}
              <span className="secret">gizlidir</span>.
              <span className={gravitasOne.className}>”</span>
            </h1>
            <main className="mt-16 md:w-[540px] sm:text-[16px] text-[14px]">
              İstanbul’da kurulan{' '}
              <span className="font-extrabold text-[1.18rem]">
                {' '}
                Sondype Creative
              </span>
              , dünya genelinde reklam ve stratejik konumlandırmayı, basit bir
              temel üzerine kurmuştur; En farklı, etkili ve güçlü çalışmalar ile
              insanların, ihtiyaç ve duygularını hedeflemektedir. Marka
              hedeflemesi ile insanların zihninde en makul ve en doğru yere
              sabitlenmesine odaklanır.
            </main>
          </div>
        </CustomContainer>
      </section>
      <section ref={secondSectionRef} className="second h-[1600px] bg-red-500 ">
        <CustomContainer>
          <div className="w-full bg-red sticky top-0 ">
            <div
              className="flex w-[100%] justify-center transition-transform duration-[1s]"
              ref={imgContainerRef}
            >
              <Image
                className={`eyeImage `}
                src={'/eye.png'}
                width={600}
                height={600}
                alt="Eye Image"
              />
            </div>
          </div>
        </CustomContainer>
      </section>
      <section
        ref={thirdSectionRef}
        className="h-[100vh] bg-blue-500 third"
      ></section>
    </RootLayout>
  )
}
