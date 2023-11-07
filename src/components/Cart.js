

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearItem } from '../utils/cartSlice'
import FoodItemCard from './FoodItemCard'

function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector(store => store.cart.items)

  const handleClearCart = () => {
    dispatch(clearItem())
  }

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">Cart Items ({cartItems.length})</h1>
      <button
        onClick={handleClearCart}
        className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
      >
        Clear Cart
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {cartItems.map(item => (
          <FoodItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Cart
