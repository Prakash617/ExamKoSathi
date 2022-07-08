import React from 'react'

type Props = {

    children: any
}

const Btn3 = (props: Props) => {
    return (
        <>

            <button className='border-[1px] px-8 py-3 bg-white border-Theme text-Theme hover:bg-Theme hover:border-Theme hover:text-white rounded-full ease-in-out duration-300 bold'>

                {props.children}

            </button>
        </>
    )
}

export default Btn3