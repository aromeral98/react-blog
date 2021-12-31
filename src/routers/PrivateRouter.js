import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Home } from '../Pages/Home'
import { Profile } from '../Pages/Profile'

export const PrivateRouter = () => {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <div className='h-full w-full pt-20 xl:pt-0'>
        <Routes>
          <Route path='profile/:id' element={<Profile />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}
