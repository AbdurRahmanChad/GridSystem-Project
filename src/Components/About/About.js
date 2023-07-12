import React from 'react'
import heroImg from "../../Components/images/chad.png";

const About = () => {
    return (
        <section className='w-full bg-slate-800' id='about'>
            <div className='px-20 my-14 '>
                <div className=''>
                    <div className=' flex items-center justify-between'>

                        {/*==================Text===================== */}
                        <div className='text-white w-30 '>
                            <h2 className='text-3xl mt-12'>Hello I'M </h2>
                            <h1 className='font-semibold text-3xl my-4'>MD. ABDUR RAHMAN CHAD</h1>
                            <p className=' text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the <br />1500s
                                Lorem Ipsum has been the industry's standard dummy text ever since<br /> the 1500s
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                            {/*================== Button ===================== */}
                            <div className='mt-5'>
                                <button className='btn bg-primaryColor py-2 px-4 text-white
                                   rounded hover:bg-white hover:text-primaryColor transition-all
                                     duration-500'>About Me</button>
                                <button className='btn outline px-4 py-1.5 rounded
                                    border-none text-white ml-5'>Portfolio</button>
                            </div>
                        </div>
                        {/*==================Img===================== */}
                        <div className=''>
                            <img src={heroImg} alt='logo' />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About
