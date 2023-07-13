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
  const eyeContainerRef = useRef(null)
  const firstContentRef = useRef(null)
  const leftContainerRef = useRef(null)
  const leftSmallSpanRef = useRef(null)
  const rightContainerRef = useRef(null)
  const rightSmallSpanRef = useRef(null)
  const tvContainerRef = useRef(null)
  const thirdLeftRef = useRef(null)
  const thirdRightRef = useRef(null)
  const { windowSize } = useWindow()
  const { firstRatio, secondRatio, thirdRatio } = useIntersectionRatio({
    firstSectionRef,
    secondSectionRef,
    thirdSectionRef,
  })

  //Second Section Effects
  //0-38 Gozu scale et
  //38-52 Bekle
  //52-64 kuculterek sola kaydir ve soldaki buyuk span gelsin
  //64-70 soldaki kucuk span
  //70-82 sagdaki buyuk span
  //82-88 sagdaki kucuk span
  //88-100 Opacity 0

  useEffect(() => {
    if (secondRatio >= 0 && secondRatio < 38) {
      eyeContainerRef.current.style =
        'scale:' + (+secondRatio * 1.2 + 20) + '%;'
    }
    if (secondRatio >= 52 && secondRatio < 64) {
      const eye = eyeContainerRef.current
      const leftBig = leftContainerRef.current

      let eyeStyle = `scale: ${117.6 - +secondRatio}%;`
      eyeStyle += ` transform:translateX(${52 - +secondRatio * 1.2}px); `
      eye.style = eyeStyle

      let leftBigStyle =
        'transform:translateY(' +
        (70 - ((+secondRatio - 52) / 12) * 70).toFixed(2) +
        'vh);'
      leftBig.style = leftBigStyle
    }
    if (secondRatio >= 64 && secondRatio < 70) {
      const leftSmall = leftSmallSpanRef.current

      let leftSmallStyle = 'opacity:' + ((+secondRatio - 64) / 6) * 100 + '%;'
      leftSmall.style = leftSmallStyle
    }
    if (secondRatio >= 70 && secondRatio < 82) {
      const rightBig = rightContainerRef.current
      let rightBigStyle =
        'transform:translateY(' +
        (70 - ((+secondRatio - 70) / 12) * 70).toFixed(2) +
        'vh);'
      rightBig.style = rightBigStyle
    }
    if (secondRatio >= 82 && secondRatio < 88) {
      const rightSmall = rightSmallSpanRef.current
      let rightSmallStyle = 'opacity:' + ((+secondRatio - 82) / 6) * 100 + '%;'
      rightSmall.style = rightSmallStyle
    }
    if (secondRatio >= 88 && secondRatio < 100) {
      secondSectionRef.current.style =
        'opacity:' + (100 - ((+secondRatio - 88) / 12) * 100) + '%'
      thirdSectionRef.current.style = `transform:translateY(-${
        ((+secondRatio - 88) / 12) * 100
      }vh)`
    }
    if (secondRatio >= 100) {
    }
  }, [secondRatio])

  //Third Section Effects
  //0-12 Bekle
  //6-30 Tv kuculterek soldaki yaziyi getir
  //30-54 Sagaki yaziyi getir
  //54-66 Bekle
  //66-100 Opacity 0 ve alttaki sectionu getir

  useEffect(() => {
    if (thirdRatio >= 0 && thirdRatio < 12) {
    }
    if (thirdRatio >= 6 && thirdRatio < 30) {
      const leftSpan = thirdLeftRef.current
      const tvContainer = tvContainerRef.current
      const subRatio = ((+thirdRatio - 6) / 24) * 100
      let tvContainerStyle = 'scale:' + (100 - +subRatio / 2).toFixed(1) + '%;'

      let leftSpanStyle = 'opacity:' + (+subRatio).toFixed(1) + '%;'
      tvContainer.style = tvContainerStyle
      leftSpan.style = leftSpanStyle
    }
    if (thirdRatio >= 30 && thirdRatio < 54) {
      const rightSpan = thirdRightRef.current
      const subRatio = ((+thirdRatio - 30) / 24) * 100
      let rightSpanStyle = 'opacity:' + (+subRatio).toFixed(1) + '%;'
      rightSpan.style = rightSpanStyle
    }
    if (thirdRatio >= 54 && thirdRatio < 66) {
    }
    if (thirdRatio >= 66 && thirdRatio < 100) {
    }
  }, [thirdRatio])

  return (
    <RootLayout>
      <section
        className={`h-[100vh] first pt-48 min-h-max fade-in`}
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
      <section ref={secondSectionRef} className="second h-[200vh]">
        <CustomContainer>
          <div className="w-full h-[100vh] sticky top-0 ">
            <div className="w-full relative h-full -translate-y-12">
              <div
                className="absolute top-[50%] translate-y-[70vh]"
                ref={leftContainerRef}
              >
                <h3 className="text-[90px] leading-none">
                  Başarının <br />
                  anahtarı
                </h3>
                <div
                  className="w-full text-center mt-2 opacity-0 "
                  ref={leftSmallSpanRef}
                >
                  <span className={`${gravitasOne.className}`}>“</span>
                  <span>Bilinen Gerçekler</span>
                  <span className={gravitasOne.className}>”</span>
                </div>
              </div>

              <div
                className=" flex w-[100%] justify-center transition-transform duration-[1s] fade-in "
                ref={eyeContainerRef}
              >
                <Image
                  className={`eyeImage `}
                  src={'/eye.png'}
                  width={600}
                  height={600}
                  alt="Eye Image"
                />
              </div>

              <div
                className="absolute top-[50%] right-0 translate-y-[70vh]"
                ref={rightContainerRef}
              >
                <h3 className=" text-[90px] leading-none">
                  İnsanların <br />
                  Bakışları
                </h3>
                <div
                  className="w-full text-center mt-2 opacity-0"
                  ref={rightSmallSpanRef}
                >
                  <span className={`${gravitasOne.className} `}>“</span>
                  <span>görülemeyen algılar</span>
                  <span className={gravitasOne.className}>”</span>
                </div>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
      <section ref={thirdSectionRef} className="h-[300vh] third">
        <CustomContainer>
          <div className="sticky top-[100vh] h-[100vh]">
            <div className=" h-full flex justify-between items-center ">
              <div
                className="text-[64px] leading-none min-w-max opacity-0"
                ref={thirdLeftRef}
              >
                <span className="line-through">Eskimek</span> <br />
                <span className="underline">eskiye</span> göre <br />{' '}
                <span>daha kolay.</span>
              </div>

              <div className="" ref={tvContainerRef}>
                <Image
                  className={`tvImage`}
                  src={'/tv.png'}
                  width={420}
                  height={420}
                  alt="Tv Image"
                />
              </div>
              <div
                className="text-end text-[64px] leading-none min-w-max opacity-0"
                ref={thirdRightRef}
              >
                <span className="">Çağı Yakala</span> <br />
                <span className="">Geride Kalma.</span>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    </RootLayout>
  )
}
