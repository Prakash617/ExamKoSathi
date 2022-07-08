import React from 'react'
import Image from 'next/image'

type Props = {}

const List = (props: Props) => {
    return (
        <div>

            <div className=' flex flex-col space-y-10 lg:pr-[12rem] '>

                <div>

                    <p className='text-4xl text-[#37474F] font-jost font-extrabold'>Topics Covered in the Exam</p>
                </div>

                <div className='flex-col space-y-5 lg:pr-40'>

                    <div className='flex  align-middle'>

                        <div><Image src="/homepage_images/Vector.svg" className='inline-block mr-2'width={16.67} height={16.67}  alt="" /></div>
                        <div>

                            <p className='font-jost font-[500] text-[#2D2D2D] text-xl'>All the Lorem Ipsum Internet tend to repeat.</p>
                        </div>
                    </div>
                    <div className='flex  align-middle'>

                        <div><Image src="/homepage_images/Vector.svg" className='inline-block mr-2'width={16.67} height={16.67}  alt="" /></div>
                        <div>

                            <p className='font-jost font-[500] text-[#2D2D2D] text-xl'>All the Lorem Ipsum Internet tend to repeat.</p>
                        </div>
                    </div>
                    <div className='flex  align-middle'>

                        <div><Image src="/homepage_images/Vector.svg" className='inline-block mr-2'width={16.67} height={16.67}  alt="" /></div>
                        <div>

                            <p className='font-jost font-[500] text-[#2D2D2D] text-xl'>All the Lorem Ipsum Internet tend to repeat.</p>
                        </div>
                    </div>
                    <div className='flex  align-middle'>

                        <div><Image src="/homepage_images/Vector.svg" className='inline-block mr-2'width={16.67} height={16.67}  alt="" /></div>
                        <div>

                            <p className='font-jost font-[500] text-[#2D2D2D] text-xl'>All the Lorem Ipsum Internet tend to repeat.</p>
                        </div>
                    </div>
                    <div className='flex  align-middle'>

                        <div><Image src="/homepage_images/Vector.svg" className='inline-block mr-2'width={16.67} height={16.67}  alt="" /></div>
                        <div>

                            <p className='font-jost font-[500] text-[#2D2D2D] text-xl'>All the Lorem Ipsum Internet tend to repeat.</p>
                        </div>
                    </div>
                    

                </div>



            </div>
        </div>
    )
}

export default List