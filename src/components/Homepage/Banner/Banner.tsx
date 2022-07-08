
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <>
            <div className=" w-full bg-coursetwo bg-[center_bottom_-12rem] bg-cover bg-no-repeat  ">

                <div className='bg-[#1B0057]/[0.76]  w-full'>

                    <div className='flex flex-col md:flex-row justify-center py-7 items-center'>
                        <div className='m-10 space-y-3 text-center'>
                            <h1 className='text-white text-[45px]'>350+</h1>
                            <p className='text-white text-[25px]   font-extrabold'>Enrolled Exams</p>
                        </div>
                        <div className='m-10 space-y-3 text-center'>
                            <h1 className='text-white text-[45px]'>240+</h1>
                            <p className='text-white text-[25px]   font-extrabold'>Exams Completed</p>
                        </div>
                        <div className='m-10 space-y-3 text-center'>
                            <h1 className='text-white text-[45px]'>55+</h1>
                            <p className='text-white text-[25px]   font-extrabold'>New Exams</p>
                        </div>
                        <div className='m-10 space-y-3 text-center'>
                            <h1 className='text-white text-[45px]'>20+</h1>
                            <p className='text-white text-[25px]   font-extrabold'>Subjects</p>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Banner