import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap py-5 items-center justify-between px-2">
        <Link to='/'>
          <p className="flex title-font font-medium items-center text-gray-900">
            <span className="text-xl font-bold">Task</span>
          </p>
        </Link>

        <div className="">
          <Link to='/products'>
            <p className="flex title-font font-medium items-center text-gray-900">
              <span className="text-xl font-bold">Products</span>
            </p>
          </Link>
        </div>

      </div>
    </header>
  )
}

export default Header