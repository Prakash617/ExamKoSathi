import React from 'react'
import { IoMailSharp } from 'react-icons/io5'

type Props = {}

const ContactCard = (props: Props) => {
    return (
        <>
            <div className='w-[370px] h-[281px] bg-white shadow-xl text-center p-10 rounded-[10px'>
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

                    </div>

        </>
    )
}

export default ContactCard