import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='md:w-[80%] w-[90%] m-auto py-[2rem]'>
            <p className="text-center">Get in Touch</p>
            <h1 className="text-center text-5xl font-bold">Contact Me</h1>
            <div className="flex md:flex-row flex-col py-[3rem]">
                <div className='md:w-1/2 w-full py-[4rem] mb-[2rem] md:mb-0 project-bg rounded-3xl hover:scale-[1.03] duration-300 h-auto bg-[#ff892f] text-white'>
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className='text-2xl font-bold mb-8'>Find Me</h1>
                        <p className='mb-2 font-bold'>nippunsingla07@gmail.com</p>
                        <p className='font-bold'>9872048751</p>
                    </div>
                </div>
                <hr className='relative w-1/5 top-[9rem] rotate-90 border-1 border-slate-300' />
                <div className='md:w-1/2 w-full project-bg p-5 hover:scale-[1.03] duration-300 rounded-3xl bg-red'>
                    <div className="flex flex-wrap md:p-5 pb-0 gap-5 ">
                        <form className='flex flex-wrap md:p-5 pb-0 pt-[1rem] gap-5' action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="8ae96871-9fe4-4ba1-a5f5-10c930f59e2a"/>
                            <input className='border-[1.7px] border-slate-400 p-2 rounded-lg outline-none md:w-[44%] w-[43%]' type="text" placeholder='Name' name="name" id="name" />
                            <input className='border-[2px] border-slate-400 p-2 rounded-lg outline-none w-[50%]' type="text" placeholder='Email' name="email" id="email" />
                            <textarea className='border-[2px] border-slate-400 p-2 rounded-lg text-wrap h-[10rem] outline-none w-full' type="text" placeholder='Message' name="message" id="message" />
                            <button className='p-2 m-auto bg-[#ff892f] rounded-md w-[8rem] text-white my-[1rem]' type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact