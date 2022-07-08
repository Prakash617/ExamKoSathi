import React from 'react'
import { AiFillStar, AiOutlineBarChart } from 'react-icons/ai'
import { BsFillBookmarksFill } from 'react-icons/bs'
import { RiMessageFill } from 'react-icons/ri'

type Props = {}

const FeedBack = (props: Props) => {
    return (
        <>
            <div className=' border-[1px] border-gray-300 p-4 rounded-[10px] hover:border-sky-500 '>
                <div className='flex'>
                    <div className='w-1/5 h-full' >
                        <div className='flex flex-row justify-center mt-[2rem]'>

                            <div className='flex flex-col space-y-5  border-r-2  border-[#E0E0E0] '>
                                <div className='mr-[3rem]'>
                                    <p className=' text-[#37474F] font-jost font-extrabold'>5 Days ago</p>
                                </div>
                                <div className='flex'>
                                    <div>

                                        <AiFillStar className='h-4 w-4 text-Orange' />
                                    </div>
                                    <div>

                                        <AiFillStar className='h-4 w-4 text-Orange' />
                                    </div>
                                    <div>

                                        <AiFillStar className='h-4 w-4 text-Orange' />
                                    </div>
                                    <div>

                                        <AiFillStar className='h-4 w-4 text-Orange' />
                                    </div>
                                    <div>

                                        <AiFillStar className='h-4 w-4 text-Orange' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-4/5 '>
                        <div className='flex flex-row justify-center items-center  '>

                            <div className='w-4/5 mt-[1.5rem]'>
                                <p className='text-[#37474F] font-inter'>Good Exprience with this Exam!!
                                    Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio.
                                    Great job!</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FeedBack