import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [dropDown,setDropDown] = useState(false)
  const [menu,setMenu] = useState(false)

  function openMenu(){
    setMenu(true)
  }
  function closeMenu(){
    setMenu(false)
  }

  function openDropDown(){
    setDropDown(true)
  }
  function closeDropDown(){
    setDropDown(false)
  }
  return (
    <>
    {/* TOP BAR  */}
      <div className='w-full h-10 bg-blue-100 hidden items-center p-1 justify-between lg:flex'>
        <div className='flex gap-5 justify-center items-center ml-10'>
          <Link to="/"><img src="" alt="" className='h-5' /></Link>
          <Link to="/"><img src="" alt="" className='h-5' /></Link>
        </div>
        <div className='mr-4'>
          <ul className='flex gap-2 items-center justify-center ml-auto'>
            <li className='text-xs text-gray-600 font-bold'><Link to=''>Help</Link></li>
            <li className='text-lg font-thin text-gray-600'>|</li>
            <li className='text-xs text-gray-600 font-bold'><Link to=''>Join Us</Link></li>
            <li className='text-lg font-thin text-gray-600'>|</li>
            <li className='text-xs text-gray-600 font-bold'><Link to=''>Sign In</Link></li>
          </ul>
        </div>
      </div>
    {/* NAVIGATION */}
    <div className='flex w-full p-2 justify-between items-center md:hidden'>
      <div><Link to='/home'><img src="src\assets\Logo AI.png" alt="" className='h-6'/></Link></div>
      <div><img src="src\assets\menu icon.png" alt="" className='h-5 'onClick={()=>setMenu(!menu)}/></div>
    </div>
      { menu && <div className='w-full flex justify-evenly p-2 text-xs md:hidden flex-wrap gap-2' >
        <div>
          <ul className='flex flex-col gap-1 '>
            <Link to='/home'><li className='text-base font-semibold '>Home</li></Link>
            <div className='font-light'>
            </div>
          </ul>
        </div>
        <div>
        <ul className='flex flex-col gap-1 '>
            <Link><li className='text-base font-semibold '>Services</li></Link>
            <div className='font-light'>
            </div>
          </ul>
        </div>
        <div>
        <ul className='flex flex-col gap-1 '>
            <Link><li className='text-base font-semibold '>Contact</li></Link>
            <div className='font-light'>
            </div>
          </ul>
        </div>
      </div>
}
    <div className='hidden md:flex p-2 items-center justify-between  min-h-16'>
      <div><img src="src\assets\Logo AI.png" alt="" className='h-9' /></div>
      <div>
        <ul className='flex gap-2'>
          <Link to='/home'><li className='font-semibold'>Home</li></Link>
          <Link to='/imagerecognition'><li>Image Detection</li></Link>
          <Link><li onClick={()=>setDropDown(!dropDown)} className='hover:transition flex gap-1 items-center justify-center ease-in-out duration-150 hover:border-b-2 hover:border-b-blue-500 '>More <img src="src\assets\right-arrow.png" alt="" className='h-4 mt-1' /></li>
          { dropDown && 
            <div  className='w-fit h-fit absolute '>
            <ul className='flex flex-col p-3 shadow rounded-b-md bg-white items-start justify-center'>
              <Link to='/handpose'><li className='ml-2 mr-2'>Handpose</li></Link>
              <li className='h-[1px] w-full bg-gray-300'></li>
              <li className='ml-2 mr-2'>Models</li>
              <li className='h-[0.7px] w-full bg-gray-300'></li>
              <li className='ml-2 mr-2'>Contact</li>
            </ul>
          </div>
          }
          </Link>
        </ul>
      </div>
      <div>
        <button className='bg-blue-500 text-white rounded-lg p-2'>Register</button>
      </div>
    </div>
    </>
  );
}

export default Navigation;
