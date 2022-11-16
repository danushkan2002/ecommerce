import React from 'react'
import { AiOutlineLogin, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div class="relative bg-gray-900 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <Link to='/' className='flex-row-reverse flex items-center '>
              <p class="ml-[15px] font-semibold text-">PROSHOP</p>
            </Link>
          </div>

          <nav class="hidden space-x-5 md:flex">

            <Link to={'/Cart'} class="text-base font-semibold text-gray-500  hover:text-white flex items-center "> <AiOutlineShoppingCart/> <p className='pb-[2px] ml-[5px]'>Cart</p> </Link>
            <Link to={'/Login'} class="text-base font-semibold text-gray-500  hover:text-white flex items-center "> <AiOutlineLogin/> <p className='pb-[2px] ml-[5px]'>Login</p> </Link>

            
          </nav>
        </div>
      </div>

      
    </div>

  )
}

export default Header
