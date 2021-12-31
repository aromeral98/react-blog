import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Home } from '../Pages/Home'
import { Profile } from '../Pages/Profile'

export const PrivateRouter = () => {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}
