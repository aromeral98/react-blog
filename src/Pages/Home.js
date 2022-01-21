import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../js/api'
import FlashMessage from 'react-flash-message'

export const Home = () => {
  const [posts, setPosts] = useState([])
  const [flashMessage, setFlashMessage] = useState(false)

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
        setFlashMessage(true)
      }
    })
  }
  const Message = () => (
    <FlashMessage duration={5000}>
      <div className='absolute flex w-full h-full justify-center top-0 z-50  transition-all duration-500 animate__animated animate__fadeInUpBig animate__slow' style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <div
          className='rounded-lg shadow-lg bg-gray-200 w-10/12 mx-auto mt-40 lg:w-6/12 flex flex-row justify-center flex-wrap p-3 py-6 h-40 antialiased relative' style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundBlendMode: ' multiply'
          }}
        >
          <h5 className='font-ArialBold text-xl lg:text-2xl flex flex-row justify-center items-center'>
          <svg className='mr-2' fill='red' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
            Post deleted successfully
          </h5>
          <a href="/dashboard" className='absolute bottom-0 right-0 mb-2 mr-2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 p-4'>
            Go to posts
          </a>
        </div>
      </div>
    </FlashMessage>
  )
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {(flashMessage)
        ? Message()
        : ''}
      <div className='w-full flex flex-col items-center lg:w-10/12 mx-auto bg-gray-500 pt-4 relative px-8 animate__animated animate__fadeInRightBig capitalize'>
        <h2 className='font-ArialBold text-gray-900 text-4xl'>YOUR POSTS</h2>

        {(posts.length > 0)
          ? posts.filter(post => post.author === user?.name).sort((a, b) => b.id - a.id).map(post => {
              return (
                <div
                  key={post.id}
                  className='relative m-4 w-full bg-gray-900 hover:bg-gray-800 block p-8 overflow-hidden border border-gray-100 rounded-lg'
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
                      <dd className='text-sm text-gray-300 ml-2'>{(new Date(post.published).getUTCMonth() === 11) ? new Date(post.published).getUTCMonth() : new Date(post.published).getUTCMonth() + 1}/{new Date(post.published).getDate()}/{new Date(post.published).getFullYear()}</dd>
                    </div>
                    <div className='flex flex-row justify-end'>
                      {/* <NavLink to={`post/${post.id}/edit`} type='submit' className='px-2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none lg:mx-2 mr-2 text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4'>
                        Edit my post
                      </NavLink> */}
                      <button onClick={() => handleOnDelete(post.id)} type='submit' className='px-2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-red-700 border rounded hover:bg-red-600 py-4'>
                        Delete my post
                      </button>
                    </div>

                  </dl>
                </div>
              )
            })
          : <Link to='/dashboard/post/new' className='w-full h-full flex justify-center capitalize animate__animated animate__fadeInRightBig cursor-pointer text-white hover:text-pantene transition-all duration-500'>
            <div className='mx-auto justify-center items-center w-11/12 lg:w-2/3 pt-10'>
              <div
                className='rounded-lg shadow-lg bg-gray-600 w-full flex flex-row justify-center flex-wrap p-3 py-6 antialiased hover:bg-gray-300' style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundBlendMode: ' multiply'
                }}
              >
                <h5 className='font-ArialBold text-xl'>COME ON, CREATE YOUR FIRST POST</h5>
              </div>
            </div>
            </Link>}
      </div>
    </>
  )
}
