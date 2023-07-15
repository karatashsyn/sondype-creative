import RootLayout from '@/app/layout'
import { Gravitas_One } from 'next/font/google'
import { useRef } from 'react'
import useIntersectionRatio from '@/hooks/useIntersectionRatio'
import useWindow from '@/hooks/useWindow'
import subRatioCalculator from '@/utils/subRatio'
import FirstLanding from '@/views/landingPage/firstLanding'
import SecondLanding from '@/views/landingPage/secondLanding'
import ThirdLanding from '@/views/landingPage/thirdLanding'
import FourthLanding from '@/views/landingPage/fourthLanding'
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
        <FirstLanding />
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
        <SecondLanding secondRatio={secondRatio} windowSize={windowSize} />
      </section>

      <section
        ref={thirdSectionRef}
        className="h-[400vh] third "
        style={{
          opacity: `${100 - subRatioCalculator(thirdRatio, 100, 125) * 2}%`,
        }}
      >
        <ThirdLanding thirdRatio={thirdRatio} />
      </section>
      <section ref={fourthSectionRef} className="h-[15s0vh] fourth ">
        <FourthLanding fourthRatio={fourthRatio} />
      </section>
    </RootLayout>
  )
}
