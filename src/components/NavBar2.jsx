import React from 'react'
import classNames from './utils/classNames'
import { GiKidSlide, GiKnifeFork } from 'react-icons/gi'
import { MdOutlineRoomService } from 'react-icons/md'
import { IoBed } from 'react-icons/io5'
import { BsImages } from 'react-icons/bs'
import { IoMdContacts } from 'react-icons/io'

const NavBar2 = ({ isVisible }) => {
  return (


    // {/* <div className=' bg-sky-600 w-full py-1 h-8'>
    //     <div className='text-center uppercase text-white text-sm font-medium space-x-2'>
    //       <span className=''>Лято 2023</span>
    //       <span className=''>Очакваме ви</span>
    //       <span className=''>Вижте още </span>
    //     </div>
    //   </div> */

    <div className='bg-white fixed sm:hidden bottom-0 inset-x-0 border-t border-gray-200 z-20 ' >

      <ul className=' text-gray-500  text-xs grid grid-cols-5'>
        <li className='hover:text-gray-700 px-4 py-2' >
          <a className='flex flex-col gap-1 items-center' href="#services"><MdOutlineRoomService className="w-6 h-6 text-sky-600 mx-auto" /><p>Удобства</p></a>
        </li>
        <li className='hover:text-gray-700 px-4 py-2' >
          <a className='flex flex-col gap-1 items-center' href="#rooms2"><IoBed className="w-6 h-6 text-sky-600 mx-auto" /><p>Стаи</p></a>
        </li>
        <li className='hover:text-gray-700 px-4 py-2' >
          <a className='flex flex-col gap-1 items-center' href="#resturant"><GiKnifeFork className="w-6 h-6 text-sky-600 mx-auto" /><p>Ресторант</p></a>
        </li>
        {/* <li className='hover:text-gray-700 px-4 py-2' >
            <a className='flex flex-col gap-1 items-center' href="#"><GiKidSlide className="w-6 h-6 text-sky-600 mx-auto" /><p>Меню</p></a>
          </li> */}
        <li className='hover:text-gray-700 px-4 py-2' >
          <a className='flex flex-col gap-1 items-center' href="#gallery"><BsImages className="w-6 h-6 text-sky-600 mx-auto" /><p>Галерия</p></a>
        </li>
        <li className='hover:text-gray-700 px-4 py-2' >
          <a className='flex flex-col gap-1 items-center' href="#map"><IoMdContacts className="w-6 h-6 text-sky-600 mx-auto" /><p>Контакти</p></a>
        </li>

      </ul>

    </div >




  )
}

export default NavBar2