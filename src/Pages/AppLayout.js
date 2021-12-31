import React from 'react'
import { PrivateRouter } from '../routers/PrivateRouter'

export const AppLayout = () => {
  return (
    <>
      <div className='h-full w-full'>
        <PrivateRouter />
      </div>
    </>
  )
}
