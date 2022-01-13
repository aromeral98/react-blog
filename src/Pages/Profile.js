import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    isAuthenticated && (
      <div className='w-full h-full flex justify-center capitalize'>
        <div className='mx-auto justify-center items-center w-2/3 pt-10'>
          <div
            className='rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased' style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundBlendMode: ' multiply'
            }}
          >
            <div className='md:w-1/3 w-full'>
              <img alt='' className='rounded-lg shadow-lg antialiased' src={user.picture}/>
            </div>
            <div className='md:w-2/3 w-full px-3 flex flex-row flex-wrap'>
              <div className='w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0'>
                <div className='text-2xl text-white leading-tight '>{user.name}</div>
                <div className='text-normal text-gray-300 hover:text-gray-400 cursor-pointer'><span className='border-b border-dashed border-gray-500 pb-1'>{user.email}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
