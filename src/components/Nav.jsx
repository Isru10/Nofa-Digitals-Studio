import React from 'react'

const Nav = () => {
  return (
    <div className='w-screen py-6 px-5 lg:px-14 bg-gray-700 justify-between flex text-neutral-50'> 
    <span className='text-3xl font-bold'> Nofa Digitals</span>
    <ul className='md:flex hidden items-center space-x-5'>
      <li className='flex justify-center w-full py-4 hover:bg[#202020]'>About</li>
      <li className='flex justify-center w-full py-4 hover:bg[#202020]'>Services</li>
      <li className='flex justify-center w-full py-4 hover:bg[#202020]'>Reserve</li>
      <li className='flex justify-center w-full py-4 hover:bg[#202020]'>Contact</li>
    </ul>


    {/* hamburger */} 

    <button className='space-y-1 group md:hidden'>
      <div className="w-6 h-1 bg-white"></div>
      <div className="w-6 h-1 bg-white"></div>
      <div className="w-6 h-1 bg-white"></div>

      {/* menu */}

      <ul className='bg-[#252525] w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end'>
        <button className='px-10 py-8 relative ml-auto'>
          <div className="w-6 h-1 bg-white absolute rotate-45"></div>
          <div className="w-6 h-1 bg-white absolute -rotate-45"></div>

        </button>
      <li>About</li>
      <li>Services</li>
      <li>Reserve</li>
      <li>Contact</li>
    </ul>

    </button>

    </div>
  )
}

export default Nav