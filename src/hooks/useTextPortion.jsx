import React, { useEffect, useState } from 'react'
import useWindow from './useWindow'
export default function useTextDivider() {
  const { windowSize } = useWindow()
  const [firstPortion, setFirstPortion] = useState(0)

  useEffect(() => {
    if (windowSize > 1460) {
      setFirstPortion(140)
    } else if (windowSize > 1380) {
      setFirstPortion(128)
    } else if (windowSize > 1260) {
      setFirstPortion(120)
    } else if (windowSize > 1128) {
      setFirstPortion(100)
    } else if (windowSize > 820) {
      setFirstPortion(76)
    } else if (windowSize > 768) {
      setFirstPortion(64)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize])
  return { firstPortion }
}
