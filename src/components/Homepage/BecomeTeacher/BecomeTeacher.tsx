import React from 'react'
import Btn3 from '../../../Reusable/Button/Btn3'
import Btn4 from '../../../Reusable/Button/Btn4'

type Props = {}

const BecomeTeacher = (props: Props) => {
    return (
        <>

            <div className=" w-full bg-LadyTeacher bg-[center_top_-8rem]  bg-cover bg-no-repeat  ">
                <div className=' w-full bg-[#1B0057C2] '>
                    <div className='text-center py-[9rem]'>

                        <div className='flex flex-col space-y-[4rem] '>
                            <div>
                                <h1 className='text-white '>Become A Teacher <br />
                                    And Set Your Exams</h1>
                            </div>
                            <div>
                                <h3 className='text-white  mx-auto leading-8'>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.
                                </h3>
                            </div>
                            <div className=''>
                                <Btn4>Become A Teacher</Btn4>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default BecomeTeacher