import React from 'react'

const Navbar = () => {
  return (
    <div id='home'>
      <nav className='air-bg my-[1rem] md:my-[2rem] flex items-center justify-between px-[2rem] md:px-[7rem] py-[1.5rem] border  border-b-slate-200 '>
        <h1 className='font-extrabold text-3xl text-[#ff7d1a]'>𐌍𐌔</h1>
        <ul className='hidden md:flex items-center text-xl text-center'>
          <li className='hover:scale-90 w-[7rem] effects'><a href="#home">Home</a></li>
          <li className='hover:scale-90 w-[7rem] effects'><a href="#about">About</a></li>
          <li className='hover:scale-90 w-[7rem] effects'><a href="#projects">Projects</a></li>
          <li className='hover:scale-90 w-[7rem] effects'><a href="#contact">Contact</a></li>
        </ul>
        <a href="My-Resume.pdf" download>
          <button className='font-bold iconHover hidden md:flex gap-3 hover:font-bold w-full hover:text-white bg-slate-200 rounded-md p-2 px-5'>
            Download CV 
            <svg className='duration-300 w-[1.3rem]' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#45474B"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
          </button>
        </a>
      </nav>
    </div>
  )
}

export default Navbar
