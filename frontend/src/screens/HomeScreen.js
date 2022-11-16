import React,{useEffect} from 'react'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productAction'
import Loading from '../components/Loading'
import Message from '../components/Message'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, []);

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6'>
      <p className='text-3xl uppercase font-semibold ml-3 my-4'>Latest Products</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
            loading ?
              <Loading/> :
              error ?
              <Message/> :
              products.map(product => (
                  <Product key={product._id} product={product}>
                      <p>{product.name}</p>
                  </Product>
              ))
        }
      </div>
    </div>
  )
}

export default HomeScreen
