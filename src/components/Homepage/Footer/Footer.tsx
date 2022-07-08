import React from 'react'
import { FiMail } from 'react-icons/fi'
import { AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { FaBloggerB, FaFacebookF } from 'react-icons/fa'
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <div className='bg-black opacity-[0.87] w-full '>

                <div className='grid grid-cols-1 lg:grid-cols-4 '>
                    <div className='flex flex-col'>
                        <div className='text-center p-[2rem] m-2  space-y-8'>

                            <div> <Image src="/homepage_images/logologo2.png" className='mx-auto w-[188px] ' width={188} height={68}  alt="" /></div>
                            <div className='p-5'>
                                <h3 className='text-white font-[16px] bold'>The point of using Lorem Ipsum is
                                    that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing.</h3>
                            </div>
                        </div>

                    </div>


                    <div className='flex flex-col'>
                        <div className=' p-[2rem] m-2  space-y-4'>

                            <div className=''>
                                <p className='text-2xl font-extrabold  text-white'>Get In Touch</p>
                                <div className='border-b-2 border-Orange h-1 w-[4rem]'></div>
                            </div>
                            <div className='flex flex-col space-y-5 '>
                                <div className='flex flex-row'>
                                    <div className='inline-block rounded-full border-[1px] border-Orange'>
                                        <FiMail className=' w-[2rem] h-[2rem]  text-Orange m-2 ' />
                                    </div>
                                    <div className=' flex flex-col ml-4 text-left'>
                                        <div >

                                            <p className='cardhead !text-white '>Email Address</p>
                                        </div>
                                        <div>
                                            <p className='text-white text-md'>testmail@testmail.com</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='inline-block rounded-full border-[1px] border-Orange'>
                                        <AiOutlinePhone className=' w-[2rem] h-[2rem]  text-Orange m-2 ' />
                                    </div>
                                    <div className=' flex flex-col ml-4 text-left'>
                                        <div >

                                            <p className='cardhead !text-white '>Phone Contact</p>
                                        </div>
                                        <div>
                                            <p className='text-white text-md'>+977-9837485974</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='inline-block rounded-full border-[1px] border-Orange'>
                                        <GoLocation className=' w-[2rem] h-[2rem]  text-Orange m-2 ' />
                                    </div>
                                    <div className=' flex flex-col ml-4 text-left'>
                                        <div >

                                            <p className='cardhead !text-white '>Address</p>
                                        </div>
                                        <div>
                                            <p className='text-white text-md'>Kathmandu, Nepal</p>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col'>
                        <div className=' p-[2rem] m-2  space-y-4'>

                            <div className=''>
                                <p className='text-2xl font-extrabold  text-white'>Our Links</p>
                                <div className='border-b-2 border-Orange h-1 w-[4rem]'></div>
                            </div>
                            <div className='flex flex-col space-y-5 '>



                                <div className=' flex flex-col space-y-4'>
                                    <div >

                                        <p className='cardhead !text-white '>Support</p>
                                    </div>
                                    <div >

                                        <p className='cardhead !text-white '>About us</p>
                                    </div>
                                    <div >

                                        <p className='cardhead !text-white '>Contact Us</p>
                                    </div>
                                    <div >

                                        <p className='cardhead !text-white '>Upcoming Exams</p>
                                    </div>
                                    <div >

                                        <p className='cardhead !text-white '>Become a Teacher</p>
                                    </div>


                                </div>



                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col'>
                        <div className=' p-[2rem] m-2  space-y-4'>

                            <div className=''>
                                <p className='text-2xl font-extrabold  text-white'>Social Media Links</p>
                                <div className='border-b-2 border-Orange h-1 w-[4rem]'></div>
                            </div>
                            <div className='flex flex-col space-y-5 '>
                                <div className='grid grid-cols-3 lg:grid-cols-3 space-y-5 w-[14rem]'>
                                    
                                    
                                    <div className='h-[55px] mt-5 w-[55px] rounded-[5px] bg-[#4B6EA8] flex justify-center items-center'>
                                        <FaFacebookF className='text-white h-8 w-8 cursor-pointer hover:h-10 hover:w-10'/>
                                    </div>
                                    <div className='h-[55px] w-[55px] rounded-[5px] bg-[#4FD5F8] flex justify-center items-center'>
                                        <BsTwitter className='text-white h-8 w-8 cursor-pointer hover:h-10 hover:w-10'/>
                                    </div>
                                    <div className='h-[55px] w-[55px] rounded-[5px] bg-[#0189C3] flex justify-center items-center'>
                                        <BsLinkedin className='text-white h-8 w-8 cursor-pointer hover:h-10 hover:w-10'/>
                                    </div>
                                    <div className='h-[55px] w-[55px] rounded-[5px] bg-[#E14B90] flex justify-center items-center'>
                                        <BsInstagram className='text-white h-8 w-8 cursor-pointer hover:h-10 hover:w-10'/>
                                    </div>
                                    <div className='h-[55px] w-[55px] rounded-[5px] bg-[#F70000] flex justify-center items-center'>
                                        <BsYoutube className='text-white h-8 w-8 cursor-pointer hover:h-10 hover:w-10'/>
                                    </div>
                                    <div className='h-[55px] w-[55px] rounded-[5px] bg-[#ED7900] flex justify-center items-center'>
                                        <FaBloggerB className='text-white h-8 w-8 cursor-pointer hover:h-10 hover:w-10'/>
                                    </div>
                                   

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer