import React from 'react'
import CustomContainer from '@/components/UI/CustomContainer'
import Image from 'next/image'
export default function FourthLanding({ fourthRatio }) {
  return (
    <CustomContainer>
      <div className="w-full h-[75vh] flex items-start justify-center sticky top-[25vh]">
        <div className="h-[75vh] w-full  flex justify-center items-start relative ">
          <div
            className={`motifContainer relative transition-all duration-700 ${
              fourthRatio >= 52 ? '-translate-y-[30%] scale-50' : ''
            }`}
          >
            <Image width={900} height={900} src={'/motif.png'} alt="Motif" />
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
  )
}
