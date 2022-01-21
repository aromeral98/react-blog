import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import api from '../js/api'
import FlashMessage from 'react-flash-message'

export const CreatePost = (props) => {
  // const [post, setPost] = useState('')
  const [flashMessage, setFlashMessage] = useState(false)

  const params = useParams()
  const now = new Date()
  const [formValues, handleInputChange] = useForm({
    title: '',
    description: '',
    img: ''
  })
  const { title, description, img } = formValues
  const { user } = useAuth0()

  useEffect(() => {
    api.auth.getPost(params.new).then(response => {
      if (response.success === true) {
        // setPost(response.data)
      } else {
        return ''
      }
    })
  }, [params.new])

  const Message = () => (
    <FlashMessage>
      <div className='absolute flex w-full h-full justify-center top-0 z-50 transition-all duration-500 animate__animated animate__fadeInUpBig animate__slow' style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <div
          className='rounded-lg shadow-lg bg-gray-200 w-10/12 mx-auto mt-40 lg:w-6/12 flex flex-row justify-center flex-wrap p-3 py-6 h-40 antialiased relative' style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundBlendMode: ' multiply'
          }}
        >
          <h5 className='font-ArialBold text-xl lg:text-2xl flex flex-row justify-center items-center'>
            <svg fill='green' className='mr-4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/></svg>
            Post created successfully
          </h5>
          <Link to={'/dashboard'} className='absolute bottom-0 right-0 mb-2 mr-2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 p-4'>
            Go to watch my created posts
          </Link>
        </div>
      </div>
    </FlashMessage>
  )

  function handleOnSubmit (e) {
    e.preventDefault()
    setFlashMessage(true)
    if (img === '') {
      api.auth.createPost({ title: title, description: description, author: user.name, email: user.email, published: now, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYyboBUj0H3vf-miQqJTFkCzTtp2qwLwFuA&usqp=CAU' })
    } else {
      api.auth.createPost({ title: title, description: description, author: user.name, email: user.email, published: now, img: img })
    }
  }
  // function handleOnSubmitEdit (e) {
  //   e.preventDefault()
  //   console.log(title, description)
  //   api.auth.editPost(params.new, { title: title, description: description, author: post.author, published: now, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYyboBUj0H3vf-miQqJTFkCzTtp2qwLwFuA&usqp=CAU' })
  //   navigate('/dashboard')
  // }

  return (
    <>
      {(flashMessage)
        ? Message()
        : ''}
      <form
        className='w-full flex justify-center mb-10 px-4 animate__animated animate__fadeInRightBig'
        onSubmit={(params.new === undefined)
          ? handleOnSubmit
          : ''
          // handleOnSubmitEdit
        }
      >

        <div className='bg-white  shadow rounded lg:w-2/3  md:w-1/2 w-full  p-10 mt-16'>
          <div>
            <label className='text-sm font-medium leading-none text-gray-800'>Title</label>
            <input placeholder='Introduce a title for the post' title='Introduce between 10 and 200 characters' required type='text' name='title' value={title} onChange={handleInputChange} className='bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2' />
          </div>
          <div className='mt-2'>
            <label className='text-sm font-medium leading-none text-gray-800'>Description</label>
            <textarea placeholder='Introduce a description' minLength='20' maxLength='1600' title='Introduce between 10 and 1600 characters' required rows='10' type='text' name='description' value={description} onChange={handleInputChange} className='bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2' />
          </div>
          <div>
            <label className='text-sm font-medium leading-none text-gray-800'>Image</label>
            <input placeholder='Introduce an url' type='text' name='img' value={img} onChange={handleInputChange} className='bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2' />
          </div>
          <div className='mt-8'>
            <button aria-label='create my account' type='submit' className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'>
              {(params.new)
                ? 'Edit my post'
                : 'Create post'}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
