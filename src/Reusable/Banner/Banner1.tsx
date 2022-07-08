
import React from 'react'

type Props = {
    title:any
    catagory:any
}

const Banner1 = (props: Props) => {
    return (
        <>
            <div className=" w-full bg-about bg-[center_bottom_-60rem] bg-cover bg-no-repeat  ">

                <div className='bg-black/[0.76] w-full'>
                    <div className='flex flex-row justify-center items-center sm:text-red'>
                        <div className='flex flex-col text-center p-[7rem] space-y-4'>

                            <div>
                                <h1 className='!text-white'>{props.title}</h1>
                            </div>
                            <div>
                                <p className='text-white text-lg '>Home - <span className='text-Orange' >{props.catagory}</span> </p>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        </>
    )
}

export default Banner1