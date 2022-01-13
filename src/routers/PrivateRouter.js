import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { CreatePost } from '../Pages/CreatePost'
import { Home } from '../Pages/Home'
import { Profile } from '../Pages/Profile'
import { ShowPost } from '../Pages/ShowPost'
import { ShowUsers } from '../Pages/ShowUsers'

export const PrivateRouter = () => {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <Sidebar />
      <div className='flex flex-row w-full flex-grow lg:pl-80 mt-16'>
        <Routes>
          {/* <Route path='profile' element={<ShowUsers />} /> */}
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
