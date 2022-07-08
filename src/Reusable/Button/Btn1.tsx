import React from 'react'

type Props = {
    children: any

}

const Btn1 = (props: Props) => {
    return (
        <>
            <button className=' border-[1px] border-Orange px-6 py-3 bg-Orange text-white hover:bg-white hover:border-Orange hover:text-Orange rounded-full ease-in-out duration-300 bold'>

                {props.children}

            </button>
        </>
    )
}

export default Btn1