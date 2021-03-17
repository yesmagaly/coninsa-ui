import { useEffect, useState } from 'react'
import useSSR from './use-ssr'
import { getId } from './collections'

const createElement = id => {
  const el = document.createElement('div')
  el.setAttribute('id', id)
  return el
}

const usePortal = (selectId = getId()) => {
  const id = `zeit-ui-${selectId}`

  const { isBrowser } = useSSR()

  const [elSnapshot, setElSnapshot] = useState(isBrowser ? createElement(id) : null)
  useEffect(() => {
    const hasElement = document.querySelector(`#${id}`)
    const el = hasElement || createElement(id)

    if (!hasElement) {
      document.body.appendChild(el)
    }
    setElSnapshot(el)
  }, [])

  return elSnapshot
}

export default usePortal
