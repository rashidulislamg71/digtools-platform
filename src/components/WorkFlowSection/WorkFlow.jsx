
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { FiBookmark } from 'react-icons/fi'

function WorkFlow() {
    return (
        <div>
            <div className="bg-linear-to-r from-fuchsia-600 to-violet-500 text-white py-10 md:py-20 px-0 md:px-20 text-center space-y-3 md:space-y-5">
                <h1 className="text-3xl md:text-4xl font-bold ">Ready to Transform Your Workflow?</h1>
                <p className='text-sm max-w-140 m-auto'>Join thousands of professionals who are already using DigiTools to work smarter.Start your free trial today.</p>
                {/* buttons  */}
                <div className='flex justify-center items-center gap-3 mt-8'>
                    <button className='py-1 px-3 bg-white text-violet-500 font-semibold rounded-full cursor-pointer shadow-2xl hover:bg-violet-100'>Explore Products</button>
                    <button className='py-1 px-3 border text-white font-semibold rounded-full cursor-pointer  hover:text-fuchsia-800 hover:border-white shadow-2xl '>View Pricing</button>
                </div>
                {/* Features List */}
                <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 text-sm text-white/90">

                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-lg text-green-400" />
                        14-day free trial
                    </li>

                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-lg text-green-400" />
                        No credit card required
                    </li>

                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-lg text-green-400" />
                        Cancel anytime
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default WorkFlow