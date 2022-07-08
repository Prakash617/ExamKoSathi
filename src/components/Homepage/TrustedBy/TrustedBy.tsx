import React from 'react'
import Caraousel1 from '../../../Reusable/Caraousel/Caraousel1'
import TrustedCarousel from './TrustedCarousel'

type Props = {}

const TrustedBy = (props: Props) => {
    return (
        <>
            <div className='text-center space-y-4 my-[8rem]'>
                <h1>Trusted by Best Teachers</h1>
                <p className='text-[#37474F]'>It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout.</p>

                {/* <div className='flex flex-row justify-center w-3/5'> */}
                <div className='w-full flex justify-center'>
                    <div className=' w-3/4  mx-auto'>

                        <TrustedCarousel />
                    </div>

                </div>

                {/* </div> */}
            </div>

        </>
    )
}

export default TrustedBy