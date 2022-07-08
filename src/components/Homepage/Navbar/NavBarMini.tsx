import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'
import Btn1 from '../../../Reusable/Button/Btn1'

type Props = {
    bar: any
    setBar: any
}

const NavBarMini = (props: Props) => {
    const [active, setActive] = useState<string>('home')
    console.log('hellow')
    return (
        <>
            <div className='flex flex-col  items-center space-y-4 justify-center lg:hidden  w-full relative bg-Theme ' >
                <div className='inline-block absolute right-4 top-5' onClick={()=>{props.setBar(!props.bar)}}>

                    <ImCross className='w-8 h-8 text-Orange inline-block' />
                </div>
                <div>
                    <Link href={'/'}>
                    <Image src="/homepage_images/Logomain.png" className='h-[4.5rem] w-[10.5rem] cursor-pointer' width={133} height={48} alt="" />
                    </Link>
                </div>

                <div className='flex flex-col text-center '>
                    {/* <div className={`${active === 'home'?`text-center $border-b-2 border-[#FF6F06] pb-2`:`text-center pb-2`}} onClick={()=>{setActive('home')}}> */}
                    <div className={`${active == "home" ? "border-b-2 border-Orange" : "text-center pb-2"}`} onClick={() => { setActive('home') }} >
                        <Link href={'/'}><span className='text-white hover:text-Orange cursor-pointer' >Home</span></Link>

                    </div>
                    <div className={`${active == "exam" ? "border-b-2 border-Orange" : "text-center pb-2"}`} onClick={() => { setActive('exam') }} >
                        <Link href={'/exam'}>
                            <span className='text-white hover:text-Orange' onClick={() => { setActive('exam') }}>Exam</span>
                        </Link>
                    </div>
                    <div>
                        <span className='text-white hover:text-Orange'>Upcomming Exam</span>
                    </div>
                    <div>
                        <span className='text-white hover:text-Orange'>Ongoing Exam</span>
                    </div>
                    <div className={`${active == "about" ? "border-b-2 border-Orange" : "text-center pb-2"}`} onClick={() => { setActive('about') }} >
                        <Link href={'/about'}>
                            <span className='text-white hover:text-Orange'>About</span>
                        </Link>
                    </div>
                    <div className='mb-4'>

                    <Link href={'/login'}>
                        <div className='flex flex-col space-y-4 '>

                            <div className='flex border-[1px] border-white p-2  rounded-full'>
                                <AiOutlineSearch className='w-7 h-7 text-white mr-1 my-auto' />
                                <input type="text" placeholder='Find Your Exam' className='outline-none bg-Theme text-white placeholder:text-slate-300' />
                            </div>
                            <div >
                                <Btn1>Login/SignUp</Btn1>

                            </div>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>



        </>
    )
}

export default NavBarMini