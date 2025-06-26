// import React, 
import { useEffect, useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import AxiosToastError from '../utils/AxiosToastError';
import { Link, useNavigate } from 'react-router-dom';
import fetchUserDetails from '../utils/fetchUserDetails';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../store/userSlice';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const valideValue = Object.values(data).every(el => el)

    const fetchUser = async () => {
        const userData = await fetchUserDetails()
        if (userData) {
            navigate("/")
            return
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await Axios({
                ...SummaryApi.login,
                data: data
            })

            if (response.data.error) {
                toast.error(response.data.message)
            }

            if (response.data.success) {
                toast.success(response.data.message)
                localStorage.setItem('accesstoken', response.data.data.accesstoken)
                localStorage.setItem('refreshToken', response.data.data.refreshToken)

                const userDetails = await fetchUserDetails()
                dispatch(setUserDetails(userDetails.data))

                setData({
                    email: "",
                    password: "",
                })
                navigate("/")
            }

        } catch (error) {
            AxiosToastError(error)
        }

    }

    useEffect(() => {
        fetchUser()
    }, [])


    return (
        <section className='w-full container mx-auto px-2'>
            <div className='bg-blue-200 my-4 w-full max-w-lg mx-auto rounded p-7'>
                <h1 className='font-semibold text-lg'>Login to your account</h1>
                <form className='grid gap-4 py-4' onSubmit={handleSubmit}>
                    <div className='grid gap-1'>
                        <label htmlFor='email'>Enter your email address:</label>
                        <input
                            type='email'
                            id='email'
                            className='p-2 border rounded outline-none focus:border-primary-200'
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            placeholder='abc@gmail.com'
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label htmlFor='password'>Enter your password :</label>
                        <div className='bg-white p-2 border rounded flex items-center focus-within:border-primary-200'>
                            <input
                                type={showPassword ? "text" : "password"}
                                id='password'
                                className='w-full outline-none '
                                name='password'
                                value={data.password}
                                onChange={handleChange}
                                placeholder='********'
                            />
                            <div onClick={() => setShowPassword(preve => !preve)} className='cursor-pointer'>
                                {
                                    showPassword ? (
                                        <FaRegEye />
                                    ) : (
                                        <FaRegEyeSlash />
                                    )
                                }
                            </div>
                        </div>
                        <Link to={"/forgot-password"} className='block ml-auto hover:text-primary-200'>Forgot password ?</Link>
                    </div>

                    <button disabled={!valideValue} className={` ${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"}    text-white py-2 rounded font-semibold my-3 tracking-wide `}>Login</button>

                </form>

                <div>
                    <p className='justify-center flex items-center text-gray-500'>
                        Don`t have an account? <Link to={"/register"} className='font-semibold text-green-700 hover:text-green-800 ml-2'>Register</Link>
                    </p>
                </div>
            </div>
        </section >
    )
}

export default Login

