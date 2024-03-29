import React from 'react'

const Input = ({ type, rightElement, placeholder, value, onChange }) => {
    return (
        <div className='flex items-center gap-1 border p-2 rounded-sm border-gray-400 hover:border-[#00000070] w-[80%] md:w-1/3'>
            <input value={value} onChange={onChange} type={type} className='w-full focus:outline-none placeholder:text-gray-200' placeholder={placeholder} />
            {rightElement && (rightElement)}
        </div>
    )
}

export default Input