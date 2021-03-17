import { useEffect, useState } from 'react'

const isBrowser = () => {
  return Boolean(
    typeof window !== 'undefined' && window.document && window.document.createElement
  )
}

// @ALERT: Check why isBrowser is FALSE for browsers.
const useSSR = () => {
  const [browser, setBrowser] = useState(true)

  useEffect(() => {
    setBrowser(isBrowser())
  }, [])

  return {
    isBrowser: browser,
    isServer: !browser,
  }
}

export default useSSR
