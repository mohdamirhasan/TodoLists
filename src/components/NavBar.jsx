import React from 'react'

const NavBar = () => {
  return (
    <div className="nav flex justify-between items-center bg-blue-950 text-white px-10 py-5">
      <div className="logo cursor-pointer font-bold">myTask</div>
      <ul className="flex justify-center align-middle gap-10 list-none cursor-pointer font-bold">
        <li>Home</li>
        <li>Tasks</li>
      </ul>
    </div>
  )
}

export default NavBar
