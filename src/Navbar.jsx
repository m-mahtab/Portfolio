import React, { useState } from "react"
import { MdPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";




function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className='m-0 py-5 px-10 text-white  absolute z-50 w-full' >
      <div className='navWrapper flex justify-between '>
        <div>
          <h1 className=' sm:text-xl lg:text-2xl xl:text-3xl'>Mishaal.</h1>
        </div>

        <div className="md:hidden ">
          <button onClick={toggleMenu} className="text-2xl sm:text-4xl px-4 py-2 focus:outline-none
             w-[28px] h-[28px] object-contain">
            &#9776;
          </button>
        </div>

        <div>
          <div className={`navigation-menu ${isMenuOpen ? "block" : "hidden"
            } text-xs  lg:text-xl   font-light items-center space-x-4  md:font-semibold md:block
            mx-2 lg:mx-4  rounded-lg text-white absolute md:relative z-40  top-14 md:top-0 right-0 min-w-[100px] py-2 md:py-0`}>
            <ul className='sm:flex bg-black bg-opacity-60 sm:bg-transparent pr-11 sm:pr-0 py-3 '>
              <li className='px-6 flex'>
                <MdPhone />
                <p className="pl-1 pb-0">+92 315 1721 049</p>
              </li>
              <li className='flex'>
                <MdMail />
                <p className="pl-1 ">malaika_mishaal@icloud.com</p>
              </li>
            </ul>
          </div>
        </div>


      </div >
    </div>

  )
}

export default Navbar