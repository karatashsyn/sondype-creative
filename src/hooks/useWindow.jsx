import React, { useEffect } from 'react'
import { useState } from 'react'
export default function useWindow() {
  const [isFullScreen, setIsFullScreen] = useState(true)
  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    setWindowSize(window.innerWidth)
  }, [])
  useEffect(() => {
    function handleFullScreenChange() {
      setWindowSize(window.innerWidth)
      setIsFullScreen(document.fullscreenElement)
    }

    window.addEventListener('resize', handleFullScreenChange)

    return () => {
      window.removeEventListener('resize', handleFullScreenChange)
    }
  }, [])
  return { isFullScreen, windowSize }
}
