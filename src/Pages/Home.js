import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import api from '../js/api'

export const Home = () => {
  const [posts, setPosts] = useState('')
  const { user } = useAuth0()
  function getData () {
    api.auth.Posts().then(response => {
      if (response.success === true) {
        setPosts(response.data)
      } else {
        return ''
      }
    })
  }

  function handleOnDelete (id) {
    api.auth.deletePost(id).then(response => {
      if (response.success === true) {
        alert('POST DELETED DONE')
      }
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className='w-full flex flex-col items-center lg:w-10/12 mx-auto bg-gray-500 pt-4 relative px-8 animate__animated animate__fadeInRightBig'>
        <h2 className='font-ArialBold text-gray-900 text-4xl'>YOUR POSTS</h2>

        {(posts !== '')
          ? posts.filter(post => post.author === user?.name).sort((a, b) => b.id - a.id).map(post => {
              return (
                <div
                  key={post.id}
                  className='relative m-4 w-full bg-gray-900 block p-8 overflow-hidden border border-gray-100 rounded-lg'
                >
                  <span
                    className='absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'
                  />

                  <div className='justify-between sm:flex'>
                    <div>
                      <h5 className='text-xl font-bold text-gray-100'>
                        {post.title}
                      </h5>
                      <p className='mt-1 text-xs font-medium text-gray-400'>By {post.author}</p>
                    </div>

                    <div className='flex-shrink-0 hidden ml-3 sm:block'>
                      <img
                        className='object-cover w-16 h-16 rounded-lg shadow-sm'
                        src={post.img}
                        alt=''
                      />
                    </div>
                  </div>

                  <div className='mt-4 sm:pr-8'>
                    <p className='text-sm text-gray-200'>
                      {post.description}
                    </p>
                  </div>

                  <dl className='flex flex-col lg:justify-between mt-6'>
                    <div className='flex flex-row my-2'>
                      <dt className='text-sm font-medium text-gray-400'>Published:</dt>
                      <dd className='text-sm text-gray-300 ml-2'>{post.published}</dd>
                    </div>
                    <div className='flex flex-row'>
                      <NavLink to={`post/${post.id}/edit`} type='submit' className='px-2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none lg:mx-2 mr-2 text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4'>
                        Edit my post
                      </NavLink>
                      <button onClick={() => handleOnDelete(post.id)} type='submit' className='px-2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-red-700 border rounded hover:bg-red-600 py-4'>
                        Delete my post
                      </button>
                    </div>

                  </dl>
                </div>
              )
            })
          : ''}
      </div>
    </>
  )
}
