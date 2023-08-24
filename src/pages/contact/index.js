import React from 'react'
import RootLayout from '@/app/layout'
import GMaps from '@/components/PageComponents/GMaps'
import MainContainer from '@/components/UI/MainContainer'

export default function index() {
  return (
    <RootLayout>
      <MainContainer>
        <div className="mt-16">
          <GMaps />
        </div>
      </MainContainer>
    </RootLayout>
  )
}
