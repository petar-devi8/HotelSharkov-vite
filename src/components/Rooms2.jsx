import React from 'react'
import Single_room1 from "./Images/Single_room1.jpg"
import { AiFillDropboxSquare } from 'react-icons/ai'
import { BiDish } from 'react-icons/bi'
import { FaSwimmingPool } from 'react-icons/fa'
import { GiTowel } from 'react-icons/gi'
import { HiOutlineUsers, HiWifi } from 'react-icons/hi'
import Apartament_2 from "./Images/Apartament_2.jpg"
import Apartament_3 from "./Images/Apartament_3.jpg"
import { Fade } from 'react-slideshow-image'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

import classNames from "./utils/classNames"


const Rooms2 = () => {




  const rooms = [
    {
      url: Single_room1,
    },
    {
      url: Apartament_2,
    },
    {
      url: Apartament_3,
    },

  ];
  const properties = {
    prevArrow: <div className=" bg-black/40 text-white p-2  ">
      <BsChevronCompactLeft className=" w-5 h-5" />
    </div>,
    nextArrow: <div className="  bg-black/40  text-white p-2 ">
      <BsChevronCompactRight className=" w-5 h-5 " />
    </div>
  }

  const indicators = () => (<div className='indicator p-1 sm:h-3 sm:w-3 h-2 w-2 rounded-full bg-gray-400 sm:mx-4 mx-2 cursor-pointer active:bg-gray-600 hover:bg-gray-600' />)


  return (
    <div id='rooms2' className='max-w-6xl mx-auto px-4 lg:px-0 sm:py-20 py-12 scroll-mt-24'>

      <div class="flex flex-col sm:gap-8 gap-5 md:w-7/12 ">
        <h3 class=" text-gray-400 font-light sm:text-lg uppercase relative after:w-[80px] after:h-0.5 after:absolute after:bg-gray-600 after:top-1/2 after:ml-6 ">
          ПРЕПОРЪЧАНИ СТАИ</h3>
        <h2 class="sm:text-5xl text-3xl font-light leading-tight w-2/3">Стаи и Апартаменти</h2>
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

      <div className='flex flex-col justify-between sm:gap-10 gap-5 sm:pt-10 pt-5'>
        <div className='flex flex-col-reverse sm:flex-row gap-5 sm:gap-8  justify-between sm:py-5'>
          <div class=" leading-6 space-y-2 ">
            <h2 class="sm:text-4xl text-2xl leading-normal pb-4">Единична стая </h2>

            <div className='flex gap-3 items-center'>
              <HiOutlineUsers className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p className='text-black'> <span>1-2</span> възрастни</p>
            </div>

            <div className='flex gap-3 items-center'>
              <HiWifi className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p> Free Wifi, телевизор, климатик</p>
            </div>
            <div className='flex gap-3 items-center'>
              <AiFillDropboxSquare className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p>Големина:<span> 15m</span><sup>2</sup></p>
            </div>
            <div className='flex gap-3 items-center'>
              <BiDish className='sm:w-6 sm:h-6 w-4 h-4 text-sky-600' />
              <p> Закуска </p>
            </div>
            <div className='flex gap-3 items-center'>
              <GiTowel className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p> Кърпи и хавлии</p>
            </div>
            <div className='flex gap-3 items-center'>
              <FaSwimmingPool className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p> Ползаване на минерален басейн</p>
            </div>


            <h3 className='pt-4'>
              <sup class="-top-4 relative"></sup>
              <span class="text-[40px] ">50</span>
              <span> лв.</span>
              <span> /нощувка </span>
            </h3>
            {/* <button className='min-w-auto w-full h-10 bg-blue-400 p-2 rounded-md hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold text-center '>Резервирай тук</button> */}
          </div>

          {/* <div className='overflow-hidden sm:w-2/3 w-full rounded-md '>
            <img class="object-cover h-[500px] w-full hover:scale-110  hover:duration-500  hover:brightness-75 "
              src={Single_room1} />
          </div> */}
          <div className='overflow-hidden sm:w-2/3 w-full rounded-md'>
            <div className='mx-auto max-w-sm sm:max-w-screen-xl w-full h-full mt-12 sm:mt-0'>
              <Fade
                {...properties}
                duration={4000}
                transitionDuration={500}
                // indicators={indicators}
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
              >
                {rooms.map((room, i) =>
                  <div className='overflow-hidden  w-full rounded-md '>
                    <img className="object-cover sm:h-[400px] w-full hover:duration-500 " src={room.url} alt='' />
                  </div>)}
              </Fade>
            </div>
          </div>


        </div>
        <div className='flex flex-col-reverse sm:flex-row gap-5 sm:gap-8 justify-between sm:py-5'>
          <div class=" leading-6 space-y-2 ">
            <h2 class="sm:text-4xl text-2xl leading-normal pb-4">Двойна стая  </h2>

            <div className='flex gap-3 items-center'>
              <HiOutlineUsers className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p> <span>2-3</span> възрастни</p>
            </div>

            <div className='flex gap-3 items-center'>
              <HiWifi className='sm:w-6 sm:h-6 w-4 h-4 text-sky-600' />
              <p> Free Wifi, телевизор, климатик</p>
            </div>
            <div className='flex gap-3 items-center'>
              <AiFillDropboxSquare className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p>Големина:<span> 20m</span><sup>2</sup></p>
            </div>
            <div className='flex gap-3 items-center'>
              <BiDish className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p> Закуска </p>
            </div>
            <div className='flex gap-3 items-center'>
              <GiTowel className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p> Кърпи и хавлии</p>
            </div>
            <div className='flex gap-3 items-center'>
              <FaSwimmingPool className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p> Ползаване на минерален басейн</p>
            </div>


            <h3 className='pt-5'>
              <sup class="-top-4 relative"></sup>
              <span class="text-[40px] ">70</span>
              <span> лв.</span>
              <span> /нощувка </span>
            </h3>
            {/* <button className='min-w-auto w-full h-10 bg-blue-400 p-2 rounded-md hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold text-center '>Резервирай тук</button> */}
          </div>

          {/* <div className='overflow-hidden sm:w-2/3 w-full rounded-md '>
            <img class="object-cover h-[500px] w-full hover:scale-110  hover:duration-500  hover:brightness-75 "
              src={Single_room1} />
          </div> */}
          <div className='overflow-hidden sm:w-2/3 w-full rounded-md'>
            <div className='mx-auto max-w-sm sm:max-w-screen-xl w-full h-full   mt-12 sm:mt-0'>
              <Fade
                {...properties}
                duration={5000}
                transitionDuration={500}
                // indicators={indicators}
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
              >
                {rooms.map((room, i) =>
                  <div className='overflow-hidden  w-full rounded-md '>
                    <img className="object-cover sm:h-[400px] w-full  hover:duration-500 " src={room.url} alt='' />
                  </div>)}
              </Fade>
            </div>
          </div>


        </div>
        <div className='flex flex-col-reverse sm:flex-row gap-10 justify-between sm:py-5'>
          <div class=" leading-6 space-y-2 ">
            <h2 class="sm:text-4xl text-2xl leading-normal pb-4">Студио </h2>

            <div className='flex gap-3 items-center'>
              <HiOutlineUsers className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p> <span>2-4</span> възрастни</p>
            </div>

            <div className='flex gap-3 items-center'>
              <HiWifi className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p> Free Wifi, телевизор, климатик</p>
            </div>
            <div className='flex gap-3 items-center'>
              <AiFillDropboxSquare className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p>Големина:<span> 23m</span><sup>2</sup></p>
            </div>
            <div className='flex gap-3 items-center'>
              <BiDish className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p> Закуска </p>
            </div>
            <div className='flex gap-3 items-center'>
              <GiTowel className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p> Кърпи и хавлии</p>
            </div>
            <div className='flex gap-3 items-center'>
              <FaSwimmingPool className='sm:w-6 sm:h-6 w-5 h-5 text-sky-600' />
              <p> Ползаване на минерален басейн</p>
            </div>


            <h3 className='pt-5'>
              <sup class="-top-4 relative"></sup>
              <span class="text-[40px] ">80</span>
              <span> лв.</span>
              <span> /нощувка </span>
            </h3>
            {/* <button className='min-w-auto w-full h-10 bg-blue-400 p-2 rounded-md hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold text-center '>Резервирай тук</button> */}
          </div>

          {/* <div className='overflow-hidden sm:w-2/3 w-full rounded-md '>
            <img class="object-cover h-[500px] w-full hover:scale-110  hover:duration-500  hover:brightness-75 "
              src={Single_room1} />
          </div> */}
          <div className='overflow-hidden sm:w-2/3 w-full rounded-md'>
            <div className='mx-auto max-w-sm sm:max-w-screen-xl w-full h-full  mt-12 sm:mt-0'>
              <Fade
                {...properties}

                duration={4000}
                transitionDuration={500}
                // indicators={indicators}
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
              >
                {rooms.map((room, i) =>
                  <div className='overflow-hidden  w-full rounded-md '>
                    <img className="object-cover sm:h-[400px] w-full hover:duration-500 " src={room.url} alt='' />
                  </div>)}
              </Fade>
            </div>
          </div>


        </div>

      </div>

    </div >
  )
}

export default Rooms2