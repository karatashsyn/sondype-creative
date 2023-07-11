import Image from 'next/image'
import SondypeIcon from '@/components/UI/Icons/SondypeIcon'
import RootLayout from '@/app/layout'
import { Gravitas_One } from 'next/font/google'
import { useEffect, useRef } from 'react'
import useIntersectionRatio from '@/hooks/useIntersectionRatio'

const gravitasOne = Gravitas_One({ subsets: ['latin'], weight: '400' })
export default function Home() {
  const firstSectionRef = useRef(null)
  const secondSectionRef = useRef(null)
  const thirdSectionRef = useRef(null)
  const imgContainerRef = useRef(null)
  const { firstRatio, secondRatio, thirdRatio } = useIntersectionRatio({
    firstSectionRef,
    secondSectionRef,
    thirdSectionRef,
  })

  useEffect(() => {
    if (secondRatio < 50) {
      imgContainerRef.current.style =
        'scale:' + (secondRatio > 0 ? +secondRatio + 20 : 20) + '%;'
    }
  }, [secondRatio])

  return (
    <RootLayout>
      <div className="maincontainer">
        <section
          ref={firstSectionRef}
          className="first px-[196px] h-[100vh] pt-48"
        >
          <div className="">
            <h1 className="text-8xl font-bold">
              <span className={`${gravitasOne.className}`}>“</span>
              Büyük başarılar, küçük detaylarda{' '}
              <span className="secret">gizlidir</span>.
              <span className={gravitasOne.className}>”</span>
            </h1>
            <main className="mt-16 w-[48%]">
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
        </section>
        <section
          ref={secondSectionRef}
          className="second px-[196px] h-[200vh] bg-red-500"
        >
          <div className="flex w-full justify-center" ref={imgContainerRef}>
            <Image
              className={`eyeImage `}
              src={'/eye.png'}
              width={560}
              height={890}
              alt="Eye Image"
            />
          </div>
        </section>
        <section
          ref={thirdSectionRef}
          className="h-[100vh] bg-blue-500 third"
        ></section>
      </div>
    </RootLayout>
  )
}
