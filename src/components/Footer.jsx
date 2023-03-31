import React from 'react'
import { BsFacebook, BsTelephone } from 'react-icons/bs'
import { AiFillMail, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { GrLocation } from "react-icons/gr"
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineMail, MdOutlineWatchLater } from 'react-icons/md'

const Footer = () => {
  return (
    <div className="bg-[#333] sm:pt-20 py-12 max-sm:px-4 max-sm:mb-14">

      <div className="max-w-6xl mx-auto ">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-8">

          <div className="flex flex-col gap-5  text-white">
            <h3 className='text-lg uppercase font-title'>За нас</h3>
            <p>Семеен хотел Шарков се намира в центъра на село Огняново. Той предлага безплатен открит сезонен басейн, безплатен Wi-Fi и безплатен обществен паркинг. Огняновските минерални бани и басейни са на 250 метра.</p>

            {/* <button className="text-white bg-sky-600 py-3 px-5 self-start text-center hover:bg-transparent border-2 border-red-600  hover:text-red-600 text-sm tracking-[0.2rem] ">
              Button</button> */}

          </div>



          <div className='flex flex-col gap-5 text-white sm:ml-20 '>

            <h3 className='uppercase text-lg font-title '>Хотел Шарков</h3>
            <a href='#aboutus' className='hover:text-gray-300'>За хотела </a>
            <a href='#rooms2' className='hover:text-gray-300'>Стаи и обслужване</a>
            <a href='#resturant' className='hover:text-gray-300'>Ресторант</a>
            <a href='#gallery' className='hover:text-gray-300'>Басейн и СПА център</a>

            <a href='#map' className='hover:text-gray-300'>Контакти</a>

          </div>

          <div className="flex flex-col gap-5 text-white">
            <h2 className="uppercase text-lg font-title">Свържете се с нас</h2>

            <div className="flex gap-4 ">
              <IoLocationOutline className='w-5 h-5 shrink-0 mt-1 ' />
              <a href='#map' className=''> Семеен хотел Шарков
                с.Огняново, 2947 с.Огняново ул. Иван Вазов 15</a>
            </div>

            <div className="flex gap-2 items-center">
              <BsTelephone className='w-5 h-5 shrink-0' />
              <a className='pl-2' href="tel:+359896035958">+359 89 603 5958</a>

            </div>

            <div className="flex gap-2 items-center">
              <MdOutlineMail className='w-5 h-5 shrink-0' />
              <a className='pl-2' href="mailto:hotelsharkov@abv.bg">hotelsharkov@abv.bg</a>
            </div>



            <div className="flex gap-2 items-center">
              <MdOutlineWatchLater className='w-5 h-5 shrink-0' />
              <p className='pl-2'> Понеделник — Петък 8:00 - 17:00</p>

            </div>
            <div className='flex gap-2 border-t-2 space-y-4 items-center'>
              <a target='_blank' href="https://www.facebook.com/HotelSharkov/?locale=bg_BG"> <AiOutlineFacebook className='w-5 h-5 mt-4 ' /></a>
              <a href="#"><AiOutlineInstagram className='w-5 h-5' /> </a>
              <a href="#"><AiOutlineTwitter className='w-5 h-5' /></a>

            </div>

          </div>

        </div>

      </div>
      <p className="text-white mt-12 max-w-6xl mx-auto">

        Copyright © 2023 All rights reserved | This template is made with <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" inline-block w-5 h-5 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg> Devi8Studio.


      </p>

    </div>
  )
}

export default Footer