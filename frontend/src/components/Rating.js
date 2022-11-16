import React from 'react'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io'


const Rating = ({ value, text }) => {
  return (
    <div className='flex text-yellow-400 items-center' >
      <div>
        {
            value >= 1 
            ? <IoIosStar/>
            : value >=0.5
            ? <IoIosStarHalf/>
            : <IoIosStarOutline/>
        }
      </div>
      <div>
        {
            value >= 2 
            ? <IoIosStar/>
            : value >=1.5
            ? <IoIosStarHalf/>
            : <IoIosStarOutline/>
        }
      </div>
      <div>
        {
            value >= 3 
            ? <IoIosStar/>
            : value >=2.5
            ? <IoIosStarHalf/>
            : <IoIosStarOutline/>
        }
      </div>
      <div>
        {
            value >= 4 
            ? <IoIosStar/>
            : value >=3.5
            ? <IoIosStarHalf/>
            : <IoIosStarOutline/>
        }
      </div>
      <div>
        {
            value >= 5 
            ? <IoIosStar/>
            : value >=4.5
            ? <IoIosStarHalf/>
            : <IoIosStarOutline/>
        }
      </div>
      <p className='text-gray-400 ml-[5px]'>{text}</p>
    </div>
  )
}

export default Rating
