import React, { useEffect, useMemo, useState } from 'react'

let firstTypeTime = 0

const Timer = ({second, setSecond, setDuration}) => {
  const [isRunning, setIsRunning] = useState(false)
  const [secOpt, setSecOpt] = useState(false)

  useEffect(() => {
    let interval

    if (isRunning && second > 0) {
      interval = setInterval(() => {
        setSecond(prev => {
          if (prev <= 1) {
            clearInterval(interval)
            setIsRunning(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning, second])

  useEffect(() => {
    const handleKeyDown = () => {
      if(!firstTypeTime){
        setDuration(second)
        firstTypeTime = 1
      }
      if (!isRunning && second > 0) {
        setIsRunning(true)
      }
      setSecOpt(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isRunning, second])

  const handleSetSecondOptions = () => {
    setSecOpt(prev => !prev)
  }

  const handleSetSecond = el => {
    setSecond(el)
  }

  return (
    <div className='flex items-center justify-center relative mb-5'>
      <div
        className={`${
          secOpt ? 'rounded-l-2xl ' : 'rounded-2xl'
        } transition duration-500 ease-in-out absolute z-10 bg-[#323437] p-2 h-12 w-36 shadow-[#303030] shadow-lg border-[1.5px] border-amber-200 flex items-center justify-center text-2xl cursor-pointer`}
        onClick={handleSetSecondOptions}
      >
        {second}
      </div>
      <div
        className={`${
          secOpt ? 'translate-x-[100%] opacity-100' : 'translate-0 opacity-0'
        } absolute transition duration-500 ease-in-out ml-4 p-2 h-10 w-34 rounded-r-2xl shadow-[#303030] shadow-lg border-[1.5px] border-amber-200 flex items-center justify-center gap-4 text-2xl`}
      >
        {[15, 30, 60].map((el, i) => (
          <div
            key={i}
            className={
              el == second
                ? 'h-10 w-10 flex items-center justify-center text-amber-300 cursor-pointer'
                : 'h-10 w-10 flex items-center justify-center cursor-pointer'
            }
            onClick={()=>handleSetSecond(el)}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timer
