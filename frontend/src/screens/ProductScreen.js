import React, {useEffect, useState} from 'react'
import products from '../products'
import { useParams , useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productAction'
import Loading from '../components/Loading'
import Message from '../components/Message'
import { addToCard, addToCart } from '../actions/cartAction'

const ProductScreen = () => {
  const [qty, setQty] = useState(0)

  const {id} = useParams()
  const history = useNavigate()

  const productDetails = useSelector(state => state.productDetails)
  const {product, error, loading} = productDetails

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, []);

  const addToCartHandler = () => {
    history(`/Cart/${id}?qty=${qty}`)
    dispatch(addToCart(id, qty))
  }  

  return (
    <div className='mx-auto max-w-7xl md:px-10 '>
      <Link to={'/'} className='w-[100px] h-[50px] flex items-center justify-center hover:bg-gray-200 font-semibold text-opacity-50 text-black duration-100 mb-[25px]'>
        Go Back        
      </Link>
      {
        loading ?
        <Loading/> :
        error ?
        <Message/> :
          <div className='grid grid-cols-1 lg:grid-cols-2 w-full'>
            <img src={product.image} className='w-full' />
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              <div className='mx-[25px] lg:mx-0 mt-[25px] lg:mt-0 lg:ml-[15px] border-[2px] border-black border-opacity-10 h-fit p-[25px]'>
                <p className='text-gray-700 text-2xl' >{product.name}</p>
                <div className='w-full h-[2px] bg-black opacity-10 my-[15px]' ></div>
                <Rating value={product.rating} text={`${product.numReviews} Reviews`} color={'#f8e825'} />
                <div className='w-full h-[2px] bg-black opacity-10 my-[15px]' ></div>
                <p className='text-gray-500 text-xl' >Price:${product.price}</p>
                <div className='w-full h-[2px] bg-black opacity-10 my-[15px]' ></div>
                <p className='text-gray-500' >Description:{product.description}</p>
              </div>
              <form className='mx-[25px] lg:mx-0 mt-[25px] lg:mt-0 lg:ml-[15px] border-[2px] border-black border-opacity-10 h-fit p-[25px]'>
                <p className='text-gray-500 text-xl flex' >Price: <p className='text-right ml-auto'>${product.price}</p> </p>
                {
                  product.countInStock > 0 ?
                  <div className='mt-[15px]' >
                    <p className='text-gray-500 text-xl flex' >Qty: 
                      <select className='ml-auto' onChange={(e) => setQty(e.target.value)} >
                        {
                          [...Array(product.countInStock).keys()].map((x) => (
                            <option key={x+1} value={x+1} >
                              {x+1}
                            </option>
                          ) )
                        }
                      </select>
                    </p>
                  </div> :
                  ''
                }
                <div className='w-full h-[2px] bg-black opacity-10 my-[15px]' ></div>
                <p className='text-gray-500 text-xl flex' >Status: <p className='text-gray-500 ml-auto ' >{
                  product.countInStock > 0 ?
                  'In Stock':
                  'Out of Stock'
                }</p></p>
                <button onClick={addToCartHandler} disabled={
                  product.countInStock > 0 ?
                  false :
                  true
                } className={
                  product.countInStock > 0 ?
                  'w-full h-[50px] mt-[25px] text-white bg-black':
                  'w-full h-[50px] mt-[25px] text-white bg-black opacity-25'
                }>
                  Add To Cart
                </button>
              </form>
            </div>
            
          </div>
      }
    </div>
  )
}

export default ProductScreen
