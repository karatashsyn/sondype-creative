import React, { useEffect, useState } from 'react'

export default function useIntersectionRatio({
  firstSectionRef,
  secondSectionRef,
  thirdSectionRef,
}) {
  const [firstRatio, setFirstRatio] = useState(0)
  const [secondRatio, setSecondRatio] = useState(0)
  const [thirdRatio, setThirdRatio] = useState(0)

  useEffect(() => {
    const arrangeIntersectionRatios = () => {
      const scrollBottom = window.scrollY + window.innerHeight
      const firstResult =
        ((scrollBottom - firstSectionRef.current.offsetTop) /
          firstSectionRef.current.offsetHeight) *
        100

      const secondResult =
        ((scrollBottom - secondSectionRef.current.offsetTop) /
          secondSectionRef.current.offsetHeight) *
        100

      const thirdResult =
        ((scrollBottom - thirdSectionRef.current.offsetTop) /
          thirdSectionRef.current.offsetHeight) *
        100

      setFirstRatio(firstResult >= 0 ? firstResult : 0)
      setSecondRatio(secondResult >= 0 ? secondResult : 0)
      setThirdRatio(thirdResult >= 0 ? thirdResult : 0)
    }

    window.addEventListener('scroll', arrangeIntersectionRatios)

    //Setting states

    return () => window.removeEventListener('scroll', arrangeIntersectionRatios)
  }, [firstSectionRef, secondSectionRef, thirdSectionRef])

  return { firstRatio, secondRatio, thirdRatio }
}
