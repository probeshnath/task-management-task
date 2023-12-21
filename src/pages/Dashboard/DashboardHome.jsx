import React, { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'

const DashboardHome = () => {
    const {user} = useContext(AuthContext)
  return (
    <div>
        <div className='flex gap-2 items-center'>
            <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt={user?.displayName} />
            <div className="">
                <h2 className='text-lg font-bold capitalize'>{user?.displayName}</h2>
                <p className='text-sm text-gray-500 -mt-1'>{user?.email}</p>
            </div>
        </div>
        <form className='flex py-3 flex-col gap-2'>
            <input className='py-1 px-3 rounded-md outline-none' type="text" placeholder='Task Taile' name='title' />
            <textarea className='py-1 px-3 rounded-md outline-none' name="description" placeholder='Task Description..'  cols="30" rows="10"></textarea>
            <input className='py-1 px-3 rounded-md outline-none' type="date" name="deadline" placeholder='Deadline'  />
            <select className='py-1 px-3 rounded-md outline-none' name="priority" id="">
                <option value="low">Select your priority</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
            </select>
            <button className='bg-blue-700 py-1 rounded-md hover:bg-black text-white'>Create Task</button>
        </form>
    </div>
  )
}

export default DashboardHome