import React from 'react'
import SignUpImage from "../assets/img.png"

const LeftSide = () => {
    return (
        <div className='w-[45%] hidden md:flex flex-col gap-8 items-center justify-center text-white'>
            <h1 className='text-4xl font-normal text-center'>Sign up <br /> and come on in</h1>
            <img src={SignUpImage} alt='sign-up-image' />
            <p className='text-sm'>© Typeform</p>
        </div>
    )
}

export default LeftSide