import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";


export default function Header() {
    const [toggleMobile, setToggleMobile] =useState(false)
  return (
    <>
      <header className="w-full relative sticky top-0 flex items-center justify-between md:justify-around py-2 px-4 min-h-16 z-40 shadow-md bg-appGreen text-white border-b-4 border-b-white">
      <Link to="/" className="flex items-center text-lg transition-all duration-500">
                    <h1 className="text-2xl">N</h1>
                    <span className="mt-2 flex items-center">
                    <h1 className="text-appYellow">ama</h1>
                    <h1>Care</h1>
                    </span>
                </Link>
        <nav className="hidden md:inline-flex">
            <ul className="flex items-center gap-5">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/members">Members</Link>
                </li>
            </ul>
        </nav>
        <button className="md:hidden" onClick={()=> setToggleMobile(!toggleMobile)}>
            <IoMdMenu className="h-7 w-7 hover:p-2 hover:text-white"/>
        </button>
        {toggleMobile && <div className="min-w-full flex flex-col md:hidden delay-500 absolute left-0 bg-appGreen shadow-md p-3 text-white top-10">
        <nav>
            <ul className="flex flex-col gap-5 p-2">
                <li className="hover:border-b-2 transition-all duration-200">
                    <Link to="/" onClick={()=>setToggleMobile(!toggleMobile)}>Home</Link>
                </li>
                <li className="hover:border-b-2 transition-all duration-200">
                    <Link to="/about" onClick={()=>setToggleMobile(!toggleMobile)}>About</Link>
                </li>
                <li className="hover:border-b-2 transition-all duration-200">
                    <Link to="/members" onClick={()=>setToggleMobile(!toggleMobile)}>Members</Link>
                </li>
            </ul>
        </nav>
        </div>}
        <button className="p-3 hidden md:inline-flex">Book an Appointment</button>
      </header>
    </>
  )
}
