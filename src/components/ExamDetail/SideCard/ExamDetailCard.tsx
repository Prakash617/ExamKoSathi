import React from 'react'
import Btn1 from '../../../Reusable/Button/Btn1'

type Props = {}

const ExamDetailCard = (props: Props) => {
  return (
    <>
      <div className='lg:h-[545px] lg:w-[375px] my-6 w-5/6 mx-auto '>
                <div className='h-[70px] w-full bg-[#7436FF]   rounded-t-md'>
                    <p className='text-white text-xl pl-5 pt-5 font-bold'>Exam Details</p>
                </div>
                <div className=' border-2 border-gray-300 flex flex-col rounded-b-md'>
                    <div className='w-4/5   border-b-[1px] border-[#E0E0E0] mx-auto'>

                        <div className='flex flex-row  p-4 text-[#37474F] font-bold'>

                            <div className='w-1/2'>
                                <p>Duration: </p>
                            </div>
                            <div className='w-1/2'>40 Min</div>

                        </div>
                    </div>
                    <div className='w-4/5   border-b-[1px] border-[#E0E0E0] mx-auto'>

                        <div className='flex flex-row  p-4 text-[#37474F] font-bold'>

                            <div className='w-1/2'>
                                <p>Count: </p>
                            </div>
                            <div className='w-1/2'>40 Questions</div>

                        </div>
                    </div>
                    <div className='w-4/5   border-b-[1px] border-[#E0E0E0] mx-auto'>

                        <div className='flex flex-row  p-4 text-[#37474F] font-bold'>

                            <div className='w-1/2'>
                                <p>Subject : </p>
                            </div>
                            <div className='w-1/2'>Computer Science</div>

                        </div>
                    </div>
                    <div className='w-4/5  border-b-[1px] border-[#E0E0E0] mx-auto'>

                        <div className='flex flex-row  p-4 text-[#37474F] font-bold '>


                            <div className='w-1/2'>
                                <p>Question  Pattern: </p>
                            </div>
                            <div className='w-1/2'>Subjective 	&amp; Objective</div>

                        </div>
                    </div>
                    <div className='w-4/5    border-[#E0E0E0] mx-auto'>

                        <div className='flex flex-row  p-4 text-[#37474F] font-bold'>

                            <div className='w-1/2'>
                                <p>Status : </p>
                            </div>
                            <div className='w-1/2'>05 Ongoing</div>

                        </div>
                    </div>
                    <div className='w-full bg-[#EBEBEB] '>


                        <div className='w-4/5  bg-[#EBEBEB] border-b-[1px] border-[#E0E0E0] mx-auto'>

                            <div className='flex flex-row  p-4 text-[#37474F] font-bold'>

                                <div className='w-1/2'>
                                    <p>Exam Fee :: </p>
                                </div>
                                <div className='w-1/2'>
                                    <div className='rounded-[60px] bg-[#7436FF] w-[4rem] px-1'>
                                        <button className='text-white '>Rs. 250</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row p-10'>
                        <div>

                            <Btn1>Enroll Now</Btn1>
                        </div>
                        <div className='my-auto ml-2'>
                            <p className='font-bold text-[#37474F]'>Take a Demo Test</p>
                        </div>
                    </div>



                    <div>

                    </div>

                </div>

            </div>
    </>
  )
}

export default ExamDetailCard