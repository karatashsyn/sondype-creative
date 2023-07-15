import React, { useEffect, useState } from 'react'

export default function useIntersectionRatio({
  secondSectionRef,
  thirdSectionRef,
  fourthSectionRef,
}) {
  const [secondRatio, setSecondRatio] = useState(0)
  const [thirdRatio, setThirdRatio] = useState(0)
  const [fourthRatio, setFourthRatio] = useState(0)

  useEffect(() => {
    const arrangeIntersectionRatios = () => {
      const scrollBottom = window.scrollY + window.innerHeight

      const secondResult =
        ((scrollBottom - secondSectionRef.current.offsetTop) /
          secondSectionRef.current.offsetHeight) *
        100

      const thirdResult =
        ((scrollBottom - thirdSectionRef.current.offsetTop) /
          thirdSectionRef.current.offsetHeight) *
        100

      const fourthResult =
        ((scrollBottom - fourthSectionRef.current.offsetTop) /
          fourthSectionRef.current.offsetHeight) *
        100

      setSecondRatio(secondResult >= 0 ? secondResult.toFixed(3) : 0)
      setThirdRatio(thirdResult >= 0 ? thirdResult.toFixed(3) : 0)
      setFourthRatio(fourthResult >= 0 ? fourthResult.toFixed(3) : 0)
    }

    window.addEventListener('scroll', arrangeIntersectionRatios)

    return () => window.removeEventListener('scroll', arrangeIntersectionRatios)
  }, [secondSectionRef, thirdSectionRef, fourthSectionRef])

  return { secondRatio, thirdRatio, fourthRatio }
}
