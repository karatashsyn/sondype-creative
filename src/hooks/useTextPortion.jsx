import React, { useEffect, useState } from 'react'
import useWindow from './useWindow'
export default function useTextDivider() {
  const { windowSize } = useWindow()
  const [firstPortion, setFirstPortion] = useState(0)

  useEffect(() => {
    if (windowSize > 1460) {
      setFirstPortion(126)
    } else if (windowSize > 1380) {
      setFirstPortion(114)
    } else if (windowSize > 1260) {
      setFirstPortion(106)
    } else if (windowSize > 1128) {
      setFirstPortion(86)
    } else if (windowSize > 820) {
      setFirstPortion(64)
    } else if (windowSize > 768) {
      setFirstPortion(50)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize])
  return { firstPortion }
}
