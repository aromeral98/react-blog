import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export function Navbar () {
  const { logout } = useAuth0()
  const [show, setShow] = useState(null)

  const routes = [
    { path: '/dashboard', title: 'dashboard' },
    { path: '/dashboard/post/new', title: 'new post' },
    { path: '/dashboard/profile', title: 'My profile' }
  ]
  return (
    <>
      <div className='bg-gray-200 h-16 w-full fixed z-10 top-0'>
        {/* Code block starts */}
        <nav className='bg-white shadow xl:block hidden'>
          <div className='mx-auto container px-6 py-2 xl:py-0'>
            <div className='flex items-center justify-between'>
              <div className='inset-y-0 left-0 flex items-center xl:hidden'>
                <div className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out'>
                  <div className='hidden close-m-menu text-gray-700' onclick='MenuHandler(this,false)'>
                    <svg aria-label='Close' xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start'>
                <div className='flex items-center'>
                  <img className='w-8' src='https://e7.pngegg.com/pngimages/90/340/png-clipart-white-and-purple-logo-preact-logo-icons-logos-emojis-tech-companies-thumbnail.png' />
                  <h2 className='hidden sm:block text-base text-gray-700 font-bold leading-normal pl-3'>React Blog</h2>
                </div>
              </div>
              <div className='flex'>
                <div className='hidden xl:flex md:mr-6 xl:mr-16'>
                  {routes.map(route => {
                    return (
                      <NavLink key={route.title} to={route.path} className='capitalize flex px-5 items-center py-6 text-sm leading-5 hover:text-white focus:bg-purple-400 text-purple-700 font-ArialBold hover:bg-purple-400  focus:outline-none transition duration-300 ease-in-out'>
                        {route.title}
                      </NavLink>
                    )
                  })}
                  <button className='text-purple-700 font-ArialBold  capitalize flex px-5 items-center py-6 text-sm leading-5 hover:text-white hover:bg-purple-400 focus:bg-purple-400 focus:outline-none transition duration-300 ease-in-out' onClick={() => logout()}>Log Out</button>
                </div>

              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className='py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40'>
            <div className='flex flex-row items-center'>
            <img className='w-8' src='https://e7.pngegg.com/pngimages/90/340/png-clipart-white-and-purple-logo-preact-logo-icons-logos-emojis-tech-companies-thumbnail.png' />
                  <h2 className='hidden sm:block text-base text-gray-700 font-bold leading-normal pl-3'>React Blog</h2>
            </div>
            <div className='flex items-center'>
              <div id='menu' className='text-gray-800' onClick={() => setShow(!show)}>
                {show
                  ? ''
                  : (
                    <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-menu-2' width={24} height={24} viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <line x1={4} y1={6} x2={20} y2={6} />
                      <line x1={4} y1={12} x2={20} y2={12} />
                      <line x1={4} y1={18} x2={20} y2={18} />
                    </svg>
                    )}
              </div>
            </div>
          </div>
          {/* Mobile responsive sidebar */}
        </nav>
        {/* Code block ends */}
      </div>
      <div className={show ? 'w-full xl:hidden h-full relative z-40 mt-18' : (show !== null) ? ' w-full xl:hidden h-full absolute z-40' : ' hidden'}>
        <div className='bg-gray-800 opacity-50 w-full h-full' onClick={() => setShow(!show)} />
        <div className='w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out'>
          <div className='px-6 h-full'>
            <div className='flex flex-col justify-between h-full w-full'>
              <div className='border-t-2 border-b-2 border-purple-700 mt-5'>
                {routes.map(route => {
                  return (
                    <NavLink key={route.title} to={route.path} className='cursor-pointer uppercase font-ArialBold pt-2' onClick={() => setShow(!show)}>
                      <div className='text-purple-700 font-ArialBold py-5 text-xl border-t-2 border-b-2 border-purple-700 hover:text-white hover:bg-purple-400 focus:bg-purple-400 transition-all duration-300'>
                        <div className='flex items-center'>
                          <div className='w-6 h-6 md:w-8 md:h-8 ' />
                          <p className=' xl:text-base text-base ml-3'>{route.title}</p>
                        </div>
                      </div>
                    </NavLink>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
