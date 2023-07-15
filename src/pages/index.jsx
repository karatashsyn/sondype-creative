import RootLayout from '@/app/layout'
import { Gravitas_One } from 'next/font/google'
import { useRef } from 'react'
import useIntersectionRatio from '@/hooks/useIntersectionRatio'
import useWindow from '@/hooks/useWindow'
import subRatioCalculator from '@/utils/subRatio'
import Image from 'next/image'
import CustomContainer from '@/components/UI/CustomContainer'
import eyeImage from './../../public/eye.png'
// import FirstLanding from '@/views/landingPage/firstLanding'
// import SecondLanding from '@/views/landingPage/secondLanding'
// import ThirdLanding from '@/views/landingPage/thirdLanding'
// import FourthLanding from '@/views/landingPage/fourthLanding'
const gravitasOne = Gravitas_One({ subsets: ['latin'], weight: '400' })
export default function Home() {
  const secondSectionRef = useRef(null)
  const thirdSectionRef = useRef(null)
  const fourthSectionRef = useRef(null)
  const { windowSize } = useWindow()
  const secondRatio = useIntersectionRatio(secondSectionRef)
  const thirdRatio = useIntersectionRatio(thirdSectionRef)
  const fourthRatio = useIntersectionRatio(fourthSectionRef)

  //Second Section Effects
  //0-38 Gozu scale et, 38-52 Bekle, 52-64 kuculterek sola kaydir ve soldaki buyuk span gelsin,
  //64-70 soldaki kucuk span, 70-82 sagdaki buyuk span, 82-100 sagdaki kucuk span
  //100-112 Transition

  //Third Section Effects, 0-25 Bekle, 12-48 Tv kuculterek soldaki yaziyi getir
  //48-58 Bekle, 58-94 Sagdaki yaziyi getir, 94-100 Bekle
  //100-112 Transition

  return (
    <RootLayout myVar={'Hello'}>
      <section className={`h-[100vh] first pt-48 min-h-max fade-in `}>
        <CustomContainer className="maincontainer">
          <div>
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

      <section
        ref={secondSectionRef}
        className="second h-[400vh]"
        style={{
          opacity: `${
            secondRatio >= 100 && secondRatio < 124
              ? 84 - subRatioCalculator(secondRatio, 100, 124)
              : ''
          }%`,
        }}
      >
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
                    src={eyeImage}
                    unoptimized
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
      </section>

      <section
        ref={thirdSectionRef}
        className="h-[400vh] third "
        style={{
          opacity: `${100 - subRatioCalculator(thirdRatio, 100, 125) * 2}%`,
        }}
      >
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
      </section>
      <section ref={fourthSectionRef} className="h-[15s0vh] fourth ">
        <CustomContainer>
          <div className="w-full h-[75vh] flex items-start justify-center sticky top-[25vh]">
            <div className="h-[75vh] w-full  flex justify-center items-start relative ">
              <div
                className={`motifContainer relative transition-all duration-700 ${
                  fourthRatio >= 52 ? '-translate-y-[30%] scale-50' : ''
                }`}
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
