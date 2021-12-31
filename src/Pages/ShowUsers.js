import React, { useState } from 'react'

import api from '../js/api'

export const ShowUsers = () => {
  const [users, setUsers] = useState('')

  function getData () {
    api.auth.getAllUsers().then(response => {
      if (response.success === true) {
        setUsers(response.data)
      } else {
        return ''
      }
    })
  }
  getData()

  return (
    <div className='flex flex-col mx-auto'>
      {(users !== '')
        ? users.map(user => {
            return (
              <div key={user.id} className='w-full h-full flex justify-center items-center'>
                <div className='mx-auto justify-center items-center w-2/3 py-10'>
                  <div
                    className='rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased' style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundBlendMode: ' multiply'
                    }}
                  >
                    <div className='md:w-1/3 w-full'>
                      <img className='rounded-lg shadow-lg antialiased' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
                    </div>
                    <div className='md:w-2/3 w-full px-3 flex flex-row flex-wrap'>
                      <div className='w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0'>
                        <div className='text-2xl text-white leading-tight'>User</div>
                        <div className='text-normal text-gray-300 hover:text-gray-400 cursor-pointer'><span className='border-b border-dashed border-gray-500 pb-1'>{user.email}</span></div>
                        <div className='text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0'>Last Seen: <b>2 days ago</b></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        : ''}
    </div>
  )
}
