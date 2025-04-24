import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center bg-fuchsia-800 text-white font-bold py-3 px-5 rounded-full font-montserrat text-lg hover:bg-fuchsia-900 hover:cursor-pointer transition-all duration-500 ease-in-out'>
        {label}

        <img src={iconURL} alt="arrow right icon" className='ml-2 rounded-full w-5 h-5'/>
    </button>
  )
}

export default Button;