import React from 'react'
import CustomContainer from '@/components/UI/CustomContainer'
import { Gravitas_One } from 'next/font/google'
const gravitasOne = Gravitas_One({ subsets: ['latin'], weight: '400' })
export default function FirstLanding() {
  return (
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
          , dünya genelinde reklam ve stratejik konumlandırmayı, basit bir temel
          üzerine kurmuştur; En farklı, etkili ve güçlü çalışmalar ile
          insanların, ihtiyaç ve duygularını hedeflemektedir. Marka hedeflemesi
          ile insanların zihninde en makul ve en doğru yere sabitlenmesine
          odaklanır.
        </main>
      </div>
    </CustomContainer>
  )
}
