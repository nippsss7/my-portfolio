import React from 'react'

const About = () => {
    return (
        <div id='about' className='air-bg my-[4rem] md:pl-[4rem] pt-[4rem] pb-[5rem] flex flex-col gap-5 w-[80%] m-auto'>
            <p className="text-center">Get to Know more</p>
            <h1 className="text-center text-5xl font-bold">About Me</h1>
            {/* <hr/> */}
            <div className="flex md:flex-row flex-col my-10">
                
                <div className='w-3/4 m-auto'>
                    <img className='secondPic rounded-3xl' src="second-pic.jpg" alt="" />
                </div>
                <div>
                    <div className='flex font-bold justify-around w-full md:pl-[2rem] pt-[3rem] pb-[2rem]'>
                        <div className='flex w-[35%] pl-[1rem] flex-col'>
                            <h1 className='text-lg'>Frontend</h1>
                            <ul className='my-4 flex flex-wrap gap-1'>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>HTML</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>CSS</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>JavaScript</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>ReactJS</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>NextJS</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>Tailwind</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>Bootsrap</li>
                            </ul>
                        </div>
                        <div className='flex w-[35%] px-[2rem] flex-col'>
                            <h1 className='text-lg'>Backend</h1>
                            <ul className='my-4 flex flex-wrap gap-1'>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>JAVA</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>C++</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>Express</li>
                            </ul>
                        </div>
                        <div className='flex w-[35%] px-[1rem] flex-col'>
                            <h1 className='text-lg'>Database</h1>
                            <ul className='my-4 flex flex-wrap gap-1'>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>MongoDb</li>
                                <li className='bg-[#ff7d1a] text-center text-xs text-white p-1 px-2 rounded-md'>Mongoose</li>
                            </ul>
                        </div>
                    </div>
                    <p className='text-center px-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius et officia doloribus harum sed reiciendis magni cum aut nesciunt officiis ea dicta dolore assumenda, fugit quia eaque iure consectetur facere.</p>
                </div>
            </div>
        </div>
    )
}

export default About
