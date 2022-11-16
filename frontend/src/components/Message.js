import React from 'react'

const Message = () => {
  return (
    <div className='h-full bg-opacity-25 flex items-center justify-center'>
      <div className='w-[300px] h-fit bg-red-200 py-[10px] md:py-[10px] px-25px rounded'>
        <p className='text-center font-light'>Payment Successful</p>
      </div>
    </div>
  )
}

export default Message
