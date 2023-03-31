import { Disclosure } from '@headlessui/react'
import React from 'react'

import classNames from "./utils/classNames";



const navigation = [

  { name: 'За нас', href: '#aboutus', current: false },
  { name: 'Стаи', href: '#rooms2', current: false },
  { name: 'Ресторант', href: '#resturant', current: false },
  { name: 'Галерия', href: '#gallery', current: false },
  { name: 'Контакти', href: '#map', current: false },
]

const MainMenu = ({ isVisible }) => {
  return (
    <Disclosure as="nav" className={classNames(
      !isVisible ? "bg-white/60 backdrop-blur-xl text-gray-700 " : "", " fixed top-0 z-30 inset-x-0 transition-all h-24 ")}>
      {({ open }) => (
        <>


          <div className={classNames(!open ? ' ' : '', " ")}>
            <div className=' bg-sky-600 w-full flex items-center justify-center h-8'>
              <div className='text-center uppercase text-white text-sm font-medium space-x-2'>
                <span className=''>Лято 2023</span>
                <span className=''>Очакваме ви</span>
                <span className=''>Вижте още </span>
              </div>

            </div>
            <div className={classNames(open && 'max-sm:bg-white/75', "relative flex items-center justify-between mx-auto max-w-6xl max-sm:px-6 h-16 border-b border-gray-200 ")}>
              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                {/* <Disclosure.Button className="inline-flex items-center justify-between rounded-md p-2 -m-2 focus:outline-transperant ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className={classNames(!isVisible ? "text-gray-700" : "text-white", "block h-6 w-6", open && "max-sm:!text-gray-700")} aria-hidden="true" />
                  ) : (
                    <Bars3Icon className={classNames(!isVisible ? "text-gray-700" : "text-white", "block h-6 w-6")} aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-between ">
                <a href='/' className="flex flex-shrink-0 items-center gap-2">

                  <button className={classNames(
                    !isVisible ? "text-gray-700" : "text-white", "leading-9 tracking-wider font-medium text-2xl hover:text-gray-400 font-[Prata]",
                    open && 'max-sm:!text-gray-700 font-[Prata]')}>Семеен Хотел Шарков</button>
                </a>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        href={item.href}
                        key={item.name}
                        className={classNames(
                          !isVisible ? "text-gray-700" : "text-white",
                          'px-3 py-2 font-medium leading-9 hover:text-gray-400'

                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className={classNames(open && 'border-b border-gray-500', "sm:hidden max-sm:!bg-white/75")}>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 ' : ' hover:bg-gray-700 text-black',
                    'block px-3 py-2 rounded-md text-base font-medium  ',
                    "text-gray-700 "
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}


    </Disclosure>


  )
}

export default MainMenu