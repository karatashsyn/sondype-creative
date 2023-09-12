import RootLayout from '@/app/layout'
import MainContainer from '@/components/UI/MainContainer'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <RootLayout>
      <MainContainer>
        <div className="pt-32 fadeIn">
          <p className="text-[40px] max-md:text-[24px] fade-in max-md:text-center">
            <span className="font-bold">Sondype Creative, </span>
            markaları doğru mevzuat uygulamaları, verimlilik artışı ve kalite
            iyileştirmesi gibi konularda yönlendirilerek, hedef müşterilere daha
            etkili bir şekilde ulaşmalarını sağlayan bir
            <span className="font-bold"> danışmanlık ajansıdır.</span>
          </p>
        </div>
      </MainContainer>
    </RootLayout>
  )
}
