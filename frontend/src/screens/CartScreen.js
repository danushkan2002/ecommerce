import React, {useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartAction'

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


  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6'>
      <p className='text-3xl uppercase font-semibold ml-3 my-4'>Shoping Cart</p>
      <div>
        {
          cartItems.map(item => (
            <div key={item._id} className='border border-black mb-[25px] p-[15px] w-[75%] h-[100px] rounded mx-3 border-opacity-10 flex gap-[15px]'>
              <img src={item.image} alt='' className='object-fit rounded' />
              <p className='w-[300px] text-lg font-semibold'>{item.name}</p>
              <p className='w-[300px] opacity-75' >${item.price}</p>
              <select onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value={qty})))}>
                {
                  [...Array(item.countInStock).keys()].map((x) => (
                    <option value={x+1} key={x+1} >
                      {x+1}
                    </option>
                  ))
                }
              </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CartScreen
