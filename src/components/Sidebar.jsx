import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const NavLinks = [
  {
    name: "Discover",
    url: "/",
  },
  {
    name: "Around You",
    url: "/",
  },
  {
    name: "Top Artist",
    url: "/",
  },
  {
    name: "Top Charts",
    url: "/",
  }
]
const Sidebar = ({handleClick}) => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="hidden md:flex md:flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <h2 className='text-2xl font-bold text-white self-center'> Sangeet.com </h2>
        <div className="flex flex-col mt-10" onClick={() => {}}>
          {
            NavLinks.map((Links, i) => {
              return <Link to={Links.url} key={i} className="text-gray-400 my-5 hover:text-cyan-400 font-medium" onClick={() => handleClick && handleClick()}> {Links.name} </Link>
            })
          }
        </div>
      </div>
      <div className="absolute md:hidden  text-white block top-4 right-5">
        {
          toggle ? <AiOutlineClose onClick={()=> setToggle(false)} size={25} className="cursor-pointer" /> : <AiOutlineMenu className="cursor-pointer " onClick={()=> setToggle(true)} size={25} />
        }
      </div>
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483deb] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${toggle ? ' left-0' : '-left-full' }`}>
        <h2 className='text-2xl font-bold text-white self-center'> Sangeet.com </h2>
        <div className="flex flex-col mt-10" onClick={() => {}}>
          {
            NavLinks.map((Links, i) => {
              return <Link to={Links.url} key={i} className="text-gray-400 my-5 hover:text-cyan-400 font-medium" onClick={() => handleClick && handleClick()}> {Links.name} </Link>
            })
          }
        </div>
      </div>
    </>
  )
}


export default Sidebar;