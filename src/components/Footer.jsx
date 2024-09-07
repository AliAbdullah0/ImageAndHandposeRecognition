import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
<footer className='mt-5 border-t-2 font-[Roboto] bg-blue-100'>
   
    {/* end part */}
    <div className='w-full flex md:flex-row flex-col justify-evenly p-10 gap-3' >
      <div className='flex flex-col gap-6'>
        <ul className='flex flex-col gap-4 '>
          <li className='font-bold font-[Roboto] text-sm'>Resources</li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Tensor Flow</Link></li>
          <li className='text-sm text-gray-500 font-bold hover:underline'><Link>React JS</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Tailwind CSS</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>HTML 5</Link></li>
        </ul>
      </div>
      <div>
      <ul className='flex flex-col gap-4 '>
          <li className='font-bold font-[Roboto] text-sm'>Help</li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Project Details</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Duration</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Planning</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Source Code</Link></li>
          </ul>
      </div>
      <div>
      <ul className='flex flex-col gap-4 '>
          <li className='font-bold font-[Roboto] text-sm'>Team</li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Ali Abdullah</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Ajlal Shah</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Afnan Khan</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Purpose</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Sustainability</Link></li>
          </ul>
      </div>
      <div>
      <ul className='flex flex-col gap-4 '>
          <li className='font-bold font-[Roboto] text-sm'>Credits</li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Bahria College</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Computer Teachers</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>Lab Assistants</Link></li>
          <li><Link to='' className='text-sm text-gray-500 font-bold hover:underline'>FBISE</Link></li>
          </ul>
      </div>
      
    </div>
    <div className='flex w-full justify-center'>
        <ul className='flex gap-4  mb-10 md:flex-row flex-col'>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>&copy;2024 FBISE Computer Science Projects</Link></li>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>FBISE</Link></li>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>Bahria College</Link></li>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>Github</Link></li>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>Facebook</Link></li>
        <li><Link to='' className='text-base text-gray-500 font-bold hover:underline'>Instagram</Link></li>
        </ul>
      </div>
</footer>
  );
}

export default Footer;
