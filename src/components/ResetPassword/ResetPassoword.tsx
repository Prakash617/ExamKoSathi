import React, { useState } from 'react'
import Btn1 from '../../Reusable/Button/Btn1'
import Btn2 from '../../Reusable/Button/Btn2'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const ResetPassoword = (props: Props) => {

    const [eye, seteye] = useState(true)
    return (
        < >
            <div className='bg-[#F8F8F8]'>
                <div className='flex flex-row justify-center h-screen my-auto'>


                    <div className='w-full flex flex-row justify-center my-auto '>


                        <div className='w-1/2 '>
                            <div className='flex flex-row-reverse lg:ml-[20rem] '>

                                <Image src="/slr/login.png" className='' width={600} height={600} alt="" />
                            </div>
                        </div>
                        <div className='w-1/2'>

                            <div className=' h-full w-4/5 py-[4rem] px-[2rem]  bg-white ' >
                                <p className='font-inter font-semibold text-4xl text-[#323232]'>Reset your password</p>
                                <p className='text-[#ABABAB] font-inter text-lg'>The verification email will be sent to the mailbox.
                                    Please check it.</p>

                                <div className='flex flex-col mt-5'>
                                    <p className='font-inter text-[#455A64] text-[16px] font-bold'>Enter your email</p>
                                    <div className='border-[1px] border-gray-300 p-2 rounded-[5px] w-3/5 '>

                                        <input type="text" className='border-gray-300 outline-none placeholder:text-[#ABABAB] text-[#ABABAB] font-inter  placeholder:font-inter' placeholder='Enter email' />
                                    </div>

                                </div>
                                <div className='flex flex-col mt-5'>
                                    <p className='font-inter text-[#455A64] text-[16px] font-bold'>Enter verification code</p>
                                    <div className='border-[1px] border-gray-300 p-2 rounded-[5px] w-3/5 flex justify-between'>

                                        <input type="text" className='border-gray-300 outline-none placeholder:text-[#ABABAB] text-[#ABABAB]  placeholder:font-inter' placeholder='Enter code' />

                                        {eye ?
                                            <BsFillEyeFill className='w-6 h-6 text-[#455A64] hover:text-Theme ease-in-out duration-100' onClick={() => { seteye(!eye) }} />
                                            : <BsFillEyeSlashFill className='w-6 h-6 text-[#455A64] hover:text-Theme ease-in-out duration-100' onClick={() => { seteye(!eye) }} />}
                                    </div>
                                    <p className='border-gray-300 outline-none placeholder:text-[#ABABAB] text-[#ABABAB] font-inter '>Forget password?</p>

                                </div>

                                <div className='mt-10'>
                                    <Btn2>Verify</Btn2>

                                </div>
                                <div>
                                    <Link href="/login">
                                        <p className='border-gray-300  text-[#ABABAB] font-inter mt-8 cursor-pointer'>Back to login</p>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassoword