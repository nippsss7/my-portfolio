import React from 'react'

const About = () => {
    return (
        <div id='about' className='air-bg my-[4rem] md:pl-[4rem] pt-[3rem] pb-[2rem] flex flex-col gap-5 w-[80%] m-auto'>
            <p className="text-center">Get to Know more</p>
            <h1 className="text-center text-5xl font-bold">About Me</h1>
            {/* <hr/> */}
            <div className="flex md:flex-row flex-col my-10 w-full">
                
                <div className='ltr sm:w-full md:w-3/5 m-auto px-4'>
                    <img className='secondPic w-full m-auto rounded-3xl' src="second-pic.jpg" alt="" />
                </div>

                <div className='rtl md:w-4/5 sm:w-full lg:pr-3'> 
                    <div className='flex font-bold justify-around w-full md:pl-[2rem] pt-[3rem] pb-[2rem]'>
                        <div className=' rtl flex w-[35%] pl-[1rem] flex-col'>
                            <h1 className='text-lg'>Frontend</h1>
                            <ul className='my-4 flex flex-wrap gap-1'>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>HTML</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>CSS</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>Tailwind</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>JavaScript</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>ReactJS</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>NextJS</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>React Native</li>
                            </ul>
                        </div>
                        <div className='rtl flex w-[35%] px-[2rem] flex-col'>
                            <h1 className='text-lg'>Backend</h1>
                            <ul className='my-4 flex flex-wrap gap-1'>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>JAVA</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>C++</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>Express</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>JavaScript</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>TypeScript</li>
                            </ul>
                        </div>
                        <div className='rtl flex w-[35%] px-[1rem] flex-col'>
                            <h1 className='text-lg'>Database</h1>
                            <ul className='my-4 flex flex-wrap gap-1'>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>MongoDb</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>Mongoose</li>
                            </ul>
                        </div>
                    </div>
                    <p className='text-center px-[1rem]'>
                    Motivated and determined professional pursuing a Bachelor’s in Computer Information Systems with hands-on experience in IT, web development, and app development. Worked as IT Head and Developer with expertise in technologies including HTML, CSS, JavaScript, React, and the MERN Stack. Currently working on app development projects, including a fitness app that acts as a personal trainer. Proficient in front-end design, back-end integration, and delivering user-centric solutions. Looking to bring my technical expertise and problem-solving skills to a dynamic and innovative team.</p>
                </div>
            </div>
        </div>
    )
}

export default About
