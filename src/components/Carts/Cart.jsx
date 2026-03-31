

import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

function Cart() {
    return (
        <div>
            <div className=' bg-gray-50'>
                <div className='max-w-4xl md:w-6xl rounded-2xl bg-gray-200 p-10 '>
                    <h3>Cart</h3>
                    <div className='flex flex-col items-center justify-center gap-2 my-10'>
                        <FiShoppingCart className='text-4xl' />
                        <p className='text-orange-500 font-bold'>Your cart is empty!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart