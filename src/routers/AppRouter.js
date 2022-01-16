import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AppLayout } from '../Pages/AppLayout'
import { LoginScreen } from '../Pages/LoginScreen'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className='w-full min-h-full'>
        <Routes>
          <Route path='/' element={<LoginScreen />} />
          <Route path='/dashboard/*' element={<AppLayout />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}
