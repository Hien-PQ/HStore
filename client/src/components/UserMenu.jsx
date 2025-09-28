// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Divider from './Divider'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { logout } from '../store/userSlice'
import toast from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'
import { HiOutlineExternalLink } from "react-icons/hi";
import isAdmin from '../utils/isAdmin'
import {
  FcBusinessman,
  FcList,
  FcMms,
  FcGenericSortingAsc,
  FcGenericSortingDesc,
  FcGrid,
  FcLineChart,
  FcHome,
} from "react-icons/fc";


const UserMenu = ({ close }) => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.logout
      })
      console.log("logout", response)
      if (response.data.success) {
        if (close) {
          close()
        }
        dispatch(logout())
        localStorage.clear()
        toast.success(response.data.message)
        navigate("/")
      }
    } catch (error) {
      console.log(error)
      AxiosToastError(error)
    }
  }

  const handleClose = () => {
    if (close) {
      close()
    }
  }
  return (
    <div>
      <div className='flex items-center gap-2'>
        <div className='font-semibold'>My Account</div>
        <FcBusinessman />
      </div>
      <div className='text-sm flex items-center gap-2'>
        <span className='max-w-52 text-ellipsis line-clamp-1'>{user.name || user.mobile} <span className='text-medium text-red-600'>{user.role === "ADMIN" ? " (Admin)" : ""}</span></span>
        {
          isAdmin(user.role) && (
            <Link onClick={handleClose} to={"/admin/profile"} className='hover:text-primary-200'>
              <HiOutlineExternalLink size={15} />
            </Link>
          )
        }
        {
          !isAdmin(user.role) && (
            <Link onClick={handleClose} to={"/dashboard/profile"} className='hover:text-primary-200'>
              <HiOutlineExternalLink size={15} />
            </Link>
          )
        }
        {/* <Link onClick={handleClose} to={"/dashboard/profile"} className='hover:text-primary-200'>
          <HiOutlineExternalLink size={15} />
        </Link> */}
      </div>

      <Divider />

      <div className='text-sm grid gap-1'>
        {
          isAdmin(user.role) && (
            <Link onClick={handleClose} to={"/admin/category"} className='px-2 hover:bg-orange-200 py-1'>
              <div className='flex items-center gap-2'>
                <FcGenericSortingDesc />
                Category
              </div>
            </Link>
          )
        }

        {
          isAdmin(user.role) && (
            <Link onClick={handleClose} to={"/admin/subcategory"} className='px-2 hover:bg-orange-200 py-1'>
              <div className='flex items-center gap-2'>
                <FcGenericSortingAsc size={20} />
                Sub Category
              </div>
            </Link>
          )
        }

        {
          isAdmin(user.role) && (
            <Link onClick={handleClose} to={"/admin/upload-product"} className='px-2 hover:bg-orange-200 py-1'>
              <div className='flex items-center gap-2'>
                <FcList size={20} />
                Upload Product
              </div>
            </Link>
          )
        }

        {
          isAdmin(user.role) && (
            <Link onClick={handleClose} to={"/admin/product"} className='px-2 hover:bg-orange-200 py-1'>
              <div className='flex items-center gap-2'>
                <FcGrid />
                Product
              </div>
            </Link>
          )
        }

        {
          isAdmin(user.role) && (
            <Link onClick={handleClose} to={"/admin/charts"} className='px-2 hover:bg-orange-200 py-1'>
              <div className='flex items-center gap-2'>
                <FcLineChart />
                Statistics
              </div>
            </Link>
          )
        }

        {
          // !isAdmin(user.role) && (
          <Link onClick={handleClose} to={"/dashboard/myorders"} className='px-2 hover:bg-orange-200 py-1'>
            <div className='flex items-center gap-2'>
              <FcMms />
              My Orders
            </div>
          </Link>

          // )
        }
        {
          // !isAdmin(user.role) && (
          <Link onClick={handleClose} to={"/dashboard/address"} className='px-2 hover:bg-orange-200 py-1'>
            <div className='flex items-center gap-2'>
              <FcHome />
              Save Address
            </div>
          </Link>

          // )
        }
        {/* <Link onClick={handleClose} to={"/dashboard/profile"} className='px-2 hover:bg-orange-200 py-1'>Profile</Link> */}
        <button onClick={handleLogout} className='text-left px-2 hover:bg-orange-200 py-1'>Log Out</button>

      </div>
    </div>
  )
}

export default UserMenu
