import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    // navlink for re usable
    const links = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-red-600 text-white font-semibold" : ""}>  Home </NavLink></li>
        <li><NavLink to="/hgh" className={({ isActive }) => isActive ? "border-b-2 border-red-600 text-white font-semibold" : ""}>  Messages </NavLink></li>
        <li><NavLink to="/hgh" className={({ isActive }) => isActive ? "border-b-2 border-red-600 text-white font-semibold" : ""}>  Messages </NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? "border-b-2 border-red-600 text-white font-semibold" : ""}>  Login </NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) => isActive ? "border-b-2 border-red-600 text-white font-semibold" : ""}>  Register </NavLink></li>
    </>
    return (
        <div className='bg-black text-gray-300 p-3'>
            <div className="max-w-7xl flex items-center justify-between mx-auto">
                <div className='flex items-center gap-2'>
                    <img src="/logo.png" alt="" />
                    <h2 className='text-2xl font-bold'>SCC Technovision</h2>
                </div>
                <div>
                    <ul className='hidden md:flex gap-6 '>
                        {links}
                    </ul>
                    <FaBars onClick={()=> setOpen(!open)} className='md:hidden' />
                   {
                    open &&  <div className='relative md:hidden'>
                    <ul className="absolute top-6 right-4 bg-black p-5 flex flex-col gap-2 w-[200px] rounded-lg">
                        {links}
                    </ul>
                </div>
                   }
                </div>
            </div>
        </div>
    )
}

export default Navbar