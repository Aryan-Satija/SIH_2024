import React from 'react'
import logo from"../assets/logo.jpg"
const Navbar = () => {
  return (
    
      <nav className="sticky top-0 z-50 bg-deepBlue">
        <div className="relative w-[1080px] mx-auto flex items-center justify-between ">
            <a href="/" className="cursor-pointer py-7 pr-7">
                <img src={logo} width="125px" height="30px"></img></a>
            <ul className="flex space-x-6">
                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Explore</a>
                    <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block"></div>
                </li>
                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Learn</a>
                    <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block"></div>
                </li>
                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Individuals</a>
                    <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block"></div>
                </li>
                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Businesses</a>
                    <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block"></div>
                </li>
                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Developers</a>
                    <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block"></div>
                </li>
                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Company</a>
                    <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block"></div>
                </li>
                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Security</a>
                    <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block"></div>
                </li>     
                </ul>
               
                <button className="py-3 px-5 font-mullish bg-lightBlue text-white border-lightBlue border rounded-3xl text-sm font-bold">
                    Download
                </button>
            </div>    
                
     </nav>            
  )
}

export default Navbar
