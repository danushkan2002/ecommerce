import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineLogin, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { HiUserCircle } from 'react-icons/hi'
import { logout } from '../actions/userAction'

const Header = () => {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div class="relative bg-gray-900 text-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <Link to='/' className='flex-row-reverse flex items-center '>
              <p class="ml-[15px] font-semibold text-lg">PROSHOP</p>
            </Link>
              {
                userInfo?
                <p class="ml-[15px] font-medium my-auto capitalize">{userInfo.name}</p>
                :
                ''
              }
          </div>

          <nav class="hidden space-x-5 md:flex">

            <Link to={'/Cart'} class="text-base font-semibold text-gray-500  hover:text-white flex items-center "> <AiOutlineShoppingCart/> <p className='pb-[2px] ml-[5px]'>Cart</p> </Link>
            {
              userInfo ?
              <div class="flex gap-[20px]">
                <Link to={'/Profile'} class="text-base font-semibold text-gray-500  hover:text-white flex items-center "> <HiUserCircle/> <p className='pb-[2px] ml-[5px]'>Profile</p> </Link>
                <button onClick={logoutHandler} class="text-base font-semibold text-gray-500  hover:text-white flex items-center "> <AiOutlineLogin/> <p className='pb-[2px] ml-[5px]'>Logout</p> </button>
              </div>
              :
              <Link to={'/Login'} class="text-base font-semibold text-gray-500  hover:text-white flex items-center "> <AiOutlineLogin/> <p className='pb-[2px] ml-[5px]'>Login</p> </Link>

            }
            
            
          </nav>
        </div>
      </div>

      
    </div>

  )
}

export default Header
