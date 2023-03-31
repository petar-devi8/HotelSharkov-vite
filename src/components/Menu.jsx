import { AiFillStar } from "react-icons/ai"
import menu_1 from "./Images/menu_1.webp"
import menu_2 from "./Images/menu_2.webp"
import menu_3 from "./Images/menu_3.webp"
import { Tab } from '@headlessui/react'
import { IoTimeOutline } from "react-icons/io5"


const Menu = () => {

  return (
    // <div className="max-w-6xl mx-auto sm:py-28  ">

    //   <div className="mb-16 px-4 md:px-4 ">
    //     <h4 className="text-gray-400 font-light text-lg uppercase  mb-6 relative after:w-[80px] after:h-0.5 after:absolute after:bg-gray-600 after:top-1/2 after:ml-6">
    //       Меню
    //     </h4>
    //     <h2 className="text-5xl font-light mb-12 mt-8">Ресторант Меню</h2>
    //   </div>
    //   <div className="flex justify-around md:px-4   ">

    //     <p className="uppecase active:text-black hover:text-[#fc3c3c]  text-gray-500 text-lg leading-7  border-b-2 hover:border-red-600 w-1/3 text-center p-10 " >Закуска</p>

    //     <p className="uppecase active:text-black hover:text-[#fc3c3c]  text-gray-500 text-lg leading-7  border-b-2 hover:border-red-600 w-1/3 text-center p-10" >Обяд</p>
    //     <p className="uppecase active:text-black hover:text-[#fc3c3c]  text-gray-500 text-lg leading-7  border-b-2  hover:border-red-600 w-1/3 text-center p-10">Вечеря</p>
    //   </div>


    //   <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mx-5 md:mx-4 mt-28">
    //     <div className="flex flex-col gap-6 shadow-lg">
    //       <img className="object-cover h- w-full rounded-md"
    //         src={menu_1}
    //         alt=""></img>
    //       <div className="flex flex-col gap-4 m-4 p-6">
    //         <h3 className="leading-9 text-2xl font-light  ">Яйца с бекон </h3>
    //         <p className="text-gray-500 leading-7 text-base mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id alias consequatur cupiditate sit rem et, fugit adipisci quos   </p>
    //         <h3 className="text-4xl font-light"><span>5 <sup className="text-gray-500  top-1">лв.</sup> </span></h3>

    //       </div>


    //     </div>

    //     <div className="flex flex-col gap-6 shadow-lg ">
    //       <img className="object-cover h- w-full rounded-md"
    //         src={menu_2}
    //         alt=""></img>
    //       <div className="flex flex-col gap-4 m-4 p-6">
    //         <h3 className="leading-9 text-2xl font-light">Свинска пържола с гарнитура </h3>
    //         <p className="text-gray-500 leading-7 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id alias consequatur cupiditate sit rem et, fugit adipisci quos </p>
    //         <h3 className="text-4xl font-light"><span>9<sup className="text-gray-500  top-1">лв.</sup> </span></h3>

    //       </div>


    //     </div>

    //     <div className="flex flex-col gap-6 shadow-lg">
    //       <img className="object-cover h- w-full rounded-md"
    //         src={menu_3}
    //         alt=""></img>
    //       <div className="flex flex-col gap-4 m-4 p-6">
    //         <h3 className="leading-9 text-2xl font-light">Пилешка пържола със гъбен сос</h3>
    //         <p className="text-gray-500 leading-7 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id alias consequatur cupiditate sit rem et, fugit adipisci quos </p>
    //         <h3 className="text-4xl font-light"><span>8 <sup className="text-gray-500  top-1">лв.</sup> </span></h3>

    //       </div>


    //     </div>



    //   </div>



    // </div>

    <div id="menu" className='max-w-6xl mx-auto px-4 lg:px-0 sm:py-20 py-12'>
      {/* <div className="space-y-5">
        <h2 className='font-medium  tracking-wider  text-gray-400 uppercase text-center'>Шарков Хотел</h2>
        <h2 className="font-medium  text-4xl   text-center text-gray-600">Ресторант Шарков</h2>
      </div>

      <div className="space-y-5 mt-12 px-4">
        <div className='flex gap-1 items-start'>
          <AiFillStar className="w-5 h-5 text-yellow-600" />
          <AiFillStar className="w-5 h-5 text-yellow-600" />
          <AiFillStar className="w-5 h-5 text-yellow-600" />
          <AiFillStar className="w-5 h-5 text-yellow-600" />
          <AiFillStar className="w-5 h-5 text-yellow-600" />
        </div>

        <h4 className="text-gray-600 text-lg">Удоволствие за сетивата</h4>

        <p className="text-gray-600">Led by Chef de Micheal Martin, The Restaurant is celebrated for its excellent cuisine and unique ambience. The gorgeous dining room features three open studio kitchens, allowing you to enjoy the sights and sounds of the culinary artistry on display. The menu showcases both Asian and European influences, with a tempting selection of classic favorites and creative dishes for you to sample. Cheese connoisseurs will be drawn to the The Wine and Cheese Cellar, housed in five-meter-high glass walls, where our knowledgeable staff can introduce you to some of New York's greatest culinary treasures.</p>

        <h4 className="text-lg text-gray-600">Работно време :</h4>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            <IoTimeOutline className="w-5 h-5 text-yellow-600" />
            <p>Закуска : 8.00 - 11.00 (всеки ден)</p>
          </div>
          <div className="flex gap-3 items-center">
            <IoTimeOutline className="w-5 h-5 text-yellow-600" />
            <p>Обяд : 12.00 - 2.00 (всеки ден)</p>
          </div>
          <div className="flex gap-3 items-center">
            <IoTimeOutline className="w-5 h-5 text-yellow-600" />
            <p>Вечеря : 18:30 - последна поръчка 22:00 </p>
          </div>

        </div>

        <p>Голяма лятна градина ....</p>

      </div> */}

      <div className='flex flex-col items-center justify-between gap-6 text-center mb-6 '>
        <h2 className='text-3xl sm:text-5xl text-gray-600 '> Меню</h2>
      </div>

      <Tab.Group>
        <Tab.List className=' scrollbar-hidden overflow-x-scroll mx-auto -mb-px flex flex-wrap sm:flex-nowrap  sm:space-x-8 border-b border-gray-200 max-sm:px-4 sm:text-2xl  justify-between items-center text-left'>

          <Tab className="ui-selected:border-slate-800 ui-selected:text-slate-900 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-600 active:border-gray-600 outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium w-1/3">Закуска</Tab>
          <Tab className="ui-selected:border-slate-800 ui-selected:text-slate-900 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-600 active:border-gray-600 outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium w-1/3">Салати</Tab>
          <Tab className=" ui-selected:border-slate-800 ui-selected:text-slate-900 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-600 active:border-gray-600 outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium w-1/3">Предястия</Tab>
          <Tab className=" ui-selected:border-slate-800 ui-selected:text-slate-900 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-600 active:border-gray-600 outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium w-1/3 ">Основни ястия</Tab>
          <Tab className=" ui-selected:border-slate-800 ui-selected:text-slate-900 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-600 active:border-gray-600 outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium w-1/3 ">Напитки</Tab>
          <Tab className=" ui-selected:border-slate-800 ui-selected:text-slate-900 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-600 active:border-gray-600 outline-none whitespace-nowrap py-4 px-1 border-b-2 font-medium w-1/3">Обедно меню</Tab>

        </Tab.List>

        <Tab.Panels >
          <Tab.Panel className='flex max-sm:px-6 gap-12  overflow-x-scroll scrollbar-hidden sm:overflow-hidden max-w-6xl mx-auto snap-center snap-x snap-mandatory sm:py-16 py-10' >

            <div className="grid sm:grid-cols-2 sm:grid-rows-3  sm:gap-10 gap-6 w-full">
              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-5 border-dashed border-gray-400 border-b py-2">
                  <h4 className="text-gray-700 sm:text-xl text-lg">Пържени филийки</h4>
                  <p className="sm:text-xl ">4 лв.</p>
                </div>
                <p className="text-gray-700 text-sm ">2 броя със сладко, мед или сирене </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 sm:text-xl text-lg">Палачнки </h4>
                  <p className="sm:text-xl">5 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">2 броя със сладко, мед или сирене </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 sm:text-xl text-lg ">Зелена салата</h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">маруля, пресен лук,репички, краставици  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2 ">
                  <h4 className="text-gray-700 sm:text-xl text-lg">Салата Цезар </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm" >айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 sm:text-xl text-lg">Салата Цезар </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 sm:text-xl text-lg">Салата Цезар </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>


            </div>


          </Tab.Panel>
          <Tab.Panel className='flex max-sm:px-6 gap-12 overflow-x-scroll scrollbar-hidden sm:overflow-hidden max-w-6xl mx-auto snap-center snap-x snap-mandatory py-16 ' >

            <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 gap-6 w-full">
              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Салата Цезар </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl">Шопска салата </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">домати,чушки, краставици, лук, сирене,магданоз   </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Зелена салата</h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">маруля, пресен лук,репички, краставици  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Салата Цезар </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl">Салата Цезар </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Салата Цезар </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

            </div>

          </Tab.Panel>

          <Tab.Panel className='flex max-sm:px-6 gap-12 overflow-x-scroll scrollbar-hidden sm:overflow-hidden max-w-6xl mx-auto snap-center snap-x snap-mandatory py-16 ' >

            <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 gap-6 w-full">
              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Плато с различни колбаси  </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">луканки, сирена, кашкавал </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl">Топени сирена </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">домати,чушки, краставици, лук, сирене,магданоз   </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Пилешки хапки</h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">маруля, пресен лук,репички, краставици  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Тиквики с чеснов сос </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl">Салата Цезар </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Салата Цезар </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

            </div>

          </Tab.Panel>

          <Tab.Panel className='flex max-sm:px-6 gap-12 overflow-x-scroll scrollbar-hidden sm:overflow-hidden max-w-6xl mx-auto snap-center snap-x snap-mandatory py-16 ' >

            <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 gap-6 w-full">
              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Пилешко месо с гъби </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">луканки, сирена, кашкавал </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl">Свинко с картофи</h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">домати,чушки, краставици, лук, сирене,магданоз   </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Пълнени чушки</h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">маруля, пресен лук,репички, краставици  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Риба</h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl">Пиле Фрикасе </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Скара</h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

            </div>

          </Tab.Panel>

          <Tab.Panel className='flex max-sm:px-6 gap-12 overflow-x-scroll scrollbar-hidden sm:overflow-hidden max-w-6xl mx-auto snap-center snap-x snap-mandatory py-16 ' >

            <div className="grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 gap-6 w-full">
              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2 ">
                  <h4 className="text-gray-700 text-xl "> Безалкохолни напитки </h4>
                  <p className="sm:text-xl">2 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">Кола, Фанта,Спрайт Тоник</p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-5 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl">Топли напитки</h4>
                  <p className="sm:text-xl">2 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">кафе, капучино, чай   </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Натурални сокове и фрешове</h4>
                  <p className="sm:text-xl">4лв.</p>
                </div>
                <p className="text-gray-700 text-sm">портокол, кайсия, праскова, домашна лимонада </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Води</h4>
                  <p className="sm:text-xl">1,50 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">айсберг, чери домати,пилешки гърди ,сос-Цезар  </p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl">Алкохоли </h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">ракии, уиски...before:</p>
              </div>

              <div className="flex flex-col sm:gap-4 gap-2 ">
                <div className="flex justify-between gap-5 space-x-8 border-b border-dashed border-gray-400 py-2">
                  <h4 className="text-gray-700 text-xl ">Бира</h4>
                  <p className="sm:text-xl">8 лв.</p>
                </div>
                <p className="text-gray-700 text-sm">Каменица, Загорка, Ариана, Стела Артоа....  </p>
              </div>

            </div>

          </Tab.Panel>


        </Tab.Panels>


      </Tab.Group >

    </div >

  )
}

export default Menu