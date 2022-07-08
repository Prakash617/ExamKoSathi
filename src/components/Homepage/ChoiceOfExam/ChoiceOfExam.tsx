import React from 'react'
import Btn2 from '../../../Reusable/Button/Btn2'
import Btn3 from '../../../Reusable/Button/Btn3'
import { BsBookmarksFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import Card from './Card'
import Btn1 from '../../../Reusable/Button/Btn1'

type Props = {}

const ChoiceOfExam = (props: Props) => {
    return (
        <>
            <div className='flex flex-row justify-center items-center pt-[6rem] p-5'>
                <div>
                    <div className='flex flex-col space-y-8 ' >
                        <div className='mx-auto'>

                            <h1 className='text-center'>Get Choices of your Exam</h1>



                        </div>
                        <div className='mx-auto'>
                            <h3 className='text-center'> It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.</h3>
                        </div>
                        <div className='flex flex-row space-x-6 flex-wrap gap-y-4 justify-center'>
                            <div className='ml-4'>

                                <Btn2 >All Exam</Btn2>
                            </div>
                            <Btn3>Computer</Btn3>
                            <Btn3>Mathematics</Btn3>
                            <Btn3>Science</Btn3>
                            <Btn3>Economics</Btn3>
                            <Btn3>More Exams</Btn3>
                        </div>

                    </div>
                </div>



            </div>
            <div>
                <div className='grid md:grid-cols-2 grid-cols-1 xl:grid-cols-2  2xl:grid-cols-4 w-5/6 mx-auto lg:px-[6rem] gap-[3rem] gap-x-[3rem]  py-[5rem]'>
                    <div className=' mx-auto'>
                        <Card />
                  
                    </div>
                    <div className=' mx-auto'>
                        <Card />
                  
                    </div>
                    <div className=' mx-auto'>
                        <Card />
                  
                    </div>
                    <div className=' mx-auto'>
                        <Card />
                  
                    </div>
                    <div className=' mx-auto'>
                        <Card />
                  
                    </div>
                    <div className=' mx-auto'>
                        <Card />
                  
                    </div>
                    <div className=' mx-auto'>
                        <Card />
                  
                    </div>
                    <div className=' mx-auto'>
                        <Card />
                  
                    </div>
            
                </div>

            </div>
            <div className='flex justify-center  mb-[6rem] '>

                <Btn2>More Exams</Btn2>
            </div>
        </>
    )
}

export default ChoiceOfExam