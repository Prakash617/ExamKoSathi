import React from 'react'
import Image from 'next/image'

type Props = {}

const TrustedCard = (props: Props) => {
    return (
        <>
            <div className='lg:w-[575px] mx-auto lg:h-[321px] mb-[0.12rem] shadow-xl p-[3rem] ml-3'>
                <div className='flex flex-col lg:flex-row lg:justify-center items-center space-x-8'>
                    <div className='bg-Orange h-[138px] w-[138px] inline-block rounded-full relative'>
                        <div className=' rounded-full absolute bottom-0 right-1'>

                            <Image src="/homepage_images/created.png" className=' rounded-full absolute bottom-1 right-1' height={138} width={138} alt="" />
                        </div>


                    </div>
                    <div className='text-left my-auto '>
                        <p className='text-2xl font-semibold text-[#37474F]'>Sarah Jain</p>
                        <p className='text-[#37474F] text-sm'>Physics 	&amp; Biology</p>
                    </div>
                    <div className=' my-auto'>
                        <Image src="/homepage_images/comma.png" className='w-[128.67px] h-[80.42px]' height={80.42} width={128.67}  alt="" />
                    </div>

                </div>
                <div className='my-5'>
                    <p className='text-[#37474F] text-justify'>Grursus mal suada faci lisis Lorem ipsum dolarorit more the and
                        ametion consectetur elit. Vesti at bulum odio aea the dumm
                        the ipsumm suada and consectetur elit.
                    </p>
                </div>

            </div>
        </>
    )
}

export default TrustedCard