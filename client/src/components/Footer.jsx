// import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='border-t'>
            <div className='container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2'>
                <p>© All Rights Reserved 2025.</p>



                <div className='flex items-center gap-4 justify-center text-2xl'>

                    <Link to="/about" className="text-lg font-semibold text-gray-700 px-10">
                        About Us
                    </Link>

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
