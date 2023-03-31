import React from 'react'
import Single_room1 from "./Images/Single_room1.jpg"
import Apartament_2 from "./Images/Apartament_2.jpg"
import Apartament_3 from "./Images/Apartament_3.jpg"
import { HiOutlineUsers, HiWifi } from "react-icons/hi"
import { AiFillDropboxSquare } from 'react-icons/ai'
import { BiDish } from 'react-icons/bi'
import { GiTowel } from 'react-icons/gi'
import { FaSwimmingPool } from 'react-icons/fa'

import classNames from './utils/classNames'



const Rooms = () => {


  return (
    <div className='max-w-6xl mx-auto px-4 lg:px-0 sm:py-20 py-12'>

      <div class="flex flex-col gap-8 md:w-7/12 ">
        <h3 class=" text-gray-400 font-light text-lg uppercase relative after:w-[80px] after:h-0.5 after:absolute after:bg-gray-600 after:top-1/2 after:ml-6 mt-16">
          ПРЕПОРЪЧАНИ СТАИ</h3>
        <h2 class="text-5xl font-light leading-tight w-2/3">Стаи и Апартаменти</h2>
        <p class="font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit,
          iusto,
          omnis!
          Quidem,
          sint,
          impedit? Dicta eaque delectus tempora hic, corporis velit doloremque quod quam laborum,
          nobis
          iusto
          autem culpa quaerat!</p>

      </div>

      <div id="roomCardsContainer" class=" grid lg:grid lg:grid-cols-3 lg:gap-6 gap-4 mt-12 ">
        <div class="flex flex-col bg-white shadow-lg lg:w-auto overflow-hidden rounded-md ">
          <div className='overflow-hidden '>
            <img class="object-cover h-full w-full hover:scale-110  hover:duration-500  hover:brightness-75 "
              src={Single_room1} />
          </div>
          <div class="p-8 font-light leading-6 space-y-3">
            <h2 class="text-2xl leading-normal mb-2">Единична стая </h2>

            <div className='flex gap-3 items-center'>
              <HiOutlineUsers className='w-6 h-6 text-sky-600' />
              <h4> <span>1-2</span> <strong>възрастни</strong></h4>
            </div>

            <div className='flex gap-3 items-center'>
              <HiWifi className='w-6 h-6 text-sky-600' />
              <h4> Free Wifi, телевизор, климатик</h4>
            </div>
            <div className='flex gap-3 items-center'>
              <AiFillDropboxSquare className='w-6 h-6 text-sky-600' />
              <h4>Големина:<span> 15m</span><sup>2</sup></h4>
            </div>
            <div className='flex gap-3 items-center'>
              <BiDish className='w-6 h-6 text-sky-600' />
              <h4> Закуска </h4>
            </div>
            <div className='flex gap-3 items-center'>
              <GiTowel className='w-6 h-6 text-sky-600' />
              <h4> Кърпи и хавлии</h4>
            </div>
            <div className='flex gap-3 items-center'>
              <FaSwimmingPool className='w-6 h-6 text-sky-600' />
              <h4> Ползаване на минерален басейн</h4>
            </div>


            <h3 className='pt-5'>
              <sup class="-top-4 relative"></sup>
              <span class="text-[40px] ">50</span>
              <span> лв.</span>
              <span> /нощувка </span>
            </h3>
            {/* <button className='min-w-auto w-full h-10 bg-blue-400 p-2 rounded-md hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold text-center '>Резервирай тук</button> */}
          </div>


        </div>

        <div class="flex flex-col bg-white shadow-lg overflow-hidden rounded-md">
          <div className='overflow-hidden'>
            <img class="object-cover h-full w-full hover:scale-110  hover:duration-300 hover:brightness-110"
              src={Apartament_2} />
          </div>
          <div class="p-8 font-light leading-6 space-y-3">
            <h2 class="text-2xl leading-normal mb-2">Двойна стая </h2>

            <div className='flex gap-3 items-center'>
              <HiOutlineUsers className='w-6 h-6 text-sky-600' />
              <h4> <span>2-3</span> възрастни</h4>
            </div>

            <div className='flex gap-3 items-center'>
              <HiWifi className='w-6 h-6 text-sky-600' />
              <h4> Free Wifi, телевизор, климатик</h4>
            </div>
            <div className='flex gap-3 items-center'>
              <AiFillDropboxSquare className='w-6 h-6 text-sky-600' />
              <h4>Големина:<span> 20m</span><sup>2</sup></h4>
            </div>
            <div className='flex gap-3 items-center'>
              <BiDish className='w-6 h-6 text-sky-600' />
              <h4> Закуска </h4>
            </div>
            <div className='flex gap-3 items-center'>
              <GiTowel className='w-6 h-6 text-sky-600' />
              <h4> Кърпи и хавлии</h4>
            </div>
            <div className='flex gap-3 items-center'>
              <FaSwimmingPool className='w-6 h-6 text-sky-600' />
              <h4> Ползаване на минерален басейн</h4>
            </div>


            <h3 className='pt-5' >
              <sup class="-top-4 relative"></sup>
              <span class="text-[40px] ">70</span>
              <span> лв.</span>
              <span> / нощувка </span>
            </h3>

            {/* <button className='min-w-auto w-full h-10 bg-blue-400 p-2 rounded-xl hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold text-center '>Резервирай тук</button> */}

          </div>

        </div>

        <div class="flex flex-col bg-white shadow-lg rounded-md overflow-hidden  ">
          <div className='overflow-hidden '>
            <img class="object-cover h-full w-full  hover:scale-110  hover:duration-300 hover:brightness-110 "
              src={Apartament_3} />
          </div>
          <div class="p-8 font-light leading-6 space-y-3">
            <h2 class="text-2xl leading-normal mb-2">Студио </h2>

            <div className='flex gap-3 items-center'>
              <HiOutlineUsers className='w-6 h-6 text-sky-600' />
              <h4> <span>2-4</span> <strong>възрастни</strong></h4>
            </div>

            <div className='flex gap-3 items-center'>
              <HiWifi className='w-6 h-6 text-sky-600' />
              <h4> Free Wifi, телевизор, климатик</h4>
            </div>
            <div className='flex gap-3 items-center'>
              <AiFillDropboxSquare className='w-6 h-6 text-sky-600' />
              <h4>Големина:<span> 23m</span><sup>2</sup></h4>
            </div>
            <div className='flex gap-3 items-center'>
              <BiDish className='w-6 h-6 text-sky-800' />
              <h4> Закуска </h4>
            </div>
            <div className='flex gap-3 items-center'>
              <GiTowel className='w-6 h-6 text-sky-600' />
              <h4> Кърпи и хавлии</h4>
            </div>
            <div className='flex gap-3 items-center'>
              <FaSwimmingPool className='w-6 h-6 text-sky-600' />
              <h4> Ползаване на минерален басейн</h4>
            </div>


            <h3 className='pt-5'>
              <sup class="-top-4 relative"></sup>
              <span class="text-[40px] ">80</span>
              <span> Луксознив.</span>
              <span> / нощувка </span>
            </h3>

            {/* <button className='min-w-auto w-full h-10 bg-blue-400 p-2 rounded-xl hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold text-center '>Резервирай тук</button> */}

          </div>
        </div>
      </div>
      {/* <div class="flex items-center justify-center gap-4 py-12">
        <button id="prevRoom" class="disabled:opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        </button>

        <button id="nextRoom" class="disabled:opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </button>

      </div> */}

    </div>
  )
}

export default Rooms