import React, { useEffect, useRef, useState } from 'react'
import './Display.css'
import keyboard from '../assets/keyboard.svg'
import data from '../data/data.js'

const Display = ({ setWordCount, setcorrectChars, settotalChars, sample, setSample }) => {
  const [input, setInput] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    setSample(data[Math.floor(Math.random() * data.length)])

    inputRef.current.focus()

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  const handleKeydown = () => {
    inputRef.current.focus()
  }

  const handleChange = e => {
    const newValue = e.target.value

    // If character is added (not backspace)
    if (newValue.length > input.length) {
      const nextChar = newValue.slice(-1)
      const currentIndex = input.length
      const expectedChar = sample[currentIndex]

      if (expectedChar === ' ' && nextChar !== ' ') {
        return // block wrong non-space
      }

      settotalChars(prev => prev + 1)
      if (nextChar === expectedChar) {
        setcorrectChars(prev => prev + 1)
      }

      // count word if space matched
      if (nextChar === ' ' && expectedChar === ' ') {
        setWordCount(prev => prev + 1)
      }
    } else if (newValue.length < input.length) {
      // handle backspace
      settotalChars(prev => prev + 1)
    }

    setInput(newValue)
  }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-5'>
      <div className='display-scroll border-[1.5px] border-amber-200 relative p-8 w-full lg:w-[70%] min-h-52 rounded-3xl shadow-[#303030] shadow-lg flex items-start justify-center overflow-hidden'>
        <p className='text-lg lg:text-3xl text-gray-400 leading-10 font-mono'>
          {sample.split('').map((char, i) => {
            let className = ''
            if (i < input.length) {
              className = input[i] === char ? 'correct' : 'incorrect'
            } else if (i === input.length) {
              className = 'current'
            }

            return (
              <span key={i} className={className}>
                {char}
              </span>
            )
          })}
        </p>
        <input
          ref={inputRef}
          className='pl-8 pr-8 absolute top-8 outline-0 border-0 h-10 w-full pointer-events-none opacity-0'
          type='text'
          value={input}
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div
        className={`z-10 bg-[#323437] p-2 h-12 w-36 shadow-[#303030] shadow-lg border-[1.5px] border-amber-200 flex items-center justify-center cursor-pointer rounded-2xl`}
        onClick={() => setSample(data[Math.floor(Math.random() * data.length)])}
      >
        <img className='h-5' src={keyboard} alt='keyboard' />
      </div>
    </div>
  )
}

export default Display
