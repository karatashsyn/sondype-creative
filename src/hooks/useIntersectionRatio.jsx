import React, { useEffect, useState } from 'react'

export default function useIntersectionRatio(sectionRef) {
  const [ratio, setRatio] = useState(0)

  useEffect(() => {
    const handleRatio = () => {
      const scrollBottom = window.scrollY + window.innerHeight

      const result =
        ((scrollBottom - sectionRef?.current?.offsetTop) /
          sectionRef.current?.offsetHeight) *
        100

      setRatio(result >= 0 ? result.toFixed(3) : 0)
    }

    window.addEventListener('scroll', handleRatio)

    return () => window.removeEventListener('scroll', handleRatio)
  }, [sectionRef])

  return ratio
}
