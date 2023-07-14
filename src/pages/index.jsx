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
    if (secondRatio < 100) {
      secondContentRef.current.style = `position:auto;`
    }
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
    if (secondRatio >= 82 && secondRatio < 100) {
      const rightSmall = rightSmallSpanRef.current
      const subRatio = ((+secondRatio - 82) / 18) * 100
      let rightSmallStyle = 'opacity:' + subRatio + '%;'
      rightSmall.style = rightSmallStyle
    }

    if (secondRatio >= 100 && secondRatio < 112) {
      const subRatio = ((+secondRatio - 100) / 12) * 100
      secondContentRef.current.style = `opacity:${100 - subRatio}%;`
    }
  }, [secondRatio])

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
      <section ref={secondSectionRef} className="second h-[400vh]">
        <div
          className={`flex w-[100%] h-full justify-center  md:px-16 sm:px-8 px-4  ${
            secondRatio >= 100 ? ' fixedContainer' : ''
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
              <div className="w-full relative h-full -translate-y-12">
                <div
                  className="absolute left:0 top-[50%] translate-y-[70vh]"
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
          </div>
        </div>
      </section>
      <section ref={thirdSectionRef} className="h-[400vh] third ">
        <div
          className={`flex w-[100%] h-full justify-center  md:px-16 sm:px-8 px-4  ${
            thirdRatio >= 100 ? ' fixedContainer' : ''
          }`}
        >
          <div className="w-[100%] h-full max-w-6xl">
            {' '}
            <div className="sticky top-0 h-[100vh]">
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
                <div className="">
                  <a
                    href="#"
                    className={`text-center text-[48px] absolute left-0 right-0 transition-all duration-1000 ${
                      fourthRatio >= 52 ? 'bottom-[-50%]' : 'bottom-[-200vh]'
                    } `}
                  >
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
