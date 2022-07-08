import Link from 'next/link'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillCheckCircleFill, BsBookmarksFill } from 'react-icons/bs'

type Props = {}

const Card = (props: Props) => {
    return (
        <>

            <div className='w-[305px] h-[316px] py-8 px-4 rounded-[10px] border-[1px] shadow-sm  hover:border-Theme'>
                <div className='flex flex-row justify-center '>
                    <div className='flex flex-col space-y-[1rem]'>
                        <div className='mx-auto cardhead'>
                            <Link href={'/examdetail'}>
                            <p className='cardhead hover:text-Theme cursor-pointer'>Advance Computer Exam</p>
                            </Link>
                        </div>
                        <div>
                            <p className='cardP'>It is a long established fact that a reader
                                will be distracted for the post, It is a ...</p>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <div className='flex '>
                                <BsFillCheckCircleFill className='text-[#138808] my-auto mr-2' />
                                <p>Exam Taken</p>
                            </div>


                        </div>
                        <div className='flex flex-row justify-between bg-[#EBEBEB] rounded-[10px] p-3'>
                            <div className='rounded-[60px] bg-[#7436FF] px-1'>
                                <button className='text-white font-jost px-[]'>Rs. 250</button>

                            </div>
                            <div className='flex flex-row'>
                                <div className='flex'>
                                    <BsBookmarksFill className='text-[#FF6F06] my-auto inline-block' />
                                    <p>08 Running</p>
                                </div>


                            </div>



                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='flex'>


                                <AiFillStar className='text-[#FF6F06] my-auto inline-block' />

                                <p>4.5</p>

                            </div>
                            <div className='flex flex-row space-x-3'>
                                <div>
                                    <p className=' font-medium'>See Details</p>
                                </div>
                                <div>
                                    <p className='text-Theme font-medium'>Enroll Now</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>



        </>
    )
}

export default Card