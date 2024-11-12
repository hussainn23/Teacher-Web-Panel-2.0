import React from 'react'
import Sidebar from './Component/Sidebar'

import Navbar from './Component/Navbar'

import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <Navbar/>
      <Outlet />
   

    </div>
  )
}
export default App
