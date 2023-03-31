import React, { useState } from 'react'
import gallery_1 from "./Images/gallery_1.jpg"
import gallery_2 from "./Images/gallery_2.jpg"
import gallery_3 from "./Images/gallery_3.jpg"
import gallery_4 from "./Images/gallery_4.jpg"
import gallery_5 from "./Images/gallery_5.jpg"
import gallery_6 from "./Images/gallery_6.jpg"
import gallery_7 from "./Images/gallery_7.jpg"
import gallery_8 from "./Images/gallery_8.jpg"
import gallery_9 from "./Images/gallery_9.jpg"
import gallery_10 from "./Images/gallery_10.jpg"
import { Dialog } from '@headlessui/react'
import { Fade, Slide, Zoom } from "react-slideshow-image"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { IoMdClose } from "react-icons/io";





const Gallery = () => {

  const slides = [
    {
      url: gallery_1,
    },
    {
      url: gallery_2,
    },
    {
      url: gallery_3,
    },
    {
      url: gallery_4,
    },

    {
      url: gallery_5,
    },

    {
      url: gallery_6,
    },

    {
      url: gallery_7,
    },

    {
      url: gallery_8,
    },
    {
      url: gallery_9,
    },
    {
      url: gallery_10,
    },
    {
      url: gallery_3,
    },
  ];

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const properties = {
    prevArrow: <div className=" sm:bg-black/40 bg-black/60 text-white p-2 max-sm:!left-1">
      <BsChevronCompactLeft className=" sm:w-8 sm:h-8 w-5 h-5 " />
    </div>,
    nextArrow: <div className=" sm:bg-black/40  bg-black/60 text-white p-2 max-sm:!right-1 ">
      <BsChevronCompactRight className=" sm:w-8 sm:h-8 w-5 h-5" />
    </div>
  }

  const indicators = () => (<div className='indicator p-1 sm:h-3 sm:w-3 h-2 w-2 rounded-full bg-gray-400 sm:mx-4 mx-2 cursor-pointer active:bg-gray-600 hover:bg-gray-600' />)
  // const properties = {
  //   prevArrow: <div className=" bg-black/40 rounded-full text-white sm:p-3 p-2 sm:!-left-32 !left-32 max-sm:-bottom-20 ">
  //     <BsChevronCompactLeft className="sm:w-10 sm:h-10 w-5 h-5" />
  //   </div>,
  //   nextArrow: <div className="  bg-black/40 rounded-full text-white sm:p-3 p-2 sm:!-right-32 !right-32 max-sm:-bottom-20">
  //     <BsChevronCompactRight className="sm:w-10 sm:h-10 w-5 h-5 " />
  //   </div>
  // }

  // const indicators = () => (<div className='indicator sm:h-4 sm:w-4 h-2 w-2 rounded-full bg-gray-400 sm:mx-4 mx-2 cursor-pointer active:w-6 hover:w-5' />)



  return (
    <>
      <div id='gallery' className='max-w-6xl mx-auto lg:px-0 sm:py-20 pt-12 scroll-mt-24'>
        <div className='space-y-4  px-4'>
          <h3 className='sm:text-3xl  text-xl font-light text-gray-500 text-center '>Различни сезони, различни настроения - едно място, вашето място</h3>
          <h2 className='sm:text-4xl text-3xl text-gray-600 text-center'>Галерия</h2>
        </div>

        <div className='grid md:grid-cols-2 sm:pt-16 pt-10 overflow-hidden '>
          {/* {slides.map((slide, i) => {
          if (i === 1) {
            return (
              <div className=' grid grid-rows-1 rounded-md overflow-hidden '>
                <div className='flex justify-between items-center '>

                </div>
              </div>


            )
          }

          if (i === 5) {
            return (
              <div className=' grid grid-rows-1 object-cover rounded-md overflow-hidden '>
                <div className='flex justify-between items-center '>

                  <div className='flex flex-col space-y-5 w-1/2 h-full bg-gray-200 justify-center '>
                    <div className='mx-6 space-y-5'>
                      <h3 className='text-4xl font-medium text-gray-600'>Басейн и СПА център </h3>
                      <p className='text-gray-600'>Басейнът е с размери 8 на 4 метра и дълбочина 1.20м. Само за гости на хотела. Чадърите и шезлонгите са безплатни за гостите на хотела. Басейна е с минерална вода и не се третира с никакви химикали.</p>
                      <button onClick={() => openModal(true)} className='min-w-auto w-36 h-12 bg-blue-400 p-2 rounded-xl hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold text-center'>Разгледайте</button>
                    </div>

                  </div>
                  <div className='overflow-hidden object-cover w-1/2  '>
                    <img onClick={() => openModal(true)} className=' aspect-[3/2 hover:scale-105 hover:duration-500 hover:brightness-75 cursor-pointer ' src={slide.url} alt="" />
                  </div>
                </div>
              </div>


            )
          }

          if (i === 9) {
            return (
              <div className=' grid grid-rows-1 rounded-md overflow-hidden '>
                <div className='flex justify-between items-center '>
                  <div className='overflow-hidden w-1/2 rounded-md '>
                    <img onClick={() => openModal(true)} className=' aspect-[3/2] hover:scale-105 hover:duration-500 hover:brightness-75 cursor-pointer object-cover  ' src={slide.url} alt="" />
                  </div>
                  <div className='flex flex-col space-y-5 w-1/2 h-full bg-gray-200 justify-center'>
                    <div className='mx-6 space-y-5'>
                      <h3 className='text-4xl font-medium text-gray-600'>Детски кът </h3>
                      <p className='text-gray-600'>На разположение на най малките предлагаме детски кът, разполагащ с площ от близо 2 декара, където малчуганите могат да тичат на воля.</p>
                      <button onClick={() => openModal(true)} className='min-w-auto w-36 h-12 bg-blue-400 p-2 rounded-xl hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold text-center'>Разгледайте</button>
                    </div>
                  </div>
                </div>
              </div>


            )
          }



        })
        } */}
          <div className='overflow-hidden max-md:order-1  '>
            <img onClick={() => openModal(true)} className=' aspect-[3/2] hover:scale-105 hover:duration-500 hover:brightness-110 cursor-pointer object-cover  md:p-0  bg-gray-200 ' src={slides[0].url} alt="" />
          </div>
          <div className='flex flex-col space-y-5 h-full bg-gray-200 justify-center max-md:order-2 '>
            <div className='p-6 space-y-5'>
              <h3 className='sm:text-4xl text-2xl font-medium text-gray-600 '>Ресторант и лятна градина </h3>
              <p className='text-gray-600'> Заповядайте и опитайте страхотната ни кухня, приготвена по специални рецепти от нашите професионални готвачи. Гостите на ресторанта могат да се насладят на просторната ни лятна градина.</p>
              <button onClick={() => openModal(true)} className='min-w-auto sm:w-36 sm:h-12 w-32 h-10 bg-blue-400 p-2 rounded-md hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold text-center'>Разгледайте</button>
            </div>
          </div>


          <div className='flex flex-col space-y-5 h-full bg-gray-200 justify-center max-md:order-4 '>
            <div className='p-6 space-y-5'>
              <h3 className='sm:text-4xl text-2xl font-medium text-gray-600 '>Басейн и СПА център </h3>
              <p className='text-gray-600'> Басейнът е с размери 8 на 4 метра и дълбочина 1.20м. Само за гости на хотела. Чадърите и шезлонгите са безплатни за гостите на хотела. Басейна е с минерална вода и не се третира с никакви химикали.</p>
              <button onClick={() => openModal(true)} className='min-w-auto sm:w-36 sm:h-12 w-32 h-10 bg-blue-400 p-2  rounded-md hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold text-center'>Разгледайте</button>
            </div>
          </div>
          <div className='overflow-hidden max-md:order-3  '>
            <img onClick={() => openModal(true)} className=' aspect-[3/2] hover:scale-105 hover:duration-500 hover:brightness-110 cursor-pointer object-cover md:p-0  bg-gray-200  ' src={slides[8].url} alt="" />
          </div>

          <div className='overflow-hidden max-md:order-5 '>
            <img onClick={() => openModal(true)} className=' aspect-[3/2] hover:scale-105 hover:duration-500 hover:brightness-110 cursor-pointer object-cover md:p-0  bg-gray-200 ' src={slides[9].url} alt="" />
          </div>
          <div className='flex flex-col space-y-5 h-full bg-gray-200 justify-center max-md:order-6 '>
            <div className='p-6 space-y-5'>
              <h3 className='sm:text-4xl text-2xl font-medium text-gray-600 '>Детски кът </h3>
              <p className='text-gray-600'> На разположение на най малките предлагаме детски кът, разполагащ с площ от близо 2 декара, където малчуганите могат да тичат на воля.</p>
              <button onClick={() => openModal(true)} className='min-w-auto sm:w-36 sm:h-12 w-32 h-10 bg-blue-400 p-2 rounded-md hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold text-center'>Разгледайте</button>
            </div>
          </div>
        </div>



        {/* <div className='grid grid-cols-6 grid-flow-row  gap-5 mt-5'>
        {slides.map((slide, i) => {

          if (i < 3) {


            return (

              <div className='col-span-2 object-cover rounded-md overflow-hidden '>
                <img onClick={() => openModal(true)} className=' aspect-square  hover:scale-105  hover:duration-500  hover:brightness-75 cursor-pointer' src={slide.url} alt="" />
              </div>
            )
          }
          if (i === 3 || i < 5) {
            return (
              <div className='col-span-3 object-cover  rounded-md overflow-hidden '>

                <img onClick={() => openModal(true)} className='col-span-3 object-cover aspect-[4/5] rounded-md hover:scale-105 hover:duration-500 hover:brightness-75 cursor-pointer' src={slide.url} alt="" />
              </div>
            )
          }
          if (i === 5 || i < 8) {
            return (
              <div className='col-span-2 rounded-md overflow-hidden'>

                <img onClick={() => openModal(true)} className='object-cover aspect-square hover:scale-105 hover:duration-500 hover:brightness-75 cursor-pointer' src={slide.url} alt="" />
              </div>
            )
          }
          return (

            <div className='col-span-3 rounded-md overflow-hidden'>
              <img onClick={() => openModal(true)} className='object-cover aspect-[4/5] hover:scale-105  hover:duration-500  hover:brightness-75 cursor-pointer' src={slide.url} alt="" />
            </div>
          )
        })}
      </div> */}



      </div >
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
        <div className='fixed inset-0 bg-white'>
          <Dialog.Panel className="w-full h-full relative ">
            <div className='grid place-content-center h-full'>
              <div className='mx-auto max-w-sm sm:max-w-screen-lg w-full h-full max-sm:px-4  max-sm:mt-12'>
                <Fade
                  {...properties}
                  duration={4000}
                  transitionDuration={500}
                  indicators={indicators}
                  onChange={function noRefCheck() { }}
                  onStartChange={function noRefCheck() { }}
                >
                  {slides.map((slide, i) =>
                    <div className='grid place-content-center h-full  '>
                      <img className="max-sm:max-w-[88vw] max-sm:aspect-[5/8]  aspect-video object-cover  rounded " src={slide.url} alt='' />
                    </div>)}
                </Fade>
                {/* <Fade
                  {...properties}
                  duration={5000}
                  transitionDuration={500}
                  indicators={indicators}
                  onChange={function noRefCheck() { }}
                  onStartChange={function noRefCheck() { }}
                >
                  {slides.map((slide, i) =>
                    <div className='grid place-content-center h-full '>
                      <img className="max-sm:max-w-[83vw] max-sm:aspect-[5/8]  aspect-video object-cover max-w-full rounded-md " src={slide.url} alt='' />
                    </div>)}
                </Fade> */}
              </div>
            </div>
            <p className='absolute top-16 left-8 brightness-0 h-16 saturate-0 text-xl font-medium '>Семеен Хотел Шарков</p>
            <button onClick={() => closeModal(false)} className="h-16 absolute top-12 right-12 text-gray-600 rounded-full sm:duration-700 ease-in-out sm:delay-700 ">
              <IoMdClose className="sm:w-10 sm:h-10 md:w-7 md:h-7 w-4 h-4" />
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default Gallery