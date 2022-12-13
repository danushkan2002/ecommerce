import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import { useNavigate, useLocation , Link} from 'react-router-dom'
import FormSection from '../components/FormSection'
import { savePaymentMethod } from '../actions/cartAction'
import Message from '../components/Message'
import { createOrder } from '../actions/orderAction'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'


const PlaceOrderScreen = () => {
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()
    const history = useNavigate()

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success } = orderCreate

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2)
    cart.taxPrice = Number((0.082) * cart.itemsPrice).toFixed(2)

    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    useEffect(() => {
      if (success) {
          history(`/order/${order._id}`)
          dispatch({ type: ORDER_CREATE_RESET })
      }
  }, [success, history])

  const placeOrder = () => {
    dispatch(createOrder({
      orderItems: cart.cartItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.paymentMethod,
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      taxPrice: cart.taxPrice,
      totalPrice: cart.totalPrice,
  }))
  }

  return (
    <div className='mx-auto max-w-7xl md:px-10 ' >
      <CheckoutSteps step1 step2 step3 step4 />
      <form onSubmit={placeOrder} className='lg:flex gap-[50px]'>
        <div className='w-full'>
          <p className='uppercase text-3xl' >Shipping</p>
          <p className='mt-[25px]'>
            <strong className='opacity-75 mr-[20px]'>Shipping:</strong>
            {cart.shippingAddress.address} , {cart.shippingAddress.city} , {cart.shippingAddress.postalCode} , {cart.shippingAddress.country}
          </p>

          <div className='w-full h-[2px] bg-black bg-opacity-10 mt-[25px]' ></div>
          <p className='uppercase text-3xl mt-[30px]' >Payment Method</p>
          <p className='mt-[25px]'>
            <strong className='opacity-75 mr-[20px]'> Method:</strong>
            {cart.paymentMethod}
          </p>

          <div className='w-full h-[2px] bg-black bg-opacity-10 mt-[25px]' ></div>
          <p className='uppercase text-3xl mt-[30px] mb-[25px]' >Order items</p>
          {
            cart.cartItems.map((item) => (
              <div key={item.id} className='py-[25px] flex items-center gap-[25px]'>
                <img src={item.image} className='w-[100px] object-cover rounded' />
                <Link to={`/product/${item.product}`}>{item.name}</Link>
                {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
              </div>
            ))
          }
        </div>
        <div className='w-[450px] border border-black border-opacity-10 py-[50px] px-[25px]'>
        <p className='uppercase text-3xl' >Order Summary</p>
        <div className='w-full h-[2px] bg-black bg-opacity-10 mt-[25px]' ></div>
        <div className='flex h-[50px] items-center'>
          <p>item:</p>
          <p className='ml-auto' >${cart.itemsPrice}</p>
        </div>
        <div className='w-full h-[2px] bg-black bg-opacity-10 mt-[25px]' ></div>
        <div className='flex h-[50px] items-center'>
          <p>Shipping:</p>
          <p className='ml-auto' >${cart.shippingPrice}</p>
        </div>
        
        <div className='w-full h-[2px] bg-black bg-opacity-10 mt-[25px]' ></div>
        <div className='flex h-[50px] items-center'>
          <p>Tax:</p>
          <p className='ml-auto' >${cart.taxPrice}</p>
        </div>
        
        <div className='w-full h-[2px] bg-black bg-opacity-10 mt-[25px]' ></div>
        <div className='flex h-[50px] items-center'>
          <p>Total:</p>
          <p className='ml-auto' >${cart.totalPrice}</p>
        </div>
        <button type={'submit'} className='flex h-[50px] items-center justify-center w-full bg-black text-white uppercase'>
          Place order
        </button>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrderScreen
