import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../js/api'

export const ShowPost = (props) => {
  const [post, setPost] = useState('')
  const params = useParams()

  function getPost () {
    api.auth.getPost(params.id).then(response => {
      if (response.success === true) {
          console.log(response)
        setPost(response.data)
      } else {
        return ''
      }
    })
  }
  useEffect(() => {
      getPost()
  }, [])

  return (
    <div className='w-full flex flex-col justify-center items-center lg:w-8/12 mx-auto bg-gray-500'>
      <a
          className='relative m-4 bg-gray-900 block p-8 overflow-hidden border border-gray-100 rounded-lg'
          href=''
        >
          <span
              className='absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'
            />

          <div className='justify-between sm:flex'>
              <div>
                  <h5 className='text-xl font-bold text-gray-100' >
                  {post.title}
                      </h5>
                  <p className='mt-1 text-xs font-medium text-gray-400'>By {post.author}</p>
                </div>

              <div className='flex-shrink-0 hidden ml-3 sm:block'>
                  <img
                      className='object-cover w-16 h-16 rounded-lg shadow-sm'
                      src='https://www.hyperui.dev/photos/man-5.jpeg'
                      alt=''
                    />
                </div>
            </div>

          <div className='mt-4 sm:pr-8'>
              <p className='text-sm text-gray-200'>{post.description}</p>
            </div>

          <dl className='flex mt-6'>
              <div className='flex flex-col-reverse'>
                  <dt className='text-sm font-medium text-gray-400'>Published</dt>
                  <dd className='text-xs text-gray-300' >{post.published}</dd>
                </div>
            </dl>
        </a>

    </div>
  )
}