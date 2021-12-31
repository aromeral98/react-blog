import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppLayout } from '../Pages/AppLayout'
import { LoginScreen } from '../Pages/LoginScreen'
import RegisterScreen from '../Pages/RegisterScreen'

export const AppRouter = () => {
  return (
    <div className='w-full h-full' style={{ height: '100vh' }}>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/dashboard' element={<AppLayout />} />
      </Routes>
    </div>
  )
}
