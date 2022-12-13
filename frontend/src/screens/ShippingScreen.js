import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, register } from '../actions/userAction'
import FormSection from '../components/FormSection'
import { useNavigate, useLocation } from 'react-router-dom'
import Message from '../components/Message'
import Loading from '../components/Loading'
import { saveShippingAddress } from '../actions/cartAction'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = () => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
    const history = useNavigate()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submiHandler = (e) =>{
      e.preventDefault()
      dispatch(saveShippingAddress({ address, city, postalCode, country }))
      history('/Payment')      
  }

  return (
    <FormSection>
        <form onSubmit={submiHandler}>
            <CheckoutSteps step1 step2 />
            <p className='uppercase text-3xl' >Sing up</p>
            

            <div className='mt-[25px] opacity-75'>
                <p className='font-semibold' >Address</p>
                <input value={address} onChange={(e) => setAddress(e.target.value)} type={'text'} placeholder='Enter Address' className='bg-gray-100 w-full py-[15px] px-[25px] mt-[10px]' />
            </div>
            <div className='mt-[25px] opacity-75'>
                <p className='font-semibold' >City</p>
                <input value={city} onChange={(e) => setCity(e.target.value)} type={'text'} placeholder='Enter City' className='bg-gray-100 w-full py-[15px] px-[25px] mt-[10px]' />
            </div>
            <div className='mt-[25px] opacity-75'>
                <p className='font-semibold' >Postal Code</p>
                <input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} type={'text'} placeholder='Enter Postal code' className='bg-gray-100 w-full py-[15px] px-[25px] mt-[10px]' />
            </div>
            <div className='mt-[25px] opacity-75'>
                <p className='font-semibold' >Country</p>
                <input value={country} onChange={(e) => setCountry(e.target.value)} type={'text'} placeholder='Enter Country' className='bg-gray-100 w-full py-[15px] px-[25px] mt-[10px]' />
            </div>
            <button type={'submit'} className='bg-black text-white px-[25px] py-[15px] mt-[25px] uppercase'>
                Sing in
            </button>
        </form>
        <div className='flex mt-[10px]'>
            <p className='opacity-50'>New Customer?</p> <p className='opacity-100' >Register</p> 
        </div>
    </FormSection>
  )
}

export default ShippingScreen
