import React, { useState } from 'react'
import Btn1 from '../../Reusable/Button/Btn1'
import Btn2 from '../../Reusable/Button/Btn2'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Login = (props: Props) => {

    const [eye, seteye] = useState(true)
    return (
        < >
            <div className='bg-[#F8F8F8] w-full'>
                <div className='flex flex-row justify-center  lg:my-auto'>


                    <div className='w-full flex flex-col lg:flex-row justify-center items-center lg:my-auto h-full'>


                        <div className='lg:w-1/2 w-full items-end  '>
                            <div className=' lg:pl-[16rem] my-auto '>

                                <Image src="/slr/login.png" className='w-[50rem]' width={600} height={600} alt="" />
                            </div>
                        </div>
                        <div className='lg:w-1/2 w-full '>

                            <div className=' h-full w-full  lg:w-4/5 py-[4rem] px-[2rem]  bg-white ' >
                                <p className='font-inter font-semibold text-4xl text-[#323232]'>Welcome Back</p>
                                <p className='text-[#ABABAB] font-inter text-lg'>Login your account</p>

                                <div className='flex flex-col mt-5'>
                                    <p className='font-inter text-[#455A64] text-[16px] font-bold'>Username</p>
                                    <div className='border-[1px] border-gray-300 p-2 rounded-[5px] w-full lg:w-3/5 '>

                                        <input type="text" className='border-gray-300 outline-none placeholder:text-[#ABABAB] text-[#ABABAB] font-inter  placeholder:font-inter' placeholder='Enter username' />
                                    </div>

                                </div>
                                <div className='flex flex-col mt-5'>
                                    <p className='font-inter text-[#455A64] text-[16px] font-bold'>Password</p>
                                    <div className='border-[1px] border-gray-300 p-2 rounded-[5px] w-full lg:w-3/5 flex justify-between'>

                                        <input type="text" className='border-gray-300 outline-none placeholder:text-[#ABABAB] text-[#ABABAB]  placeholder:font-inter' placeholder='Enter password' />

                                        {eye ?
                                            <BsFillEyeFill className='w-6 h-6 text-[#455A64] hover:text-Theme ease-in-out duration-100' onClick={() => { seteye(!eye) }} />
                                            : <BsFillEyeSlashFill className='w-6 h-6 text-[#455A64] hover:text-Theme ease-in-out duration-100' onClick={() => { seteye(!eye) }} />}
                                    </div>
                                    <p className='border-gray-300 outline-none placeholder:text-[#ABABAB] text-[#ABABAB] font-inter mt-4'>Forget password?</p>

                                </div>

                                <div className='mt-10'>
                                    <Btn2>Login</Btn2>

                                </div>
                                <div>
                                    <p className='border-gray-300  text-[#ABABAB] font-inter mt-8'>Don’t you have an account?
                                        <Link href={'/signup'}>
                                            <span className='text-Orange ml-2 cursor-pointer hover:text-Theme'>Signup</span>
                                        </Link>
                                    </p>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Login