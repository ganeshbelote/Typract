import React, { useState } from 'react'
import Display from '../components/Display'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer'
import Result from '../components/Result'

const Home = () => {
  const [second, setSecond] = useState(15)
  const [wordCount, setWordCount] = useState(0)
  const [duration, setDuration] = useState(15)
  const [totalChars, setTotalChars] = useState(0)
  const [correctChars, setCorrectChars] = useState(0)
  const [sample, setSample] = useState('')

  const handleTotalChars = () => {
    setTotalChars(prev => prev + 1)
  }

  const handleCorrectChars = () => {
    setCorrectChars(prev => prev + 1)
  }

  return (
    <div className='h-full w-screen'>
      <Navbar setSample={setSample}/>
      <div className='wrapper mt-24 flex flex-col items-center justify-center gap-5'>
        {second ? (
          <>
            <Timer
              second={second}
              setSecond={setSecond}
              setDuration={setDuration}
            />
            <Display
              setWordCount={setWordCount}
              settotalChars={handleTotalChars}
              setcorrectChars={handleCorrectChars}
              sample={sample}
              setSample={setSample}
            />
          </>
        ) : (
          <Result
            wordCount={wordCount}
            duration={duration}
            correctChars={correctChars}
            totalChars={totalChars}
          />
        )}
      </div>
    </div>
  )
}

export default Home
