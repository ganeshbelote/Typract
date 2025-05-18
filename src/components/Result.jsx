import React, { useEffect } from 'react'
import back from '../assets/back.svg'

const Result = ({ wordCount, duration, totalChars, correctChars }) => {

  const handleGoBack = () =>{
    window.location.reload()
  }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-5'>
      <div className='border-[1.5px] border-amber-200 p-8 w-full lg:w-[60%] min-h-52 rounded-3xl shadow-[#303030] shadow-lg flex flex-wrap items-center justify-center gap-3 overflow-hidden'>
        <div className='wpm ml-8 pl-5 h-[80%] w-36 border-l-[2px] border-l-amber-300'>
          <h2 className='text-2xl text-gray-400'>wpm</h2>
          <p className='text-5xl text-amber-200'>
            {Math.floor((wordCount / duration) * 60)}
          </p>
        </div>
        <div className='acc ml-8 pl-5 h-[80%] w-36 border-l-[2px] border-l-amber-300'>
          <h2 className='text-2xl text-gray-400'>acc</h2>
          <p className='text-5xl text-amber-200'>
            {totalChars === 0
              ? 0
              : Math.floor((correctChars / totalChars) * 100)}
            %
          </p>
        </div>
        <div className='tme ml-8 pl-5 h-[80%] w-36 border-l-[2px] border-l-amber-300'>
          <h2 className='text-2xl text-gray-400'>duration</h2>
          <p className='text-5xl text-amber-200'>{duration}</p>
        </div>
      </div>
      <div
        title='Reload'
        className={`z-10 p-2 h-12 w-36 shadow-[#303030] shadow-lg border-[1.5px] border-amber-200 flex items-center justify-center cursor-pointer rounded-2xl`}
        onClick={handleGoBack}
      >
        <img title='Go back' className='h-5 flex items-center justify-center cursor-pointer' src={back} alt='back'/>
      </div>
    </div>
  )
}

export default Result
