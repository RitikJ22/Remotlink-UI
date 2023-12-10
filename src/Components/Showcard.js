import React from 'react'

const Showcard = (props) => {
  return (
    <div className='w-[291px] h-[257px] rounded-[5px] flex flex-shrink-0 flex-col border items-center justify-evenly border-solid border-white border-opacity-14 bg-[#18151F] mr-5 mt-3'> 
        <h1 className='w-[228px] text-gray-300 font-Lusitana text-2xl font-bold leading-normal tracking-tight capitalize'>{props.heading}</h1>
        <h3 className='w-[243px] h-[19.335px] text-white text-opacity-60 font-anek text-base font-medium leading-6'>Discove journals across the institution</h3>
    </div>
  )
}

export default Showcard