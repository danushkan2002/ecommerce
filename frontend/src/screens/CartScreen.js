import React, {useEffect} from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartAction'
import { HiTrash } from 'react-icons/hi'

const CartScreen = () => {

  const productId = useParams()
  const location = useLocation()
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
        dispatch(addToCart(productId, qty))
        console.log(qty)
    }
}, [dispatch, productId, qty])

const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
}

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6'>
      <p className='text-3xl uppercase font-semibold ml-3 my-4'>Shoping Cart</p>
      <div className='md:flex'>
        <div className='' >
          {
            cartItems.map(item => (
              <div key={item._id} className='border border-black mb-[25px] p-[15px] md:w-[75%] md:h-[100px] rounded  border-opacity-10 md:flex gap-[15px] items-center'>
                <img src={item.image} alt='' className='object-fit rounded md:w-[100px]' />
                <p className='md:w-[300px] text-lg font-semibold'>{item.name}</p>
                <p className='md:w-[100px] opacity-75' >${item.price}</p>
                <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))} className='w-[100px] md:p-[25px]'>
                  {
                    [...Array(item.countInStock).keys()].map((x) => (
                      <option value={x+1} key={x+1} >
                        {x+1}
                      </option>
                    ))
                  }
                </select>
                <button className='ml-[25px]' onClick={() => removeFromCartHandler(item.product)}  >
                  <HiTrash />
                </button>
              </div>
            ))
          }
        </div>
        <div className='p-[25px] border border-black border-opacity-10 md:w-[25%]'>
          <p className='text-2xl' >Subtotal ({cartItems.reduce((acc, item) => acc + item.qty,0)}) items</p>
          <p className='text-black opacity-75 text-lg mt-[15px]' >${cartItems.reduce((acc, item) => acc + item.qty* item.price,0)}</p>
          <div className='w-full h-[1px] bg-black opacity-10 mt-[5px]' ></div>
          <Link to='/Shipping' className='w-full flex items-center justify-center h-[50px] bg-black text-white mt-[10px]'>Proceed to Checkout </Link>
        </div>
        
      </div>
    </div>
  )
}

export default CartScreen
