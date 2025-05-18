import React, { useEffect } from 'react'

const Result = ({wordCount, duration, totalChars, correctChars}) => {
  return (
    <div className='border-[1.5px] border-amber-200 p-8 w-full lg:w-[60%] min-h-52 rounded-3xl shadow-[#303030] shadow-lg flex flex-wrap items-center justify-center gap-3 overflow-hidden'>
      <div className="wpm ml-8 pl-5 h-[80%] w-36 border-l-[2px] border-l-amber-300">
        <h2 className='text-2xl text-gray-400'>wpm</h2>
        <p className='text-5xl text-amber-200'>{Math.floor(wordCount/duration * 60)}</p>
      </div>
      <div className="acc ml-8 pl-5 h-[80%] w-36 border-l-[2px] border-l-amber-300">
        <h2 className='text-2xl text-gray-400'>acc</h2>
        <p className='text-5xl text-amber-200'>{totalChars === 0 ? 0 : Math.floor((correctChars / totalChars) * 100)}%</p>
      </div>
      <div className="tme ml-8 pl-5 h-[80%] w-36 border-l-[2px] border-l-amber-300">
        <h2 className='text-2xl text-gray-400'>duration</h2>
        <p className='text-5xl text-amber-200'>{duration}</p>
      </div>
    </div>
  )
}

export default Result