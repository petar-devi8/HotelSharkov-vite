
import { MdWifiCalling2 } from "react-icons/md"
import AboutUs1 from "./Images/AboutUs1.jpg"
import AboutUs2 from "./Images/AboutUs2.jpg"
import { RiStarSFill } from "react-icons/ri"



const AboutUs = () => {


  return (
    <div id="aboutus" className='max-w-6xl mx-auto px-4 lg:px-0 sm:py-20 pb-12 scroll-mt-24'>
      <div className="flex max-sm:flex-col justify-between gap-4 ">

        <div className="sm:w-1/2 space-y-5">
          <div className='flex gap-1'>
            <RiStarSFill className="sm:w-8 sm:h-8 w-6 h-6 text-sky-600" />
            <RiStarSFill className="sm:w-8 sm:h-8 w-6 h-6 text-sky-600" />
            <RiStarSFill className="sm:w-8 sm:h-8 w-6 h-6 text-sky-600" />
            <RiStarSFill className="sm:w-8 sm:h-8 w-6 h-6 text-sky-600" />
            <RiStarSFill className="sm:w-8 sm:h-8 w-6 h-6 text-sky-600" />
          </div>

          <h3 className=" font-title text-xl">Заповядайте при нас</h3>
          <div>
            <h2 className="sm:text-5xl text-3xl font-title ">Семеен хотел Шарков</h2>

            <div className="space-y-5 pt-5">
              <p>Семеен хотел Шарков се намира в центъра на село Огняново. Той предлага безплатен открит сезонен басейн, безплатен Wi-Fi и безплатен обществен паркинг. Огняновските минерални бани и басейни са на 250 метра.</p>
              <p>Всички климатизирани стаи са оборудвани с плоскоекранен телевизор с кабелни канали, хладилник и самостоятелна баня с душ. На разположение на гостите има самостоятелен балкон. В някои стаи има кът за сядане с диван.</p>
              <p>Семеен хотел Шарков разполага с ресторант. Срещу допълнително заплащане можете да ползвате съоръженията за барбекю. В просторната градина има кът за сядане. На разположение на гостите има минимаркет.</p>
              <p>
                Автогарата на Огняново е на 200 метра. До селата Лещен и Ковачевица се стига за 15 минути с кола. Село Долен е на 20 километра.
              </p>
            </div>

            <div className="flex gap-3 pt-5 items-center ">
              <div>
                <MdWifiCalling2 className="sm:w-12 sm:h-12 w-8 h-8 text-sky-800" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="sm:text-lg">Резервации</p>

                <a className="text-sky-800 font-semibold" href="tel:+359896035958">+359 89 603 5958</a>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2  gap-2 sm:flex sm:gap-5 sm:w-1/2 justify-between items-center ">

          <img className=" object-cover rounded-md mt-28 sm:hover:scale-110 hover:delay-300 hover:duration-500 sm:w-1/2 aspect-[2/3]" src={AboutUs1} alt="" />
          <img className=" object-cover rounded-md sm:hover:scale-110 hover:delay-300 hover:duration-500  sm:w-1/2 aspect-[2/3] " src={AboutUs2} alt="" />

        </div>
      </div>


    </div>
  )
}

export default AboutUs