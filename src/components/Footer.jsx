import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center gap-5 items-center px-[2rem] py-[4rem] pb-[6rem]'>
      <h1 className='text-6xl text-[#ff7d1a] font-bold'>𐌍𐌔</h1>
      <div>
        <ul className='flex md:gap-10 gap-5 text-xl font-bold'>
          <a href="#home"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </div>
      <div className="flex px-[5rem]">
            <ul className='flex gap-10'>
              <li> <a href=""> <img className='w-[2rem] hover:scale-110 duration-300' src="icons/github.png" alt="" /> </a></li>
              <li> <a href=""> <img className='w-[2rem] hover:scale-110 duration-300' src="icons/linkedin.png" alt="" /> </a></li>
              <li> <a href=""> <img className='w-[2rem] hover:scale-110 duration-300' src="icons/instagram.png" alt="" /> </a></li>
            </ul>
          </div>
      <p className=''>Copyright c Nippun Singla - all rights reserved</p>
    </div>
  )
}

export default Footer
