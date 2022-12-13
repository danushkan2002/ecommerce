import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className='flex gap-[50px] justify-center mb-[50px]'>
        <div>
            {
                step1 ?
                <Link to={'/login'} className='font-semibold '>Login</Link> :
                <div to={'/login'} className='font-semibold opacity-25' >Login</div>
            }
        </div>
        <div>
            {
                step2 ?
                <Link to={'/login'} className='font-semibold '>Shipping</Link> :
                <div to={'/login'} className='font-semibold opacity-25' >Shipping</div>
            }
        </div>
        <div>
            {
                step3 ?
                <Link to={'/login'} className='font-semibold '>Payment</Link> :
                <div to={'/login'} className='font-semibold opacity-25' >Payment</div>
            }
        </div>
        <div>
            {
                step4 ?
                <Link to={'/login'} className='font-semibold '>Place Order</Link> :
                <div to={'/login'} className='font-semibold opacity-25' >Place Order</div>
            }
        </div>
    </div>
  )
}

export default CheckoutSteps
