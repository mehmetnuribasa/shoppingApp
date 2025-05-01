import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 w-full rounded-xl shadow-3xl px-10 py-16 sm:w-[350px] sm:min-w-[350px]'>
        <div className='w-12 h-12 flex justify-center items-center bg-fuchsia-800 rounded-full'>
            <img src={imgURL} alt={label} width={24} height={24}/>
        </div>

        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
            {label}
        </h3>

        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
            {subtext}
        </p>
    </div>
  )
}

export default ServiceCard;