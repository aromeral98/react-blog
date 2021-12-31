import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import api from '../js/api'

export const CreatePost = (props) => {
  const [post, setPost] = useState('')
  const params = useParams()
  const now = new Date()
  const [formValues, handleInputChange] = useForm({
    title: '',
    description: ''
  })
  const navigate = useNavigate()
  console.log(props)
  const { title, description } = formValues

  function getPost () {
    api.auth.getPost(params.new).then(response => {
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
  function handleOnSubmit (e) {
    e.preventDefault()
    api.auth.createPost({ title: title, description: description, author: post.author, published: now })
    alert('POST CREATED DONE')
    navigate('/dashboard')
  }
  function handleOnSubmitEdit (e) {
    e.preventDefault()
    api.auth.editPost(params.new, { title: title, description: description, author: post.author, published: now })
    navigate(`/dashboard/post/${params.new}`)
  }

  console.log(params.new)
  return (
    <form className='w-full h-full flex justify-center mb-10 px-4' onSubmit={(params.new === undefined) ? handleOnSubmit : handleOnSubmitEdit}>
      <div className='bg-white shadow rounded lg:w-2/3  md:w-1/2 w-full  p-10 mt-16'>
        <div>
          <label className='text-sm font-medium leading-none text-gray-800'>Title</label>
          <input type='text' name='title' value={title} onChange={handleInputChange} className='bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2' />
        </div>
        <div>
          <label className='text-sm font-medium leading-none text-gray-800'>Description</label>
          <textarea rows='10' type='text' name='description' value={description} onChange={handleInputChange} className='bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2' />
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
  )
}
