import React from 'react'

const Loading = () => {
  return (
    <div className='h-full bg-opacity-25 flex items-center justify-center'>
      <div className='w-[300px] h-fit py-[10px] md:py-[10px] px-25px rounded'>
        <p className='text-left font-light'>loading...!</p>
      </div>
    </div>
  )
}

export default Loading
