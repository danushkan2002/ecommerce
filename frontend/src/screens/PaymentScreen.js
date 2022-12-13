import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import { useNavigate, useLocation } from 'react-router-dom'
import FormSection from '../components/FormSection'
import { savePaymentMethod } from '../actions/cartAction'

const PaymentScreen = () => {
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
    const history = useNavigate()


    useEffect(()=>{
        if (!shippingAddress.address) {
            history.push('/shipping')
        }
    },[shippingAddress])

    const submiHandler = (e) =>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history('/PlaceOrder')      
    }
  

  return (
    <FormSection>
        <form onSubmit={submiHandler}>
            <CheckoutSteps step1 step2 />
            <p className='uppercase text-3xl' >Select Method</p>
            

            <div class="flex items-center my-4">
                <input id="paypal" type="radio" value="" name="paymentMethod" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked
                 onChange={(e) => setPaymentMethod(e.target.value)}></input>
                <label for="paypal" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">PayPal or Creadit card</label>
            </div>
            <button type={'submit'} className='bg-black text-white px-[25px] py-[15px] mt-[25px] uppercase'>
                Continue
            </button>
        </form>
        <div className='flex mt-[10px]'>
            <p className='opacity-50'>New Customer?</p> <p className='opacity-100' >Register</p> 
        </div>
    </FormSection>
  )
}

export default PaymentScreen
