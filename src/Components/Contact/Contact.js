import React from 'react'
import photo1 from '../../Components/images/photo6.jpeg'
import photo2 from '../../Components/images/photo2.jpg'
import photo3 from '../../Components/images/photo3.jpeg'
import photo4 from '../../Components/images/photo4.jpeg'
import photo5 from '../../Components/images/photo6.jpeg'

const Contact = () => {
    return (
        <section className=' px-20 py-20' id='contact'>
            <h2 className='text-4xl text-center font-[600] p-6 '>Grid System Contact</h2>
            {/*==================Single grid ===================== */}
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img
                        className='w-full h-full object-cover'
                        src={photo1}
                        alt=''

                    />
                </div>
                <div>
                    <img
                        className='w-full h-full object-cover'
                        src={photo2}
                        alt=''

                    />
                </div>
                <div>
                    <img
                        className='w-full h-full object-cover'
                        src={photo3}
                        alt=''
                    />
                </div>
                <div>
                    <img
                        className='w-full h-full object-cover'
                        src={photo4}
                        alt=''

                    />
                </div>
                <div>
                    <img
                        className='w-full h-full object-cover'
                        src={photo5}
                        alt='' w-full h-full object-cover

                    />
                </div>
            </div>
        </section>
    )
}

export default Contact
