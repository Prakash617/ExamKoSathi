import React from 'react'
import Banner1 from '../../Reusable/Banner/Banner1'
import Btn2 from '../../Reusable/Button/Btn2'
import Card from '../Homepage/ChoiceOfExam/Card'
import { IoMailSharp } from 'react-icons/io5'
import { IoMdCall } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import ContactCard from './ContactCard'
import { BsFillTelephoneForwardFill } from 'react-icons/bs'

type Props = {}

const Contact = (props: Props) => {
    return (
        <div className=''>
            <div>

                <Banner1 title={'Contact'} catagory={'Contact'} />
            </div>
            <div >
                <div className='text-center my-10'>

                    <h1 className=''>Drop Us a Line</h1>
                </div>
                <div className='flex flex-col lg:flex-row justify-center bg-white '>

                    <div className='flex flex-col   space-y-10'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 items-center lg:space-x-6 pl-[6px]'>
                           
                                
                            
                            
                                <div className='flex flex-col mt-5'>
                                    <div className='border-[1px] border-gray-300 p-2 rounded-[5px]   '>

                                        <input type="text" className='border-gray-300 w-full outline-none placeholder:text-[#ABABAB] text-[#ABABAB] font-inter  placeholder:font-inter' placeholder='Name' />
                                    </div>

                                </div>
                                <div className='flex flex-col mt-5'>
                                    <div className='border-[1px] border-gray-300 p-2 rounded-[5px]   '>

                                        <input type="text" className='border-gray-300 w-full outline-none placeholder:text-[#ABABAB] text-[#ABABAB] font-inter  placeholder:font-inter' placeholder='Email' />
                                    </div>

                                </div>
                            

                        </div>
                        <div className=' pl-[6px]'>
                            <textarea name="textarea" className='w-full outline-none border-[1px] border-gray-300 p-2 h-[15rem] rounded-[5px]  ' placeholder='Message' ></textarea>
                        </div>
                        <div className='flex justify-center'>
                            <div>

                                <Btn2 >
                                    Send Message
                                </Btn2>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center mx-auto space-y-4 space-x-8 lg:py-16 '>
                    <div>

                        <ContactCard />
                    </div>
                    <div>

                        <ContactCard />
                    </div>
                    <div>

                        <ContactCard />
                    </div>
                    

                        {/* <div className='bg-white shadow-xl text-center p-10 rounded-[10px'>
                            <div className='flex flex-col space-y-6'>
                                <div className='rounded-full bg-Theme h-[94px] mx-auto  w-[94px] flex justify-center items-center'>
                                    <div>

                                        <IoMailSharp className='h-9 w-9 text-white m-8' />
                                    </div>
                                </div>
                                <div>
                                    <p className='text-xl font-extrabold '>Email Us</p>
                                </div>
                                <div>
                                    <p className='text-lg '>testmail@teastmail.com</p>
                                </div>

                            </div>

                        </div> */}
                    

                        {/* <div className=' bg-white shadow-xl text-center p-10 rounded-[10px'>
                            <div className='flex flex-col space-y-6'>
                                <div className='rounded-full bg-Theme h-[94px] mx-auto  w-[94px] flex justify-center items-center'>
                                    <div>

                                        <BsFillTelephoneForwardFill className='h-9 w-9 text-white m-8' />
                                    </div>
                                </div>
                                <div>
                                    <p className='text-xl font-extrabold '>Call Us</p>
                                </div>
                                <div>
                                    <p className='text-lg '>+977-9837485974</p>
                                </div>

                            </div>

                        </div> */}
                    
                    

                        {/* <div className=' bg-white shadow-xl text-center mx-auto p-10 rounded-[10px'>
                            <div className='flex flex-col space-y-6'>
                                <div className='rounded-full bg-Theme h-[94px] mx-auto  w-[94px] flex justify-center items-center'>
                                    <div>

                                        <IoMailSharp className='h-9 w-9 text-white m-8' />
                                    </div>
                                </div>
                                <div>
                                    <p className='text-xl font-extrabold '>Location</p>
                                </div>
                                <div>
                                    <p className='text-lg '>We are taking exams online</p>
                                </div>

                            </div>

                        </div> */}

                        {/* <div className=' bg-white shadow-xl text-center mx-auto p-10 rounded-[10px'>
                            <div className='flex flex-col space-y-6'>
                                <div className='rounded-full bg-Theme h-[94px] mx-auto  w-[94px] flex justify-center items-center'>
                                    <div>

                                        <IoMailSharp className='h-9 w-9 text-white m-8' />
                                    </div>
                                </div>
                                <div>
                                    <p className='text-xl font-extrabold '>Location</p>
                                </div>
                                <div>
                                    <p className='text-lg '>We are taking exams online</p>
                                </div>

                            </div>

                        </div> */}
                        {/* <div className=' bg-white shadow-xl text-center p-10 rounded-[10px'>
                            <div className='flex flex-col space-y-6'>
                                <div className='rounded-full bg-Theme h-[94px] mx-auto  w-[94px] flex justify-center items-center'>
                                    <div>

                                        <IoLocationSharp className='h-9 w-9 text-white m-8' />
                                    </div>
                                </div>
                                <div>
                                    <p className='text-xl font-extrabold '>Location</p>
                                </div>
                                <div>
                                    <p className='text-lg '>We are taking exams online</p>
                                </div>

                            </div>

                        </div> */}
                    


                </div>

            </div>
        </div>
    )
}

export default Contact