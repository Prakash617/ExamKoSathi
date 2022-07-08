import React from 'react'
import Image from 'next/image'

type Props = {}

const AboutUs = (props: Props) => {
    return (
        <>
            <div className=' bg-[#7436FF] bg-opacity-5 w-full'>


                <div className='w-4/5 mx-auto py-[6rem]  text-left '>

                    <div className='flex flex-col my-8 lg:flex-row'>
                        <div className=' px-[3rem] my-auto'>
                            <Image src="/homepage_images/about.png" className='w-[50rem]' width={600} height={600} alt="" />

                        </div>
                        <div className='flex flex-row  md:justify-center'>


                            <div className=' flex flex-col space-y-10  md:ml-[7rem] '>
                                <div>
                                    <p className='text-2xl text-Header bold font-jost font-[900] mt-4'>Know About Us</p>
                                </div>
                                <div>
                                    <p className='text-5xl  font-jost text-Header font-[800]'>We manage online <br /> exams portal</p>
                                </div>
                                <div>
                                    <p className='font-jost font-[500] text-Header text-lg'>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                </div>
                                <div className='flex-col space-y-5 lg:pr-40'>

                                    <div className='flex flex-row items-center '>

                                        <div className='inline-block mr-2 mt-2'><Image src="/homepage_images/Vector.svg" className='inline-block mr-2 ' width={16.67} height={16.67} alt="" /></div>
                                        <div>

                                            <p className='font-jost font-[500] text-[#2D2D2D] text-xl'>All the Lorem Ipsum Internet tend to repeat.</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center '>

                                        <div className='inline-block mr-2 mt-2'><Image src="/homepage_images/Vector.svg" className='inline-block mr-2 ' width={16.67} height={16.67} alt="" /></div>
                                        <div>

                                            <p className='font-jost font-[500] text-[#2D2D2D] text-xl'>All the Lorem Ipsum Internet tend to repeat.</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center '>

                                        <div className='inline-block mr-2 mt-2'><Image src="/homepage_images/Vector.svg" className='inline-block mr-2 ' width={16.67} height={16.67} alt="" /></div>
                                        <div>

                                            <p className='font-jost font-[500] text-[#2D2D2D] text-xl'>All the Lorem Ipsum Internet tend to repeat.</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center '>

                                        <div className='inline-block mr-2 mt-2'><Image src="/homepage_images/Vector.svg" className='inline-block mr-2 ' width={16.67} height={16.67} alt="" /></div>
                                        <div>

                                            <p className='font-jost font-[500] text-[#2D2D2D] text-xl'>All the Lorem Ipsum Internet tend to repeat.</p>
                                        </div>
                                    </div>
                                  

                                </div>


                                <div>
                                    <p className='font-[600] text-Header text-lg font-jost'>Have questions? <span className='text-Orange cursor-pointer'> Get free guide</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs