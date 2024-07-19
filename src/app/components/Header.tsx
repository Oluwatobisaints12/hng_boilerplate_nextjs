// components/Header.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import { Inter } from "next/font/google";

import HngImg from '../../../public/Group 4.svg';
import navbarMenu from '../../../public/Logo+menu.svg'
import hngMenuLogo from '../../../public/Group 4 (1).svg'
import mobileProfile from '../../../public/button.svg'
import Link from 'next/link';

// const inter = Inter({ subsets: ["latin"] });

const Header: React.FC = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <header className='lg:flex bg-[#FAFAFA] '>
      <div className='flex justify-between flex-row mx-[16px] my-[19px] items-center lg:hidden'>
        <Image
        src={navbarMenu} 
        width={24}
        height={24}
        alt='navbar menu logo'/>
           <Image
           className='ml-[16px]'
        src={hngMenuLogo} 
        width={40}
        height={38}
        alt=''/>
        <h1 className='text-[28px] font-semibold text-[#525252] '>HNG Boilerplate</h1>
        <Image
         width={44}
         height={44}
        src={mobileProfile}
        alt=''/>
      </div>
     <div className='hidden lg:flex flex-row items-center w-full justify-between  my-[32px] mx-[120px]'>
     <div className="lg:flex items-center flex-row ">
        <Image
         width={57}
         height={52}
          src={HngImg}
          alt='hng header image'
        />
        <h1 className=" font-semibold text-gray-700">HNG Boilerplate</h1>
      </div>
      <nav className='flex flex-row items-center w-[30%]'>
        <ul className='flex flex-row items-center  justify-between w-full'>
          <li className='text-[#525252] font-medium text-[16px] hover:font-semibold'><Link href="/">Home</Link></li>
          <li className='text-[#525252] font-medium text-[16px] hover:font-semibold'><Link href="/pricing">Pricing</Link></li>
          <li className='text-[#525252] font-medium text-[16px] hover:font-semibold'><Link href="/career">Career</Link></li>
        </ul>
      </nav>
      <div className='flex gap-[20px]'>
        <button className='py-[10px] px-[32px] text-[#434343]  text-[14px] font-medium border-[1px] border-solid border-[#F97316] rounded-md hover:bg-[#F97316] hover:text-white transition duration-250 ease-in-out' type='button' onClick={handleButtonClick}>Log In</button>
        <button className="bg-[#F97316] text-white rounded-md p-4 hover:bg-[#FAFAFA] hover:text-[#434343] transition duration-250 ease-in-out" type='button' onClick={handleButtonClick}>Get Started</button>
      </div>
     </div>
    </header>
  );
};

export default Header;
