import React from 'react'
import prof from '../img/prof.jpeg';

const Prof = () => {
  return (
    <>
        <div className='relative h-[150px] w-[150px] bg-blue-500 rounded-full mt-4 flex items-center justify-center'>
          <img src={prof} alt="Logo" className="h-[150px] w-[150px] rounded-full object-cover" />
        </div>
    </>
  )
}

export default Prof