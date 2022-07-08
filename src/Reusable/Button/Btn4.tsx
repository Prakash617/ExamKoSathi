import React from 'react'

type Props = {

    children: any
}

const Btn4 = (props: Props) => {
    return (
        <>

            <button className='border-[1px] px-8 py-3 bg-transparent  border-white text-white hover:bg-white hover:border-Theme hover:text-Theme rounded-full ease-in-out duration-300 bold'>

                {props.children}

            </button>
        </>
    )
}

export default Btn4