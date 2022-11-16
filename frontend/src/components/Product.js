import React from 'react'
import Rating from './Rating'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Link to={`/Product/${product._id}`} className='m-3 p-3 rounded border-[2px] border-black border-opacity-5'>
      <div>
        <img src={product.image} alt='' />
      </div>
      <div className='my-4'>
        <p className='text-gray-500 font-semibold' >{product.name}</p>
        <div className='my-2 text-gray-400 font-medium'>
            <Rating value={product.rating} text={`${product.numReviews} Reviews`} color={'#f8e825'} />
        </div>
        <p className='text-2xl font-semibold text-gray-700'>${product.price}</p>
      </div>
    </Link>
  )
}

export default Product
