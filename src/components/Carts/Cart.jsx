

import React from 'react'


function Cart({ cart, productIcons, removeItemFromCart }) {
    const matchedIcon = productIcons.find(
        (iconItem) => iconItem.name === cart.name
    );

    const Icon = matchedIcon?.icon;
    const iconColor = matchedIcon?.iconColor || "text-gray-500";

    return (
        <>
            <div className='flex justify-between items-center w-full bg-white p-5 rounded'>
                <div className="flex items-center justify-center gap-3">
                    {/* Icon */}
                    <div className=" bg-gray-100 p-3 rounded-full w-12 h-12 flex justify-center items-center ">
                        {Icon && <Icon className={`text-4xl ${iconColor}`} />}
                    </div>

                    <div>
                        <p> {cart.name}</p>
                        <p>{cart.price}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => removeItemFromCart(cart)} className=" btn text-orange-500 cursor-pointer hover:text-orange-700">Remove</button>
                </div>

            </div>
        </>
    )
}







export default Cart