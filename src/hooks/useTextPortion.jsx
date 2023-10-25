import React, { useEffect, useState } from 'react'
import useWindow from './useWindow'
export default function useTextDivider(numOfNewLines) {
  const { windowSize } = useWindow()
  const [firstPortion, setFirstPortion] = useState(0)
  useEffect(() => {
    if (windowSize > 1460) {
      setFirstPortion(112)
    } else if (windowSize > 1380) {
      setFirstPortion(100)
    } else if (windowSize > 1260) {
      setFirstPortion(96)
    } else if (windowSize > 1128) {
      setFirstPortion(72)
    } else if (windowSize > 820) {
      setFirstPortion(64)
    } else if (windowSize > 768) {
      setFirstPortion(50)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize])
  return {
    firstPortion:
      numOfNewLines >= 4
        ? firstPortion - 8 * 4
        : firstPortion - 8 * numOfNewLines,
  }
}
