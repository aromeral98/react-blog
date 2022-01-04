import React from 'react'
import { NavLink } from 'react-router-dom'
import logoNav from '../img/logo.png'

function Sidebar () {
  return (
    <div className='hidden lg:flex h-full fixed '>
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className='w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex'>
        <div className=''>
          <div className='bg-transparent mt-6 px-6'>
            <img className='bg-transparent' src={logoNav} />
          </div>
          <ul className='mt-4'>
            <NavLink to='profile' className='flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center border-b border-t py-2 border-white px-3'>
              <div className='flex items-center'>
                <span className='text-sm  ml-2'>Users</span>
              </div>
              <div className='py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs'>5</div>
            </NavLink>
            <NavLink to='' className='flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center border-b py-2 border-white px-3'>
              <div className='flex items-center'>
                <span className='text-sm  ml-2'>Posts</span>
              </div>
              <div className='py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs'>5</div>
            </NavLink>
          </ul>
        </div>
      </div>
      {/* Sidebar ends */}
    </div>
  )
}

export default Sidebar
