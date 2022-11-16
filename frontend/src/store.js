import { combineReducers, applyMiddleware,  } from 'redux'
import thunk from 'redux-thunk'
import {configureStore, }  from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productListReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'



const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,

    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState  = {
    cart :{cartItems: cartItemsFromStorage},
}

const middlware = [thunk]

const store = configureStore({reducer, preloadedState: initialState}, 
    composeWithDevTools(applyMiddleware(...middlware)))

export default store