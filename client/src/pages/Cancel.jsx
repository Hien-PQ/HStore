// import React from 'react'
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    // <div className='m-2 w-full max-w-md bg-red-200 p-4 py-5 rounded mx-auto flex flex-col justify-center items-center gap-5'>
    //   <p className='text-red-800 font-bold text-lg text-center'>Order Cancel</p>
    //   <Link to="/" className="border border-red-900 text-red-900 hover:bg-red-900 hover:text-white transition-all px-4 py-1">Go To Home</Link>
    // </div>


    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 px-4 md:px-6">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="bg-red-500 text-white rounded-full p-3 px-5">
            {/* <CheckIcon className="h-8 w-8" /> */}
            X
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Order Cancel</h1>
          <div className="space-y-2 text-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              You have cancelled your order.
            </div>
            {/* <p className="text-gray-500 dark:text-gray-400">Order #12345 | $99.99 | Visa ending in 1234</p> */}
            <p className="text-gray-500 dark:text-gray-400">
              If this was a mistake, you can try again.
            </p>
          </div>
          <Link
            to={"/"}
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Go to Homepage
          </Link>
          {/* <button onClick={toggleTheme}>
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          </button> */}
        </div>
      </div>
    </div>


  )
}

export default Cancel
