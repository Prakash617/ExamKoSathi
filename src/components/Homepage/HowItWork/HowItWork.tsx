import React from 'react'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { FiCast } from 'react-icons/fi'
import { GrPlayFill } from 'react-icons/gr'
import Image from 'next/image'

type Props = {}

const HowItWork = (props: Props) => {
    return (
        <>
            <div className=' opacity w-full py-[8rem]'>

                <div className='w-5/6 space-y-5  mx-auto flex flex-col-reverse lg:flex-row'>
                    <div className='w-5/6  lg:text-left sm:text-center flex flex-col space-y-7 mx-auto lg:px-[7rem]'>

                        <div>
                            <h1 className=''>How it Works</h1>
                        </div>
                        <div className='text-left '>
                            <h3>Grursus mal suada faci lisis Lorem ipsum dolarorit more the and ametion
                                consectetur elit. Vesti at bulum odio aea the dumm the ipsumm
                                suada and consectetur elit.
                            </h3>
                        </div>


                        <div className='lg:w-[31rem] w-full bg-[#7436FF]/[0.07] bg- rounded-[10px] p-6  flex items-end'>
                            <div className='flex lg:flex-row justify-center  items-center flex-col'>

                                <div>
                                    <FiCast className='text-Theme h-6 w-6 mt-2 space-y-1' />
                                </div>
                                <div className='flex flex-col ml-4'>
                                    <p className='text-2xl text-Header bold font-jost font-[900]'>Open</p>
                                    <h3 className=' w-[12.75rem]'>Grursus mal suada faci lisis
                                        Lorem ipsum dolarorit.</h3>
                                </div>
                            </div>
                            <div className='ml-[2rem]'>
                                <Image src="/homepage_images/logo.jpeg" className='w-[157px]' width={157} height={59} alt="" />
                            </div>
                        </div>
                        <div className='lg:w-[31rem] h-[8rem] w-full md:relative flex flex-row justify-end'>
                            <div className='lg:w-[31rem] bg-[#7436FF] w-full rounded-[10px] md:absolute md:left-12  p-6 flex '>
                                <div className='flex lg:flex-row justify-center  items-center flex-col'>

                                    <div>
                                        {/* <BsFillBookmarkFill className='text-white h-6 w-6 mt-2' /> */}
                                        <Image src="/homepage_images/search.svg" className='text-white h-6 w-6 mt-2' width={21.86} height={21.86} alt="" />
                                    </div>
                                    <div className='flex flex-col ml-4 space-y-1'>
                                        <div>

                                            <p className='text-2xl text-white bold font-jost font-[900]'>Take your Exam</p>
                                        </div>
                                        <div>

                                            <h3 className=' w-[12.75rem] text-white'>Grursus mal suada faci lisis
                                                Lorem ipsum dolarorit.</h3>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='lg:w-[31rem] w-full bg-[#7436FF]/[0.07] bg- rounded-[10px] p-6  flex '>
                            <div className='flex lg:flex-row justify-center  items-center flex-col'>

                                <div>
                                    <BsFillBookmarkFill className='text-Theme h-6 w-6 mt-2' />
                                </div>
                                <div className='flex flex-col ml-4 space-y-1'>
                                    <div>

                                        <p className='text-2xl text-Header bold font-jost font-[900]'>Takes your Exam</p>
                                    </div>
                                    <div>

                                        <h3 className=' w-[12.75rem]'>Grursus mal suada faci lisis
                                            Lorem ipsum dolarorit.</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='md:w-1/2 w-full mb-[6rem] '>
                        <div className='flex justify-center items-center '>
                            <div className='relative '>

                                <div className='absolute top-[-8rem] right-[-6rem] hidden lg:visible  z-0 '>
                                    <Image src="/homepage_images/element20 1bg.png" className='lg:w-[531px]   w-full' height={531} width={531} alt="" />
                                </div>

                                <div className='absolute bottom-[-8rem] hidden left-[-6rem]  lg:visible z-0'>

                                    <Image src="/homepage_images/element20 1bg.png" className='lg:w-[531px]  w-full' height={531} width={531} alt="" />
                                </div>
                                <div>

                                    <Image src="/homepage_images/how it work.png" className='lg:w-[500px] lg:h-[500px] w-full rounded-full z-[10] ' height={531} width={531} alt="how it work.png" />
                                </div>


                                <div className='absolute h-[5rem] w-[5rem] text-white z-20 rounded-full bg-Theme flex justify-center items-center bottom-[1rem] lg:bottom-[2.25rem] left-[1.75rem] '>
                                    <span className='text-white'> <GrPlayFill className='h-6 w-10' /></span>

                                </div>




                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HowItWork