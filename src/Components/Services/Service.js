import React from 'react'
import photo1 from '../../Components/images/photo6.jpeg'
import photo2 from '../../Components/images/photo2.jpg'
import photo3 from '../../Components/images/photo3.jpeg'
import photo4 from '../../Components/images/photo4.jpeg'
import photo5 from '../../Components/images/photo6.jpeg'
import photo6 from '../../Components/images/photo3.jpeg'


const Service = () => {
    return (
        <section className='px-20 py-20' id='services'>
            <div className=''>
                <div className=' text-center'>
                    <h2 className='text-3xl font-[600] '>
                        My Services
                    </h2>
                    <p className='text-lg font-[700] text-black'>
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                </div>
                <div className='grid grid-cols-3 gap-6 py-16'>
                    <div className=' col-span-2 row-span-2'>
                        <img
                            className='w-full h-full '
                            src={photo1}
                            alt=''
                        />
                    </div>
                    <div className=''>
                        <img
                            className='w-full h-full'
                            src={photo2}
                            alt='' />
                    </div>
                    <div className=''>
                        <img
                            className='w-full h-full'
                            src={photo3}
                            alt='' />
                    </div>
                    <div className=''>
                        <img
                            className='w-full h-full'
                            src={photo4}
                            alt='' />
                    </div>
                    <div className=''>
                        <img
                            className='w-full h-full'
                            src={photo5}
                            alt='' />
                    </div>
                    <div className=''>
                        <img
                            className='w-full h-full'
                            src={photo6}
                            alt='' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Service
