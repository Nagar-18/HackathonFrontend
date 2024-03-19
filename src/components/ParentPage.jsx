import React from 'react'
import { Outlet } from 'react-router-dom'

const ParentPage = () => {
  return (
    <div>
        <Outlet></Outlet>
    </div>
  )
}

export default ParentPage