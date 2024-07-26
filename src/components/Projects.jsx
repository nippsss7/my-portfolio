import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='md:w-[80%] w-[90%] m-auto py-[6rem]'>
            <h1 className="text-center text-3xl pb-[3rem] font-bold">Projects</h1>
            <div className="flex md:flex-row flex-col flex-wrap justify-between md:gap-3 gap-10">
                <div className='project-bg md:w-[30%] hover:scale-[1.03] duration-300 cursor-pointer bg-white p-4 rounded-3xl flex flex-col '>
                    <div className='w-full rounded-xl bg-slate-300 mb-5'>
                        <img className='rounded-xl' src="mocks/spotify-mock.png" alt="" />
                    </div>
                    <h1 className='text-xl font-bold mb-2'>Spotify App Clone</h1>
                    <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, eligendi.</p>
                    <a className='w-full' href="https://nippsss7.github.io/groovify/" target='_blank'> <button className='w-full border p-2 rounded-md text-white  bg-[#ff7d1a] '> Preview </button>  </a>
                </div>
                <div className='project-bg md:w-[30%] hover:scale-[1.03] duration-300 cursor-pointer bg-white p-4 rounded-3xl flex flex-col '>
                    <div className='w-full h-[14rem] rounded-xl content-center bg-slate-200 mb-5'>
                        <img className='h-[90%] m-auto' src="mocks/sneakers-mock.png" alt="" />
                    </div>
                    <h1 className='text-xl font-bold mb-2'>Sneakers App</h1>
                    <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, eligendi.</p>
                    <a className='w-full' href="https://nippsss7.github.io/groovify/" target='_blank'> <button className='w-full border p-2 rounded-md text-white  bg-[#ff7d1a] '> Preview </button>  </a>
                </div>
                <div className='project-bg md:w-[30%] hover:scale-[1.03] duration-300 cursor-pointer bg-white p-4 rounded-3xl flex flex-col '>
                    <div className='w-full h-[14rem] rounded-xl bg-slate-300 mb-5'>
                        <img className='rounded-xl' src="mocks/pass-manager.png" alt="" />
                    </div>
                    <h1 className='text-xl font-bold mb-2'>Password Manager</h1>
                    <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, eligendi.</p>
                    <a className='w-full' href="https://nippsss7.github.io/groovify/" target='_blank'> <button className='w-full border p-2 rounded-md text-white  bg-[#ff7d1a] '> Preview </button>  </a>
                </div>
            </div>
        </div>
    )
}

export default Projects
