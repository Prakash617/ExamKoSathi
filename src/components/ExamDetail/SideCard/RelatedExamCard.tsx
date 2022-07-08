import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import Btn1 from '../../../Reusable/Button/Btn1'

type Props = {}

const RelatedExamCard = (props: Props) => {
    return (
        <>
            <div className='lg:h-[545px] lg:w-[375px] my-6 w-5/6 mx-auto'>
                <div className='h-[70px] w-full bg-[#7436FF]   rounded-t-md'>
                    <p className='text-white text-xl pl-5 pt-5 font-bold'>Related Exams</p>
                </div>
                <div className=' border-2 border-gray-300 flex flex-col rounded-b-md '>
                    <div className='w-4/5   border-b-[1px] border-[#E0E0E0] mx-auto'>

                        <div className='text-[#37474F] mt-8'>
                            <p className='text-xl text-black my-2 bold'>IIT Tred India Exam for JRE</p>
                            <p className='my-2'>It is a long established fact that a reader
                                will be distracted for the post...</p>
                            <div className='flex flex-row justify-between text-[#37474F] my-3'>
                                <div className='flex flex-row space-x-3'>

                                    <div className='rounded-[60px] bg-[#7436FF] w-[4rem] px-1'>
                                        <button className='text-white '>Rs. 250</button>

                                    </div>
                                    <div>
                                        <AiFillStar className='h-4 w-4 mb-1 text-Orange inline-block'/>
                                        <span>3.2</span>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-[#37474F] font-sans'>See Details</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-4/5   border-b-[1px] border-[#E0E0E0] mx-auto'>

                        <div className='text-[#37474F] mt-8'>
                            <p className='text-xl text-black my-2 bold'>IIT Tred India Exam for JRE</p>
                            <p className='my-2'>It is a long established fact that a reader
                                will be distracted for the post...</p>
                            <div className='flex flex-row justify-between text-[#37474F] my-3'>
                                <div className='flex flex-row space-x-3'>

                                    <div className='rounded-[60px] bg-[#7436FF] w-[4rem] px-1'>
                                        <button className='text-white '>Rs. 250</button>

                                    </div>
                                    <div>
                                        <AiFillStar className='h-4 w-4 mb-1 text-Orange inline-block'/>
                                        <span>3.2</span>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-[#37474F] font-sans'>See Details</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-4/5   border-b-[1px] border-[#E0E0E0] mx-auto'>

                        <div className='text-[#37474F] mt-8'>
                            <p className='text-xl text-black my-2 bold'>IIT Tred India Exam for JRE</p>
                            <p className='my-2'>It is a long established fact that a reader
                                will be distracted for the post...</p>
                            <div className='flex flex-row justify-between text-[#37474F] my-3'>
                                <div className='flex flex-row space-x-3'>

                                    <div className='rounded-[60px] bg-[#7436FF] w-[4rem] px-1'>
                                        <button className='text-white '>Rs. 250</button>

                                    </div>
                                    <div>
                                        <AiFillStar className='h-4 w-4 mb-1 text-Orange inline-block'/>
                                        <span>3.2</span>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-[#37474F] font-sans'>See Details</p>
                                </div>

                            </div>
                        </div>
                    </div>




                    <div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default RelatedExamCard