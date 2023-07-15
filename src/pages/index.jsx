import Image from 'next/image'
import SondypeIcon from '@/components/UI/Icons/SondypeIcon'
import RootLayout from '@/app/layout'
import { Gravitas_One } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'
import useIntersectionRatio from '@/hooks/useIntersectionRatio'
import useWindow from '@/hooks/useWindow'
import CustomContainer from '@/components/UI/CustomContainer'

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
  const fourthSectionRef = useRef(null)
  const secondContentRef = useRef(null)
  const motifContainerRef = useRef(null)
  const { windowSize } = useWindow()
  const { firstRatio, secondRatio, thirdRatio, fourthRatio } =
    useIntersectionRatio({
      firstSectionRef,
      secondSectionRef,
      thirdSectionRef,
      fourthSectionRef,
    })

  //Second Section Effects
  //0-38 Gozu scale et
  //38-52 Bekle
  //52-64 kuculterek sola kaydir ve soldaki buyuk span gelsin
  //64-70 soldaki kucuk span
  //70-82 sagdaki buyuk span
  //82-100 sagdaki kucuk span
  //100-112 Transition

  useEffect(() => {
    console.log(windowSize)
  }, [windowSize])

  useEffect(() => {
    if (secondRatio < 100) {
      secondContentRef.current.style = `position:auto;`
    }
    if (secondRatio >= 0 && secondRatio < 38) {
      eyeContainerRef.current.style = 'scale:' + (+secondRatio + 20) + '%;'
    }
    if (secondRatio >= 52 && secondRatio < 64) {
      const eye = eyeContainerRef.current
      const leftBig = leftContainerRef.current
      let eyeStyle = `scale: ${110 - +secondRatio}%;`
      if (windowSize > 760) {
        eyeStyle += ` transform:translateX(${52 - +secondRatio * 1.2}px); `
      }
      eye.style = eyeStyle

      let leftBigStyle
      if (windowSize > 760) {
        leftBigStyle =
          'bottom:' + -(50 - ((+secondRatio - 52) / 12) * 80).toFixed(2) + '%;'
      } else {
        leftBigStyle = `opacity:${(((secondRatio - 52) / 12) * 100).toFixed(
          1
        )}%;`
      }
      console.log(leftBigStyle)

      leftBig.style = leftBigStyle
    }
    if (secondRatio >= 64 && secondRatio < 70) {
      const leftSmall = leftSmallSpanRef.current

      let leftSmallStyle = 'opacity:' + ((+secondRatio - 64) / 6) * 100 + '%;'
      leftSmall.style = leftSmallStyle
    }
    if (secondRatio >= 70 && secondRatio < 82) {
      const rightBig = rightContainerRef.current
      let rightBigStyle

      if (windowSize > 760) {
        rightBigStyle =
          'bottom:' + -(50 - ((+secondRatio - 70) / 12) * 80).toFixed(2) + '%;'
      } else {
        rightBigStyle = ` opacity:${(((secondRatio - 70) / 12) * 100).toFixed(
          1
        )}%;`
      }
      rightBig.style = rightBigStyle
    }
    if (secondRatio >= 82 && secondRatio < 100) {
      const rightSmall = rightSmallSpanRef.current
      const subRatio = ((+secondRatio - 82) / 18) * 100
      let rightSmallStyle = 'opacity:' + subRatio + '%;'
      rightSmall.style = rightSmallStyle
    }

    if (secondRatio >= 100 && secondRatio < 124) {
      const subRatio = ((+secondRatio - 100) / 24) * 100
      secondContentRef.current.style = `opacity:${100 - subRatio}%;`
    }
  }, [secondRatio, windowSize])

  //Third Section Effects
  //0-25 Bekle
  //12-48 Tv kuculterek soldaki yaziyi getir
  //48-58 Bekle
  //58-94 Sagdaki yaziyi getir
  //94-100 Bekle
  //100-112 Transition

  useEffect(() => {
    console.log('third:' + thirdRatio)
    if (thirdRatio >= 0 && thirdRatio < 25) {
    }
    if (thirdRatio >= 25 && thirdRatio < 52) {
      const subRatio = ((+thirdRatio - 25) / 27) * 100
      const leftSpan = thirdLeftRef.current
      const tvContainer = tvContainerRef.current
      let tvContainerStyle = 'scale:' + (100 - +subRatio / 2).toFixed(1) + '%;'
      let leftSpanStyle = 'opacity:' + (+subRatio).toFixed(1) + '%;'
      tvContainer.style = tvContainerStyle
      leftSpan.style = leftSpanStyle
    }
    if (thirdRatio >= 52 && thirdRatio < 58) {
    }
    if (thirdRatio >= 58 && thirdRatio < 95) {
      const subRatio = ((+thirdRatio - 58) / 27) * 100
      const rightSpan = thirdRightRef.current
      let rightSpanStyle = 'opacity:' + (+subRatio).toFixed(1) + '%;'
      rightSpan.style = rightSpanStyle
    }
    if (thirdRatio >= 95 && thirdRatio < 100) {
    }

    if (thirdRatio >= 100 && thirdRatio < 125) {
      const subRatio = (((+thirdRatio - 100) / 25) * 100).toFixed(1)
      console.log('subRatio:' + subRatio)
      thirdSectionRef.current.style = 'opacity:' + (100 - subRatio * 2) + '%;'
    }
  }, [thirdRatio])

  useEffect(() => {
    console.log('fourth ' + fourthRatio)
    if (fourthRatio >= 52) {
      motifContainerRef.current.style = 'transform:translateY(-50%); scale:50%'
    } else {
      //Inline Ternarye cek
      motifContainerRef.current.style = 'transform:none;scale:1;'
    }
  }, [fourthRatio])

  return (
    <RootLayout myVar={'Hello'}>
      <section
        className={`h-[100vh] first pt-48 min-h-max fade-in`}
        ref={firstSectionRef}
      >
        <CustomContainer className="maincontainer">
          <div ref={firstContentRef}>
            <h1 className="lg:text-[6.2vw] md:text-start text-center md:text-6xl text-5xl leading-none .gilroyExtraBold">
              <span className={`${gravitasOne.className}`}>“</span>
              Büyük başarılar, küçük detaylarda{' '}
              <span className="secret">gizlidir</span>.
              <span className={gravitasOne.className}>”</span>
            </h1>
            <main className="mt-16 md:w-[540px] sm:text-[16px] text-[14px] max-sm:text-center">
              İstanbul’da kurulan{' '}
              <span className="font-extrabold text-[1.18rem] ">
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
      <section ref={secondSectionRef} className="second h-[400vh]">
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
            <div
              className={`w-full h-[100vh] sticky top-0`}
              ref={secondContentRef}
            >
              <div className="w-full h-full flex justify-center md:flex-row max-md:flex-col max-md:justify-center items-center">
                <div
                  className={`absolute max-md:top-[96px] md:bottom-[-100%] md:left-0 max-md:left-6  max-md:opacity-0 `}
                  ref={leftContainerRef}
                >
                  <h3 className="xl:text-[96px] lg:text-[72px] md:text-[58px] text-[40px] leading-none">
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
                  className="flex justify-center  transition-transform duration-[1s] fade-in "
                  ref={eyeContainerRef}
                >
                  <Image
                    className={`eyeImage lg:w-[600px] md:w-[280px]`}
                    src={'/eye.png'}
                    width={windowSize > 760 ? 800 : 240}
                    height={windowSize > 760 ? 800 : 240}
                    alt="Eye Image"
                  />
                </div>

                <div
                  className="absolute max-md:bottom-[52px] md:right-0 max-md:right-6 md:bottom-[-100%] max-md:opacity-0 "
                  ref={rightContainerRef}
                >
                  <h3 className=" xl:text-[90px] lg:text-[72px] md:text-[58px] text-[40px] leading-none ">
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
          </div>
        </div>
      </section>
      <section ref={thirdSectionRef} className="h-[400vh] third ">
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
                  className="xl:text-[64px] lg:text-[48px] text-[36px] leading-none min-w-max opacity-0"
                  ref={thirdLeftRef}
                >
                  <span className="line-through">Eskimek</span> <br />
                  <span className="underline">eskiye</span> göre <br />{' '}
                  <span>daha kolay.</span>
                </div>

                <div className="" ref={tvContainerRef}>
                  <Image
                    className="tvImage"
                    src={'/tv.png'}
                    width={420}
                    height={300}
                    alt="Tv Image"
                  />
                </div>
                <div
                  className="text-end xl:text-[64px] lg:text-[48px] text-[36px] leading-none min-w-max opacity-0"
                  ref={thirdRightRef}
                >
                  <span className="">Çağı Yakala</span> <br />
                  <span className="">Geride Kalma.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={fourthSectionRef} className="h-[150vh] fourth ">
        <CustomContainer>
          <div className="w-full h-[75vh] flex items-start justify-center sticky top-[25vh]">
            <div className="h-[75vh] w-full  flex justify-center items-start relative ">
              <div
                className="motifContainer relative transition-all duration-1000"
                ref={motifContainerRef}
              >
                <Image
                  width={900}
                  height={900}
                  src={'/motif.png'}
                  alt="Motif"
                />
                <div
                  className={`w-[100%] flex justify-center fixed  transition-all duration-1000  ${
                    fourthRatio >= 52 ? 'bottom-[-60%]' : 'bottom-[-200vh]'
                  }`}
                >
                  <a href="#" className={`text-center text-[48px]`}>
                    info@sondype.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    </RootLayout>
  )
}
