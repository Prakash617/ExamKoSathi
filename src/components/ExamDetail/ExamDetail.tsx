import React from 'react'
import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'
import { BsFillBookmarksFill } from 'react-icons/bs'
import Banner1 from '../../Reusable/Banner/Banner1'
import CreatedBy from './CreatedBy/CreatedBy'
import FeedBack from './FeedBack'
import List from './List'
import ExamCatagories from './SideCard/ExamCatagories'
import ExamDetailCard from './SideCard/ExamDetailCard'
import RelatedExamCard from './SideCard/RelatedExamCard'


type Props = {}

const ExamDetail = (props: Props) => {
    return (
        <>
            <div className=''>
                <div>
                    <Banner1 title={'Exams'} catagory={'Exams'} />
                </div>
                <div className='lg:px-[16rem]  lg:py-[7rem] flex flex-col-reverse lg:flex-row justify-center '>
                    <div className='w-full lg:w-3/5 flex flex-col'>
                        <div className='flex flex-col p-6 space-y-10'>
                            <div>

                                <p className='text-4xl text-[#37474F] font-jost font-extrabold'>Advnace Computer Exam</p>
                            </div>
                            <div className='flex justify-between lg:my-3 lg:pr-[6rem] '>
                                <div className='flex space-x-2'>
                                    <div>
                                        <div className='flex space-x-6'>
                                            <div>
                                                <AiOutlineClockCircle className='h-5 w-5 mb-1 text-Orange inline-block my-auto' />
                                                <span>23, June - 30, July 2022</span>

                                            </div>
                                            <div>
                                                <BsFillBookmarksFill className='h-5 w-5 text-Orange inline-block my-auto' />
                                                <span>30 Ongoing</span>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <AiFillStar className='h-5 w-5 text-Orange inline-block my-auto mb-1' />
                                        <span>4.0</span>

                                    </div>
                                </div>



                            </div>
                            <div className='flex flex-col space-y-7 lg:pr-[14rem]'>
                                <div>
                                    <p className='text-[#37474F] font-inter'>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio
                                        is aeao the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit.
                                        All the that Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary,
                                        making this the first true dummy generator on the Internet.</p>
                                </div>
                                <div>
                                    <p className='text-[#37474F] font-inter'>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio
                                        is aeao the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit.
                                        All the that Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary,
                                        making this the first true dummy generator on the Internet.</p>
                                </div>
                                <div>
                                    <p className='text-[#37474F] font-inter'>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio
                                        is aeao the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit.
                                        All the that Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary,
                                        making this the first true dummy generator on the Internet.</p>
                                </div>

                            </div>
                            <div className='flex flex-col space-y-10 ' >

                                <List></List>
                                <List></List>

                            </div>
                            <div>
                                <CreatedBy />
                            </div> 

                             <div>
                                 <FeedBack />
                             </div> 

                        </div>

                    </div>
                    <div className='flex flex-row justify-center'>

                        <div className='lg:w-2/5 w-full flex   flex-col space-y-[4rem]'>
                            <div className=''>

                                <ExamDetailCard />
                            </div>
                            <div className=''>

                                <ExamCatagories />
                            </div>

                            <div className=''>
                                <RelatedExamCard />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ExamDetail