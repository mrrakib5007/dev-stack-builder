import { useState } from 'react';
import Logo from '../assets/logo-text.png';
import MenuIcon from '../assets/hamburger.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='bg-white border-b border-gray-100 sticky top-0 z-40'>
        <div className='container mx-auto grid grid-cols-3 items-center px-5 py-3'>
          <div className='flex lg:hidden cursor-pointer' onClick={() => setIsOpen(true)}>
            <img className='max-w-20' src={MenuIcon} alt="Menu Icon" />
          </div>
          <div>
            <a href="#">
              <img src={Logo} alt="Dev Stack" />
            </a>
          </div>
          <div className='hidden lg:flex'>
            <ul className='flex items-center gap-5'>
              <li className='text-(--secoundary-color) font-semibold cursor-pointer'>Home</li>
              <li className='text-[#475569] hover:text-(--secoundary-color) font-semibold cursor-pointer'>Technologies</li>
              <li className='text-[#475569] hover:text-(--secoundary-color) font-semibold cursor-pointer'>Projects</li>
              <li className='text-[#475569] hover:text-(--secoundary-color) font-semibold cursor-pointer'>About</li>
              <li className='text-[#475569] hover:text-(--secoundary-color) font-semibold cursor-pointer'>Contact</li>
            </ul>
          </div>
          <div className='flex items-center justify-end'>
            <button className='py-1.5 lg:py-2 px-2 lg:px-6 text-sm lg:text-base text-[#334155] rounded-full cursor-pointer hover:text-(--secoundary-color) hover:font-semibold'>Login</button>
            <button className='py-1.5 lg:py-2 px-2 lg:px-6 text-sm lg:text-base bg-(--secoundary-color) text-white font-semibold rounded-full cursor-pointer shadow-md'>Signup</button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-50 transition-colors duration-300 ${isOpen ? 'bg-black/50 visible' : 'bg-black/0 invisible'}`} onClick={() => setIsOpen(false)}></div>

      <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex items-center justify-between p-4 border-b border-gray-100'>
          <img src={Logo} alt="Logo" className='max-w-24' />
          <button className='text-xl text-[#475569] cursor-pointer' onClick={() => setIsOpen(false)}>✕</button>
        </div>
        <ul className='flex flex-col gap-4 p-5'>
          <li className='text-[#475569] hover:text-(--secoundary-color) hover:font-semibold cursor-pointer'>Home</li>
          <li className='text-[#475569] hover:text-(--secoundary-color) hover:font-semibold cursor-pointer'>Technologies</li>
          <li className='text-[#475569] hover:text-(--secoundary-color) hover:font-semibold cursor-pointer'>Projects</li>
          <li className='text-[#475569] hover:text-(--secoundary-color) hover:font-semibold cursor-pointer'>About</li>
          <li className='text-[#475569] hover:text-(--secoundary-color) hover:font-semibold cursor-pointer'>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar