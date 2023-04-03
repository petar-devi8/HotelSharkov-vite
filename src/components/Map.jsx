import React, { Fragment, useRef, useState } from 'react'

import classNames from './utils/classNames';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMail, MdOutlineWatchLater } from 'react-icons/md';
import Datepicker from 'react-tailwindcss-datepicker';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

const adult = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 }
]

const Map = () => {

  const form = useRef();




  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm(
      'service_dvsvb9t',
      'template_6qy3d59',
      form.current,
      'a442zTguc6FdFdds9')
      .then((result) => {
        console.log(result.text);
        console.log("massage sent")
        setLoading(false)
      }, (error) => {
        console.log(error.text);
      });
    setValue({
      startDate: null,
      endDate: null
    })
    setAdults(adult[0]);
    setChildren(adult[0])
    setName()
    setFamily()
    setPhone()
    setEmail()
    document.getElementById("contact_form").reset()
  };

  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [family, setFamily] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  // const [disable, setDisable] = useState(true)

  // useEffect(() => {
  //   (name && family && email && phone) ? setDisable(false) : setDisable(true);
  // }, [name, family, email, phone]);



  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }


  const [adults, setAdults] = useState(adult[0])
  const [children, setChildren] = useState(adult[0])

  return (
    <div id='map' className='max-w-6xl mx-auto lg:px-0 sm:py-20 py-12 scroll-mt-24'>
      <h3 className='sm:text-5xl text-3xl pb-8 text-gray-600 text-center'>Контакти</h3>
      <h4 className="uppercase text-xl font-title text-center space-y-4 text-gray-600">Свържете се с нас</h4>

      <div className=" flex flex-col sm:flex-row max-sm:px-4 gap-12 mt-10">
        <div className=' space-y-3  sm:w-1/2'>
          {/* <h3 className='text-gray-700 text-xl sm:text-2xl px-4 '>Как  да стигнете при нас  </h3> */}
          <iframe className='w-full aspect-square border-2 rounded-md  ' width="100%" height="510" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bulgaria,%20ognqnovo,hotel%20Sharkov+(%D0%A1%D0%B5%D0%BC%D0%B5%D0%B5%D0%BD%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%A8%D0%B0%D1%80%D0%BA%D0%BE%D0%B2)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe>
        </div>

        <div className=" sm:w-1/2">
          <form id='contact_form' ref={form} onSubmit={sendEmail} className='flex flex-col lg:gap-0  text-base gap-y-2 sm:gap-y-4 justify-between' action="">
            <input type="hidden" name="startDate" value={value.startDate} />
            <input type="hidden" name="endDate" value={value.endDate} />
            <div className=' flex flex-col sm:gap-2 gap-1 w-full'>
              <label className=' block font-medium leading-6 text-gray-600 sm:text-lg text-sm' htmlFor="">Дати за настаняване и напускане</label>
              <Datepicker
                inputClassName=" !py-2 !pl-3 !text-base border-gray-200 border focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-sky-500/20 focus:ring-sky-500/20 !text-black !font-normal"
                showFooter={true}
                placeholder={"дати"}
                primaryColor={"sky"}
                startWeekOn="mon"
                startFrom={new Date}
                useRange={false}
                value={value}
                onChange={handleValueChange}
              />
            </div>

            {/* <div className='lg:w-1/3 md:w-1/3 flex flex-col  md:px-4 gap-2' >
          <label className=' text-gray-600 text-center ' for="font-light ">Дати за настаняване и напускане</label>
          <div className='flex justify-between gap-5'>
            <input className='border border-gray-200 px-4  hover:border-sky-800 py-4 rounded-md  h-[52px]' type="date" name='' />
            <input className='border border-gray-200 px-4 hover:border-sky-800 py-4 rounded-md  h-[52px]' type="date" name='' />
          </div>
        </div> */}

            <div className='flex justify-between gap-3 w-full sm:mt-4'>
              <div className="w-1/2 ">
                <label className=' block font-medium leading-6 text-gray-600 sm:text-lg text-sm ' htmlFor="adults">Възрастни</label>
                <Listbox value={adults}
                  name="adults"
                  onChange={setAdults}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full rounded-md bg-white py-2 pl-3 pr-10 text-left  border-gray-200 border focus:sm:text-sm focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-sky-500/20 focus:ring-sky-500/20 ">
                      <span className="block truncate">{adults.number}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {adult.map((i) => (
                          <Listbox.Option
                            key={i.number}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? ' ' : 'text-gray-600'
                              }`
                            }
                            value={i}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                    }`}
                                >
                                  {i.number}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                                    <CheckIcon className="h-5 w-5 text-sky-500" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>

              <div className="w-1/2 ">
                <label className=' block font-medium leading-6 text-gray-600 sm:text-lg text-sm' htmlFor="adults">Деца</label>
                <Listbox value={children} name="children" onChange={setChildren}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2  pl-3 pr-10 text-left border-gray-200 border  focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-sky-500/20 focus:ring-sky-500/20 ">
                      <span className="block truncate">{children.number}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {adult.map((i) => (
                          <Listbox.Option
                            key={i.number}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? ' ' : 'text-gray-600'
                              }`
                            }
                            value={i}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                    }`}
                                >
                                  {i.number}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                                    <CheckIcon className="h-5 w-5 text-sky-500" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-2 ">
              <div className="">
                <label htmlFor="first-name" className="block font-medium leading-6 text-gray-900 sm:text-lg text-sm">
                  Име
                </label>
                <div className="mt-1">
                  <input
                    required
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="off"
                    value={name}
                    onChange={event => setName(event.target.value)}

                    className="block w-full rounded-md bg-white py-2  pl-3 pr-10 text-left border-gray-200 border  focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-sky-500/20 focus:ring-sky-500/20 "
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="last-name" className="block font-medium leading-6 text-gray-9 sm:text-lg text-sm">
                  Фамилия
                </label>
                <div className="mt-1">
                  <input
                    required
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="off"
                    defaultValue={family}
                    onChange={event => setFamily(event.target.value)}
                    className="block w-full rounded-md bg-white py-2  pl-3 pr-10 text-left border-gray-200 border focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-sky-500/20 focus:ring-sky-500/20 "
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="Mail" className="block font-medium leading-6 text-gray-600 sm:text-lg text-sm">
                  Електронна поща
                </label>
                <div className="mt-1">
                  <input
                    required
                    type="email"
                    name="user_email"
                    id="email"
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    className=" invalid:focus:border-red-500/20 invalid:border-red-300 invalid:focus:ring invalid:focus:ring-red-500/20 block w-full rounded-md bg-white py-2 pl-3 pr-10 text-left border-gray-200 border focus:ring disabled:opacity-40 disabled:cursor-not-allowed valid:focus:border-sky-500/20 focus:ring-sky-500/20 "
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="phone" className="block font-medium leading-6 text-gray-600 sm:text-lg text-sm ">
                  Телефон
                </label>
                <div className="mt-1">
                  <input
                    required
                    type="tel"
                    name="tel"
                    id="tel"
                    autoComplete="off"
                    autoCapitalize="off"
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                    pattern="[0-9]+"
                    className="block w-full rounded-md bg-white py-2  pl-3 pr-10 text-left border-gray-200 border  focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-sky-500/20 focus:ring-sky-500/20 "
                  />
                </div>
              </div>


            </div>

            <div className="sm:mt-3">
              <label htmlFor="phone" className="block font-medium leading-6 text-gray-600 sm:text-lg text-sm">
                Съобщение
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="block w-full rounded-md bg-white py-2  pl-3 pr-10 text-left border-gray-200 border  focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-sky-500/20 focus:ring-sky-500/20 "
                  placeholder=""
                  defaultValue={''}
                />
              </div>
            </div>
            {/* <div className=" w-full sm:mt-3 flex justify-end">
              <button
                className="min-w-auto bg-blue-400 p-2 rounded-md hover:bg-blue-600  text-white font-semibold text-center text-sm ">Изпрати</button>

            </div> */}
            <div className="w-full sm:mt-3 flex justify-end">

              <div className="mt-1">
                {loading ?
                  <div className="w-48 bg-blue-400 p-2 rounded-md hover:bg-blue-600  text-white " >
                    <svg class="animate-spin mx-auto h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  :
                  <input

                    value="Изпрати запитване"
                    type="submit"
                    name="submit"
                    id="submit"
                    className="w-48 bg-blue-400 p-2 rounded-md hover:bg-blue-600  text-white font-semibold text-center text-sm"

                  />

                }



              </div>
            </div>
          </form>
        </div>

      </div>

    </div>

  )
}

export default Map