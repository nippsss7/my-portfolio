import React from 'react'

const Main = () => {
  return (
    <div className='air-bg md:m-lg my-[2rem] py-[1.5rem]'>
      <div className="container w-[75%] md:ml-[19%] m-auto flex md:flex-row flex-col items-center gap-4 md:pt-[5rem] pt-[4rem] md:pb-[3rem] pb-[2rem] font-bold">
        <div className=' w-full rounded-full border-2 '>
          <img className='main-pic border-[#45474B] cursor-pointer transition-all duration-300 rounded-full hover:scale-[1.02]' src="main-pic.jpg" alt="" />
        </div>
        <div className='w-full text-center justify-center items-center flex flex-col gap-2'>
          <p className="relative text-xs text-white p-1 rounded-md bg-[#45474B] hover:bg-[#ff7d1a] top-[-10px]">Freelancer</p>
          <p className='text-slate-600'>Hello, I'am</p>
          <h1 className='text-4xl'>Nippun Singla</h1>
          <p className='text-2xl text-slate-600'>Web Developer</p>
          <div className="flex text-center my-4 gap-5">
            <a href="My-Resume.pdf" download>
              <button className='border border-black hover:text-white p-3 hover:border-0 rounded-md w-[9rem]'>Download cv</button>
            </a>
            <a href="#contact">
              <button className='border border-black p-3 rounded-md w-[9rem] text-white bg-[#45474B]'>Contact Me</button>
            </a>
          </div>
        </div>
        <div className="flex md:px-[5rem] px-[3.5rem]">
            <ul className='flex md:flex-col flex-row gap-5'>
              <li> <a href=""> <img className='w-[5.5rem] hover:scale-110 duration-300' src="icons/github.png" alt="" /> </a></li>
              <li> <a href=""> <img className='w-[5.5rem] hover:scale-110 duration-300' src="icons/linkedin.png" alt="" /> </a></li>
              <li> <a href=""> <img className='w-[5.5rem] hover:scale-110 duration-300' src="icons/instagram.png" alt="" /> </a></li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Main
