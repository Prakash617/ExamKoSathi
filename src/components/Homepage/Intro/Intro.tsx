import Image from 'next/image'
import React from 'react'
import Btn1 from '../../../Reusable/Button/Btn1'
import Btn2 from '../../../Reusable/Button/Btn2'
import Btn3 from '../../../Reusable/Button/Btn3'


type Props = {}

const Intro = (props: Props) => {
  return (
    <>

      <div className='w-4/5 mx-auto mt-4'>
        <div className='flex flex-col-reverse  lg:flex-row'>
          <div className='lg:w-1/2 w-full p-8 '>
            <div className="flex flex-col space-y-12 md:w-4/5 w-full">
              <div className=' rounded-full bg-gray-100 w-full '>
                <div className='flex '>
                  <div className='bg-Orange rounded-full p-2'>
                    <Image src="/homepage_images/logologo2.png" className=' ' width={'103px'} height={'38px'} alt="logo2.jpeg" />
                  </div>
                  <div className='my-auto mx-auto '>
                    <p className='text-xl extrabold font-jost font-bold text-[#37474F]  '>Now take and give exam online</p>
                  </div>
                </div>

              </div>
              <div>
                <p className='text-4xl leading-[4.5rem] font-jost text-Header font-[800] '>We Help To Upgrade Your Knowlegde Effectively</p>
              </div>
              <div >
                <p className=' font-jost font-[500] text-Header text-lg  '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
              <div className='flex lg:flex-row flex-col  space-y-3 lg:space-x-8'>
                <div></div>

                <div className=''>

                  <Btn2>Take Exam</Btn2>
                </div>
                <div className=''>

                  <Btn3>List Exam</Btn3>
                
                </div>
              </div>

            </div>

          </div>
          <div className='px-[5rem] flex justify-center'>
            <Image src="/homepage_images/hero image.png" className='' width={600} height={600} alt="" />
          </div>


        </div>
      </div>


    </>
  )
}

export default Intro