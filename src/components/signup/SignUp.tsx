import Link from 'next/link'
import React, { useState } from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import Btn2 from '../../Reusable/Button/Btn2'
import Image from 'next/image'

type Props = {}

const SignUp = (props: Props) => {
    const [eye, seteye] = useState(true)
    return (
        <>
            <div className='bg-[#F8F8F8] '>
                <div className='flex flex-col lg:flex-row justify-center p-8 my-auto'>


                    <div className='w-full flex flex-col lg:flex-row justify-center my-auto '>


                        <div className='lg:w-1/2 w-full '>
                            <div className='flex flex-row-reverse'>

                                <Image src="/slr/login.png" className=' h-[656px]' height={600} width={600} alt="" />
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>

                            <div className='w-full lg:w-4/5 py-[4rem] px-[2rem]  bg-white ' >
                                <p className='font-inter font-semibold text-4xl text-[#323232]'>Welcome Back</p>
                                <p className='text-[#ABABAB] font-inter text-lg'>Create your account</p>

                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:pr-[8rem]'>
                                    <div className='flex flex-col mt-5'>
                                        <p className='font-inter text-[#455A64] text-[16px] font-bold'>Username*</p>
                                        <div className='border-[1px] border-gray-300 p-2 rounded-[5px]  '>

                                            <input type="text" className='border-gray-300 outline-none placeholder:text-[#ABABAB] text-[#ABABAB] font-inter  placeholder:font-inter' placeholder='Enter username' />
                                        </div>

                                    </div>
                                    <div className='flex flex-col mt-5'>
                                        <p className='font-inter text-[#455A64] text-[16px] font-bold'>Full Name*</p>
                                        <div className='border-[1px] border-gray-300 p-2 rounded-[5px]  '>

                                            <input type="text" className='border-gray-300 outline-none placeholder:text-[#ABABAB] text-[#ABABAB] font-inter  placeholder:font-inter' placeholder='John Deo' />
                                        </div>

                                    </div>
                                    <div className='flex flex-col mt-5'>
                                        <p className='font-inter text-[#455A64] text-[16px] font-bold'>Email*</p>
                                        <div className='border-[1px] border-gray-300 p-2 rounded-[5px]  '>

                                            <input type="text" className='border-gray-300 outline-none placeholder:text-[#ABABAB] text-[#ABABAB] font-inter  placeholder:font-inter' placeholder='Enter email' />
                                        </div>

                                    </div>
                                    <div className='flex flex-col mt-5'>
                                        <p className='font-inter text-[#455A64] text-[16px] font-bold'>Phone</p>
                                        <div className='border-[1px] border-gray-300 p-2 rounded-[5px]  '>

                                            <input type="text" className='border-gray-300 outline-none placeholder:text-[#ABABAB] text-[#ABABAB] font-inter  placeholder:font-inter' placeholder='Enter email' />
                                        </div>

                                    </div>
                                    <div className='flex flex-col mt-5'>
                                        <p className='font-inter text-[#455A64] text-[16px] font-bold'>Role*</p>
                                        <div className='border-[1px] border-gray-300 p-2 rounded-[5px]  '>

                                            <input type="text" className='border-gray-300 outline-none placeholder:text-[#ABABAB] text-[#ABABAB] font-inter  placeholder:font-inter' placeholder='Choose role' />
                                        </div>

                                    </div>
                                    <div className='flex flex-col mt-5'>
                                        <p className='font-inter text-[#455A64] text-[16px] font-bold'>Password*</p>
                                        <div className='border-[1px] border-gray-300 p-2 rounded-[5px] flex justify-between '>
                                            <div>
                                                <input type="text" className='border-gray-300 outline-none placeholder:text-[#ABABAB] text-[#ABABAB]  placeholder:font-inter' placeholder='Enter password' />
                                            </div>
                                            <div>
                                                {eye ?
                                                    <BsFillEyeFill className='w-6 h-6 text-[#455A64] hover:text-Theme ease-in-out duration-100' onClick={() => { seteye(!eye) }} />
                                                    : <BsFillEyeSlashFill className='w-6 h-6 text-[#455A64] hover:text-Theme ease-in-out duration-100' onClick={() => { seteye(!eye) }} />}
                                            </div>
                                        </div>

                                    </div>
                                   


                                </div>
                                <div className='mt-10'>
                                    <Btn2>Signup</Btn2>

                                </div>
                                <div className='mt-8'>
                                    <span className=' text-[#ABABAB]'>Already have an account?</span>
                                    <Link href="/login">
                                        <span className=' text-Orange font-inter mt-8 cursor-pointer ml-2 hover:text-Theme'>Login</span>
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

export default SignUp