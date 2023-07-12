import React from 'react'
import Image from '../../Components/images/logo.png';

const Header = () => {
    return (
        <section className='w-full h-[70px] fixed z-30 bg-slate-800 ' id='home'>
            < div className='flex  items-center justify-between py-2 px-20' >

                {/*================== logo start ===================== */}
                < div className='' >
                    <img src={Image} className='w-full h-[35px]' alt='logo' />
                </div >
                {/*================== logo end ===================== */}

                {/*================== Menu ===================== */}

                <div className='menu'>
                    <ul className='flex items-center gap-16'>
                        <li><a className='text-xl font-[800] text-white hover:text-orange-500' href='#home'>Home</a></li>
                        <li><a className='text-xl font-[800] text-white hover:text-orange-500' href='#about'>About</a></li>
                        <li><a className='text-xl font-[800] text-white hover:text-orange-500' href='#services'>Services</a></li>
                        <li><a className='text-xl font-[800] text-white hover:text-orange-500' href='#project'>Project</a></li>
                        <li><a className='text-xl font-[800] text-white hover:text-orange-500' href='#contact'>Contact</a></li>
                    </ul>
                </div>

                <div className='flex items-center gap-2'>
                    <button className=' flex items-center bg-slate-500 font-[600] text-[16px] border border-solid hover:text-white
                         border--smallTextColor py-2 px-4 rounded-[40px] max-h-[40px] hover:bg-smallTextColor'>
                        Get Start
                    </button>
                    <span className='text-2xl text-black md:hidden cursor-pointer'><i class="ri-menu-line"></i></span>
                </div>
            </div >
        </section >
    );
};

export default Header;

