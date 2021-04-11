import { useState, useRef } from 'react'

const useTimer = (initialState = 60) => {
  const [timer, setTimer] = useState(initialState)
  const [isActive, setIsActive] = useState(false)
  const countRef = useRef(null)

  const handleStart = () => {
    setTimer(initialState)
    setIsActive(true)

    countRef.current = setInterval(() => {
      setTimer((timer) => timer - 1)
    }, 1000)

    setTimeout(() => {
      clearInterval(countRef.current)
      setTimer(0)
      setIsActive(false)
    }, initialState*1000)
  }

  return { timer, isActive, handleStart }
}

export default useTimer