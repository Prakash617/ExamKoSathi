import React from 'react'
import CreatedByCard from './CreatedByCard'

type Props = {}

const CreatedBy = (props: Props) => {
    return (
        <>
            <div className='flex flex-col'>
                <div className='flex flex-col space-y-8'>
                    <div>

                        <p className='text-4xl text-[#37474F] font-jost font-extrabold'>Exam Created By</p>
                    </div>
                    <div>
                        <CreatedByCard/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CreatedBy