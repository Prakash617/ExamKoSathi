import Image from 'next/image'
import React from 'react'
import { AiFillStar, AiOutlineBarChart } from 'react-icons/ai'
import { BsFillBookmarksFill, BsStar } from 'react-icons/bs'
import { RiMessageFill } from 'react-icons/ri'

type Props = {}

const CreatedByCard = (props: Props) => {
    return (
        <>
            <div className=' border-[1px] border-gray-300 p-4 rounded-[10px] hover:border-sky-500'>
                <div className='flex flex-col space-y-7'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex'>
                            <div className='bg-Orange h-[138px] w-[138px] inline-block rounded-full relative'>
                                <div className=' rounded-full absolute bottom-0 right-1'>

                                    <Image src="/homepage_images/created.png" className=' rounded-full absolute bottom-1 right-1' height={138} width={138} alt="" />
                                </div>


                            </div>
                            <div className='flex flex-col mt-10 ml-4'>
                                <div>
                                    <p>Sarah Jain</p>
                                </div>
                                <div>
                                    <p>Socialogy, Physics and Biology</p>
                                </div>

                            </div>
                        </div>
                        <div>

                            <div className='border-[1px] border-gray-300 rounded-[20px] px-2 '>
                                <AiFillStar className='h-5 w-5 text-Orange inline-block' />
                                <span> 4.5</span>

                            </div>
                        </div>

                    </div>
                    <div>
                        <p className='text-[#37474F] font-inter'>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio
                            is aeao the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit.
                            All the that Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary,
                            making this the first true dummy generator on the Internet.</p>
                    </div>
                    <div>
                        <div className='w-1/2 flex space-x-6'>
                            <div className='flex space-x-2'>
                                <BsFillBookmarksFill className='h-5 w-5 text-Orange inline-block ' />
                                <span>05 Exams</span>

                            </div>
                            <div className='flex space-x-2'>
                                <RiMessageFill className='h-5 w-5 text-Orange inline-block ' />
                                <span>05 Exams</span>

                            </div>
                            <div className='flex space-x-2'>
                                <AiOutlineBarChart className='h-5 w-5 text-Orange inline-block ' />

                                <span>05 Exams</span>

                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CreatedByCard