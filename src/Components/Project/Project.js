import React from 'react'
import photo1 from '../../Components/images/photo6.jpeg'
import photo2 from '../../Components/images/photo2.jpg'
import photo3 from '../../Components/images/photo3.jpeg'
import photo4 from '../../Components/images/photo4.jpeg'
import photo5 from '../../Components/images/photo6.jpeg'
const Project = () => {
    return (
        <section className=' px-20' id='project'>
            <div className='text-center'>
                <h2 className='text-4xl font-[800]'>Grid System Project</h2>

                <div className='grid grid-cols-3 gap-6 py-16'>
                    <div className=' row-span-1 col-span-2'>
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
                </div>

            </div>
        </section>
    )
}

export default Project
