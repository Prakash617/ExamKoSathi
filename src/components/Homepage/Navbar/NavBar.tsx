import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import Btn1 from '../../../Reusable/Button/Btn1'
import NavBarMini from './NavBarMini'


type Props = {}

const NavBar = (props: Props) => {
  const [active, setActive] = useState<string>('home')
  const [bar, setBar] = useState<any>(false)


  // console.log(active)
  return (
    <>
      <div className=' relative'>
    {!bar?
        <div className='lg:flex lg:flex-row items-center justify-center hidden  w-full h-[7.25rem]  bg-Theme' >
          <div>
            <Link href={'/'}>
              <Image src="/homepage_images/Logomain.png" className='h-[4.5rem] w-[10.5rem] cursor-pointer' width={133} height={48} alt="" />
            </Link>
          </div>
          <div className='flex justify-between ml-[6rem]  '>
            <div className='flex space-x-7 mr-[8rem] p-3 '>
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
            </div>
            <Link href={'/login'}>
              <div className='flex space-x-9'>

                <div className='flex border-[1px] border-white p-2  rounded-full'>
                  <AiOutlineSearch className='w-7 h-7 text-white mr-1 my-auto' />
                  <input type="text" placeholder='Find Your Exam' className='outline-none bg-Theme text-white placeholder:text-slate-300' />
                </div>
                <div className=''>
                  <Btn1>Login/SignUp</Btn1>

                </div>
              </div>
            </Link>
          </div>

        </div>
          : <></> }
        <div>


          {
            bar ? <NavBarMini bar={bar} setBar={setBar}  />:
             <div className='lg:hidden cursor-pointer relative' onClick={() => { setBar(true) }}>
              <FaBars className='h-8 w-8 text-Orange absolute right-3 top-2' />

            </div>
          }
        </div>

      </div>
    </>
  )
}

export default NavBar