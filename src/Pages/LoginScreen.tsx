import React from 'react'
import logo from '../img/logo.png'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = (props) => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0()
  const navigate = useNavigate()

  if (isLoading) {
    return (
      <div className=' absolute z-50 bg-gradient-to-tl from-blue-400 to-yellow-500 h-full w-full flex justify-center items-center'>
        <div class=' flex justify-center flex-col items-center font-ArialBold text-xl'>
          LOADING ...
          <div class='animate-spin rounded-full h-48 w-48 border-b-2 mt-2 border-gray-900' />
        </div>
      </div>
    )
  }

  isAuthenticated && (
    navigate('/dashboard')
  )

  return (
    <>
      <div className='h-full flex-col flex bg-gradient-to-tl from-blue-400 to-yellow-500 w-full py-16 px-4 font-ArialBold' style={{ minHeight: '100vh' }}>
        <div className='flex flex-col items-center justify-center '>
          <img className='h-20' src={logo} alt='logo' />
          <div className='bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16 flex flex-col items-center'>
            <div className='w-full lg:w-8/12 flex flex-col'>
              <div className='flex flex-col'>
                <button className='bg-purple-700 p-4 mb-4 mt-2 text-white' onClick={() => loginWithRedirect('/dashboard')}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginScreen
