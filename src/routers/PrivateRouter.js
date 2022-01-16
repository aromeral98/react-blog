import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { CreatePost } from '../Pages/CreatePost'
import { Home } from '../Pages/Home'
import { Profile } from '../Pages/Profile'
import { ShowPost } from '../Pages/ShowPost'

export const PrivateRouter = () => {
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  !isAuthenticated && (
    navigate('/')
  )
  return (
    <div className='w-full h-full'>
      <Navbar />
      <div className='flex flex-row w-full flex-grow mt-16'>
        <Routes>
          <Route path='profile' element={<Profile />} />
          <Route path='post/:id' element={<ShowPost />} />
          <Route path='post/new' element={<CreatePost />} />
          <Route path='post/:new/edit' element={<CreatePost />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}
