

import React from 'react'
import Logo from '../../utils/Logo.jsx'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const footerLinkTitleStyle = "text-lg font-semibold mb-4 text-white border-b-2 border-violet-500 w-fit"

const footerLinkStyle = "text-gray-400 hover:text-white transition-colors duration-300 text-sm block"

function Footer() {
    return (
        <div className='pt-10 px-4 md:pt-16 md:px-16 bg-gray-700'>
            {/* footer top  */}
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-16 mb-5 md:mb-15'>
                {/* logo and description  */}
                <div className='col-span-2'>
                    <Logo />
                    <p className='text-sm text-gray-400 mt-2'>
                        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                    </p>
                </div>

                {/* products link  */}
                <div>
                    <h3 className={footerLinkTitleStyle}>Products</h3>
                    <ul>
                        <li className={footerLinkStyle}><a href="#">Features</a></li>
                        <li className={footerLinkStyle}><a href="#">Pricing</a></li>
                        <li className={footerLinkStyle}><a href="#">Templates</a></li>
                        <li className={footerLinkStyle}><a href="#">Integrations</a></li>
                    </ul>
                </div>
                {/* company link  */}
                <div>
                    <h3 className={footerLinkTitleStyle}>Company</h3>
                    <ul>
                        <li className={footerLinkStyle}><a href="#">About</a></li>
                        <li className={footerLinkStyle}><a href="#">Blog</a></li>
                        <li className={footerLinkStyle}><a href="#">Careers</a></li>
                        <li className={footerLinkStyle}><a href="#">Press</a></li>
                    </ul>
                </div>
                {/* resources link  */}
                <div>
                    <h3 className={footerLinkTitleStyle}>Resources</h3>
                    <ul>
                        <li className={footerLinkStyle}><a href="#">Documentation</a></li>
                        <li className={footerLinkStyle}><a href="#">Help Center</a></li>
                        <li className={footerLinkStyle}><a href="#">Community</a></li>
                        <li className={footerLinkStyle}><a href="#">Contact</a></li>
                    </ul>
                </div>
                {/* social media link  */}
                <div>
                    <h3 className={footerLinkTitleStyle}>Social Lins</h3>
                    <ul className='flex gap-3'>
                        <li className={`${footerLinkStyle}`}><a className='text-xl text-white hover:text-violet-600 transition-all duration-300' href="#"><FaFacebookSquare /></a></li>
                        <li className={footerLinkStyle}><a className='text-xl text-white hover:text-violet-600 transition-all duration-300' href="#"><FaTwitterSquare /></a></li>
                        <li className={footerLinkStyle}><a className='text-xl text-white hover:text-violet-600 transition-all duration-300' href="#"><FaLinkedin /></a></li>
                    </ul>
                </div>

            </div>
            {/* footer bottom  */}
            <div className='flex flex-col-reverse  md:flex-row justify-between items-center gap-3 py-4 border-t border-gray-400 text-sm text-gray-500'>

                <p className='flex items-center gap-1'>
                    &copy; {new Date().getFullYear()} DigiTools All rights reserved.
                </p>

                <ul className='flex gap-4 md:gap-6'>
                    <li>
                        <a href="#" className={footerLinkStyle}>
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className={footerLinkStyle}>
                            Terms of Service
                        </a>
                    </li>
                    <li>
                        <a href="#" className={footerLinkStyle}>
                            Contact
                        </a>
                    </li>
                </ul>

            </div>
        </div >
    )
}

export default Footer