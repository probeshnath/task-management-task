import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const Dashboard = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className='bg-gray-300'>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-12  ">
        {/* side bar */}
        <div className='bg-black text-white md:col-span-3 md:h-screen col-span-3 pl-3'>
        <div className='flex gap-2 items-center py-3'>
                <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt={user?.displayName} />
                <div className="">
                    <h2 className='text-lg font-bold capitalize'>{user?.displayName}</h2>
                    <p className='text-sm text-gray-500 -mt-1'>{user?.email}</p>
                </div>
            </div>
          <ul className=' flex flex-col gap-2'>
          <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "border-b-2 border-red-600 text-white font-semibold" : ""}> Dashboard </NavLink></li>
          <li><NavLink to="/dashboard/mytasks" className={({ isActive }) => isActive ? "border-b-2 border-red-600 text-white font-semibold" : ""}>   My Task </NavLink></li>
          
          </ul>
        </div>
        {/* main content */}
        <div className="md:col-span-9 p-5 bg-gray-300">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard