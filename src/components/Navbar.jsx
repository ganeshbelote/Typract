import React from 'react'
import logo from '../assets/logo.svg'
import user from '../assets/user.svg'
import setting from '../assets/setting.svg'
import keyboard from '../assets/keyboard.svg'
import git from '../assets/git.svg'
import data from '../data/data.js'

const Navbar = ({setSample}) => {
  return (
    <header className='p-4 w-full h-24 flex justify-around items-center shadow-lg shadow-[#303030] rounded-b-2xl'>
      <div className='logo h-9 w-30 lg:w-33 relative mr-8 ml-8 cursor-pointer '>
        <img className='absolute -left-1/4 lg:-left-1/3 top-1/2 -translate-y-1/2 h-8 lg:h-12' src={logo} alt='logo' />
        <h2 className='absolute text-yellow-300 text-2xl lg:text-3xl font-semibold'>
          Typract
        </h2>
      </div>
      <nav className='settings ml-6 lg:ml-8 flex gap-5 lg:gap-8 text-zinc-300'>
        {/* <img className='cursor-pointer h-5' src={user} alt='user logo' />
        <img className='cursor-pointer h-5' src={setting} alt='setting logo' /> */}
        <img title='github' className='cursor-pointer h-6' src={git} alt='git logo' onClick={()=>window.location.href ='https://github.com/ganeshbelote/Typract'}/>
        <img title='Reload tab' className='cursor-pointer h-5' src={keyboard} alt='keyboard logo' onClick={()=>setSample(data[Math.floor(Math.random() * data.length)])}/>
      </nav>
    </header>
  )
}

export default Navbar
