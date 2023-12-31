import RootLayout from '@/app/layout'
import { Gravitas_One } from 'next/font/google'
import { useRef, useEffect } from 'react'
import useIntersectionRatio from '@/hooks/useIntersectionRatio'
import useWindow from '@/hooks/useWindow'
import subRatioCalculator from '@/utils/subRatio'
import Image from 'next/image'
import CustomContainer from '@/components/UI/CustomContainer'
import eyeImage from './../../public/eye.png'
import tvImage from './../../public/tv.png'
import motifImage from './../../public/motif.png'
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
  //0-38 Gozu scale et, 38-42 Bekle, 42-54 kuculterek sola kaydir ve soldaki buyuk span gelsin,
  //54-60 soldaki kucuk span, 60-72 sagdaki buyuk span, 72-90 sagdaki kucuk span
  //94-112 Transition

  //Third Section Effects, 0-25 Bekle, 12-48 Tv kuculterek soldaki yaziyi getir
  //48-58 Bekle, 58-94 Sagdaki yaziyi getir, 94-100 Bekle
  //100-112 Transition

  return (
    <RootLayout myVar={'Hello'}>
      <section className={`h-[100vh] first pt-48 min-h-max fade-in `}>
        <CustomContainer className="maincontainer">
          <div>
            <div className="w-full max-w ">
              <h1 className="xl:text-[100px] lg:text-[6.2vw] md:text-start text-center md:text-6xl text-5xl leading-none gilroyBold">
                <span className={`${gravitasOne.className}`}>“</span>
                Büyük başarılar, küçük detaylarda{' '}
                <span className="secret gilroyBold">gizlidir</span>.
                <span className={gravitasOne.className}>”</span>
              </h1>
            </div>
            <main className="mt-16 md:w-[540px] sm:text-[16px] text-[14px] max-sm:text-center">
              İstanbul’da kurulan{' '}
              <span className="text-[1.18rem] gilroyExtraBold ">
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
        className="second h-[300vh]"
        style={{
          opacity: `${
            secondRatio >= 90 && secondRatio < 124
              ? 92 - subRatioCalculator(secondRatio, 90, 124)
              : secondRatio >= 124
              ? '0'
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
              secondRatio >= 90 && secondRatio < 112 ? 'relative' : ''
            }`}
          >
            {' '}
            <div className={`w-full h-[100vh] sticky top-0`}>
              <div className="w-full h-full flex justify-center md:flex-row max-md:flex-col max-md:justify-center items-center">
                <div
                  className={`leftContainer absolute max-md:top-[96px] transition-transform duration-0 md:translate-y-[100vh]  md:left-0 max-md:left-6  max-md:opacity-0 `}
                  style={{
                    transform: `translate(0,${
                      windowSize >= 768 && secondRatio >= 42 && secondRatio < 54
                        ? +(
                            100 - subRatioCalculator(secondRatio, 42, 54)
                          ).toFixed(4)
                        : windowSize >= 768 && secondRatio >= 54
                        ? 0
                        : ''
                    }vh)`,
                    transitionDuration: `${secondRatio >= 54 ? '1s' : '0s'}`,
                    opacity: `${
                      windowSize < 768 && secondRatio < 54
                        ? subRatioCalculator(secondRatio, 42, 54)
                        : '100'
                    }%`,
                  }}
                >
                  <h3 className="xl:text-[96px] lg:text-[72px] md:text-[58px] text-[40px] leading-none gilroySemiBold">
                    Başarının <br />
                    anahtarı
                  </h3>
                  <div
                    className="leftSpan w-full text-center mt-2 opacity-0 "
                    style={{
                      opacity: `${
                        secondRatio >= 54 && secondRatio < 60
                          ? ((+secondRatio - 54) / 6) * 100
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
                        : secondRatio >= 38 && secondRatio < 42
                        ? 58
                        : secondRatio >= 42 && secondRatio <= 54
                        ? 100 - +secondRatio
                        : 46
                    }%`,
                    transform: `translateX(${
                      windowSize > 768 && secondRatio >= 42 ? -56 : 0
                    }px)`,
                    opacity: `${
                      windowSize <= 768 && secondRatio < 54
                        ? subRatioCalculator(secondRatio, 42, 54)
                        : 1
                    }%`,
                  }}
                >
                  <Image
                    className={`eyeImage lg:w-[600px] md:w-[280px]`}
                    src={eyeImage}
                    width={windowSize > 768 ? 800 : 240}
                    height={windowSize > 768 ? 800 : 240}
                    alt="Eye Image"
                    loading="eager"
                  />
                </div>

                <div
                  className="rightContainer absolute max-md:bottom-[52px]  transition-transform duration-0 md:right-0 max-md:right-6 md:translate-y-[100vh] max-md:opacity-0 "
                  style={{
                    transform: `translate(0,${
                      windowSize >= 768 && secondRatio >= 60 && secondRatio < 72
                        ? +(
                            100 - subRatioCalculator(secondRatio, 60, 72)
                          ).toFixed(4)
                        : windowSize >= 768 && secondRatio >= 72
                        ? 0
                        : ''
                    }vh)`,
                    transitionDuration: `${secondRatio >= 72 ? '1s' : '0s'}`,
                    opacity: `${
                      windowSize < 768 && secondRatio < 72
                        ? subRatioCalculator(secondRatio, 60, 72)
                        : '100'
                    }%`,
                  }}
                >
                  <h3 className=" xl:text-[90px] lg:text-[72px] md:text-[58px] text-[40px] leading-none gilroySemiBold">
                    İnsanların <br />
                    Bakışları
                  </h3>
                  <div
                    className="rightSpan w-full text-center mt-2 opacity-0"
                    style={{
                      opacity: `${
                        secondRatio >= 72 && secondRatio < 90
                          ? ((+secondRatio - 72) / 18) * 100
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
                  className="leftContainer xl:text-[64px] lg:text-[48px] text-[36px] leading-none min-w-max opacity-0  gilroyBold"
                  style={{
                    opacity: `${subRatioCalculator(thirdRatio, 25, 52)}%`,
                  }}
                >
                  <span className="line-through  gilroySemiBold">Eskimek</span>{' '}
                  <br />
                  <span className="underline  gilroySemiBold">eskiye</span>
                  <span className="gilroySemiBold"> göre</span> <br />{' '}
                  <span className=" gilroySemiBold">daha kolay.</span>
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
                    src={tvImage}
                    width={420}
                    height={300}
                    alt="Tv Image"
                    loading="eager"
                  />
                </div>
                <div
                  className="rightContainer text-end xl:text-[64px] lg:text-[48px] text-[36px] leading-none min-w-max opacity-0"
                  style={{
                    opacity: `${subRatioCalculator(thirdRatio, 58, 95)}%`,
                  }}
                >
                  <span className="gilroySemiBold">Çağı yakala</span> <br />
                  <span className="gilroySemiBold">geride kalma.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={fourthSectionRef} className="h-[70vh] fourth ">
        <CustomContainer>
          <div className="w-full h-[75vh] flex items-start justify-center sticky top-[25vh]">
            <div className="h-[75vh] w-full flex justify-center items-start ">
              <div
                className={`h-full motifContainer transition-all duration-700 relative ${
                  fourthRatio >= 90 ? 'scale-50' : ''
                }`}
              >
                <Image
                  width={900}
                  height={900}
                  src={motifImage}
                  alt="Motif"
                  loading="eager"
                />
                <div className={`w-[100%] flex justify-center  mt-12  `}>
                  <a
                    href="#"
                    className={`text-center text-[48px]  transition-all delay-500 absolute duration-1000
                       ${fourthRatio >= 90 ? 'opacity-1' : 'opacity-0'}`}
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
