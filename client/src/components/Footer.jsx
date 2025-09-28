// import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Footer = () => {
    return (
        // <footer className='border-t'>
        //     <div className='container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2'>
        //         <p>© All Rights Reserved 2025.</p>



        //         <div className='flex items-center gap-4 justify-center text-2xl'>

        //             <Link to="/about" className="text-lg font-semibold text-gray-700 px-10">
        //                 About Us
        //             </Link>

        //             <a href='https://facebook.com/hien.phanking' className='hover:text-primary-100'>
        //                 <FaFacebook />
        //             </a>
        //             <a href='https://instagram.com/hien.phanking' className='hover:text-primary-100'>
        //                 <FaInstagram />
        //             </a>
        //             <a href='http://linkedin.com/in/hien-phan-quang/' className='hover:text-primary-100'>
        //                 <FaLinkedin />
        //             </a>
        //         </div>
        //     </div>
        // </footer>
        <footer className="bg-white rounded-lg shadow-sm m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center ">© All Rights Reserved <a href="/" className="hover:underline">2025</a>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
                    <li>
                        <a href="/about-us" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:underline me-4 md:me-6">Contact</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Terms of Service</a>
                    </li>
                </ul>
                <div className="flex items-center gap-4 justify-center text-2xl">
                    <a href='https://facebook.com/hien.phanking' className='hover:text-primary-100'>
                        <FaFacebook />
                    </a>
                    <a href='https://instagram.com/hien.phanking' className='hover:text-primary-100'>
                        <FaInstagram />
                    </a>
                    <a href='http://linkedin.com/in/hien-phan-quang/' className='hover:text-primary-100'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
