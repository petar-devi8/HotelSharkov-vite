import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { RiStarSFill } from 'react-icons/ri'
import { IoTimeOutline } from 'react-icons/io5'
import { } from 'react-router-dom';
import classNames from './utils/classNames';
import { Tab } from '@headlessui/react'

const Resturant = () => {


  return (
    <div id='resturant' className='max-w-6xl mx-auto px-4 lg:px-0 sm:py-20 py-12 scroll-mt-24'>
      <div className="space-y-5">
        <h2 className='font-medium  tracking-wider  text-gray-400 uppercase text-center'>Семеен Хотел Шарков</h2>
        <h2 className="font-medium  sm:text-5xl text-3xl  text-center text-gray-600">Ресторант Шарков</h2>
      </div>

      <div className="space-y-5 mt-12  ">
        <div className='flex gap-1 items-start'>

          <RiStarSFill className="sm:w-8 sm:h-8 w-6 h-6 text-sky-600 " />
          <RiStarSFill className="sm:w-8 sm:h-8 w-6 h-6 text-sky-600 " />
          <RiStarSFill className="sm:w-8 sm:h-8 w-6 h-6 text-sky-600 " />
          <RiStarSFill className="sm:w-8 sm:h-8 w-6 h-6 text-sky-600 " />
          <RiStarSFill className="sm:w-8 sm:h-8 w-6 h-6 text-sky-600 " />


        </div>

        <h4 className="text-gray-600 text-lg">Удоволствие за сетивата</h4>

        <p className="text-gray-600">Led by Chef de Micheal Martin, The Restaurant is celebrated for its excellent cuisine and unique ambience. The gorgeous dining room features three open studio kitchens, allowing you to enjoy the sights and sounds of the culinary artistry on display. The menu showcases both Asian and European influences, with a tempting selection of classic favorites and creative dishes for you to sample. Cheese connoisseurs will be drawn to the The Wine and Cheese Cellar, housed in five-meter-high glass walls, where our knowledgeable staff can introduce you to some of New York's greatest culinary treasures.</p>

        <h4 className="text-lg text-gray-600">Работно време :</h4>
        <div className="flex flex-col gap-5 text-gray-600">
          <div className="flex gap-3 items-center">
            <IoTimeOutline className="w-6 h-6 text-yellow-600" />
            <p>Закуска : 8.00 - 11.00 (всеки ден)</p>
          </div>
          <div className="flex gap-3 items-center">
            <IoTimeOutline className="w-6 h-6 text-yellow-600" />
            <p>Обяд : 12.00 - 2.00 (всеки ден)</p>
          </div>
          <div className="flex gap-3 items-center">
            <IoTimeOutline className="w-6 h-6 text-yellow-600" />
            <p>Вечеря : 18:30 - последна поръчка 22:00 </p>
          </div>

        </div>

        <p className='text-gray-600'>Голяма лятна градина ....</p>

      </div>


      <div id="menu" className={classNames(location.pathname !== '/' && '', 'max-w-6xl mx-auto px-4 lg:px-0 pt-20')}>


        <div className='flex flex-col items-center justify-between gap-6 text-center mb-6 '>
          <h2 className='text-2xl sm:text-4xl text-gray-600'> Меню</h2>
        </div>

        <Tab.Group>
          <Tab.List className=' scrollbar-hidden overflow-x-scroll mx-auto -mb-px flex flex-wrap sm:flex-nowrap sm:space-x-8 border-b border-gray-200 max-sm:px-2 sm:text-xl  justify-between items-center text-left text-gray-600'>

            <Tab className="ui-selected:border-slate-800 ui-selected:text-slate-900 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-600 active:border-gray-600 outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium w-1/3">Закуска</Tab>
            <Tab className="ui-selected:border-slate-800 ui-selected:text-slate-900 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-600 active:border-gray-600 outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium w-1/3">Салати</Tab>
            <Tab className=" ui-selected:border-slate-800 ui-selected:text-slate-900 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-600 active:border-gray-600 outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium w-1/3">Предястия</Tab>
            <Tab className=" ui-selected:border-slate-800 ui-selected:text-slate-900 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-600 active:border-gray-600 outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium w-1/3 ">Основни ястия</Tab>
            <Tab className=" ui-selected:border-slate-800 ui-selected:text-slate-900 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-600 active:border-gray-600 outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium w-1/3 ">Напитки</Tab>
            <Tab className=" ui-selected:border-slate-800 ui-selected:text-slate-900 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-600 active:border-gray-600 outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium w-1/3">Обедно меню</Tab>

          </Tab.List>

          <Tab.Panels >
            <Tab.Panel className='flex max:sm-px-2 gap-10  overflow-x-scroll scrollbar-hidden sm:overflow-hidden max-w-6xl mx-auto snap-center snap-x snap-mandatory sm:py-16 py-10' >

              <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 gap-6 w-full">
                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 border-dashed border-gray-400 border-b py-2">
                    <h4 className="text-gray-700 sm:text-lg">Пържени филийки</h4>
                    <p className="sm:text-xl ">4 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm ">2 броя със сладко, мед или сирене </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Палачнки </h4>
                    <p className="sm:text-xl">5 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">2 броя със сладко, мед или сирене </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Зелена салата</h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">маруля, пресен лук,репички, краставици  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2 ">
                    <h4 className="text-gray-700 sm:text-lg">Салата Цезар </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm" >айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Салата Цезар </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Салата Цезар </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>


              </div>


            </Tab.Panel>
            <Tab.Panel className='flex max-sm:px-0 gap-10 overflow-x-scroll scrollbar-hidden sm:overflow-hidden max-w-6xl mx-auto snap-center snap-x snap-mandatory sm:py-16 py-10 ' >

              <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 gap-6 w-full">
                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Салата Цезар </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2">
                  <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Шопска салата </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">домати,чушки, краставици, лук, сирене,магданоз   </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Зелена салата</h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">маруля, пресен лук,репички, краставици  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Салата Цезар </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Салата Цезар </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Салата Цезар </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

              </div>

            </Tab.Panel>

            <Tab.Panel className='flex max-sm:px-0 gap-10 overflow-x-scroll scrollbar-hidden sm:overflow-hidden max-w-6xl mx-auto snap-center snap-x snap-mandatory sm:py-16 py-10' >

              <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 gap-6 w-full">
                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Плато с различни колбаси  </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">луканки, сирена, кашкавал </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Топени сирена </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">домати,чушки, краставици, лук, сирене,магданоз   </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Пилешки хапки</h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">маруля, пресен лук,репички, краставици  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Тиквики с чеснов сос </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Салата Цезар </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Салата Цезар </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

              </div>

            </Tab.Panel>

            <Tab.Panel className='flex max-sm:px-0 gap-10 overflow-x-scroll scrollbar-hidden sm:overflow-hidden max-w-6xl mx-auto snap-center snap-x snap-mandatory sm:py-16 py-10 ' >

              <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 gap-6 w-full">
                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Пилешко месо с гъби </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">луканки, сирена, кашкавал </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Свинко с картофи</h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">домати,чушки, краставици, лук, сирене,магданоз   </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Пълнени чушки</h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">маруля, пресен лук,репички, краставици  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Риба</h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Пиле Фрикасе </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Скара</h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

              </div>

            </Tab.Panel>

            <Tab.Panel className='flex max-sm:px-0 gap-10 overflow-x-scroll scrollbar-hidden sm:overflow-hidden max-w-6xl mx-auto snap-center snap-x snap-mandatory sm:py-16 py-10' >

              <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 gap-6 w-full">
                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2 ">
                    <h4 className="text-gray-700 sm:text-lg"> Безалкохолни напитки </h4>
                    <p className="sm:text-xl">2 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">Кола, Фанта,Спрайт Тоник</p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Топли напитки</h4>
                    <p className="sm:text-xl">2 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">кафе, капучино, чай   </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Натурални сокове и фрешове</h4>
                    <p className="sm:text-xl">4лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">портокол, кайсия, праскова, домашна лимонада </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Води</h4>
                    <p className="sm:text-xl">1,50 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Алкохоли </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">ракии, уиски...before:</p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Бира</h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">Каменица, Загорка, Ариана, Стела Артоа....  </p>
                </div>

              </div>

            </Tab.Panel>

            <Tab.Panel className='flex max-sm:px-0 gap-10 overflow-x-scroll scrollbar-hidden sm:overflow-hidden max-w-6xl mx-auto snap-center snap-x snap-mandatory sm:py-16 py-10 ' >

              <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 gap-6 w-full">
                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Пилешко месо с гъби </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">луканки, сирена, кашкавал </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Свинко с картофи</h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">домати,чушки, краставици, лук, сирене,магданоз   </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Пълнени чушки</h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">маруля, пресен лук,репички, краставици  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Риба</h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg">Пиле Фрикасе </h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

                <div className="flex flex-col sm:gap-4 gap-2 ">
                  <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                    <h4 className="text-gray-700 sm:text-lg ">Скара</h4>
                    <p className="sm:text-xl">8 лв.</p>
                  </div>
                  <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
                </div>

              </div>

            </Tab.Panel>


          </Tab.Panels>


        </Tab.Group >

      </div >

    </div>
  )
}

export default Resturant