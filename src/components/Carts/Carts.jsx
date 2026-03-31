import React from 'react'
import Cart from './Cart'
import { FiShoppingCart } from 'react-icons/fi'

function Carts({ cartItems, productIcons, removeItemFormCart, proceedToCheckout, cartSum }) {

  return (
    <div className="w-full md:w-6xl rounded-xl bg-gray-100 p-5 md:p-10 mb-20 mt-10 ">
      <ul className='flex flex-col justify-center  items-center gap-5'>
        {
          cartItems.length > 0 ?
            <>
              {cartItems.map((cart) => (
                <Cart key={cart.id} cart={cart} productIcons={productIcons} removeItemFormCart={removeItemFormCart} proceedToCheckout={proceedToCheckout} />
              ))}
              <div className="bg-green-50 p-5 rounded flex justify-between items-center w-full">
                <p>Total</p>
                <p>$-{cartSum.toFixed(2)}</p>
              </div>
              <button onClick={proceedToCheckout} className="w-full py-1 font-bold text-white cursor-pointer hover:bg-green-500 bg-green-600 rounded-full" >Proceed To Checkout</button>
            </> : <>
              <div className=''>
                <div className='flex flex-col items-center justify-center gap-2 my-10'>
                  <FiShoppingCart className='text-4xl' />
                  <p className='text-orange-500 font-bold'>Your cart is empty!</p>
                </div>
              </div>
            </>
        }
      </ul>
    </div>
  )
}

export default Carts