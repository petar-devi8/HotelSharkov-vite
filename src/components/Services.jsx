import { IoBedOutline, IoRestaurantOutline } from "react-icons/io5"
import { GiTakeMyMoney, GiKidSlide } from "react-icons/gi"
import { FaSwimmingPool } from "react-icons/fa"
import { TbParking } from "react-icons/tb"



const Services = () => {
  return (

    <div id="services" className="max-w-6xl mx-auto px-4 lg:px-0 sm:py-20 py-12 scroll-mt-24">
      <div className="mb-16">
        <h4 className="text-gray-400 font-light sm:text-lg uppercase mb-6 relative sm:after:w-[80px] after:w-[60px] after:h-0.5 after:absolute after:bg-gray-600 after:top-1/2 after:ml-6">
          Удобства
        </h4>
        <h2 className="sm:text-5xl text-3xl sm:py-8 py-4 text-gray-600">Удобства и услуги </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 font-light">
        <div className="flex gap-4 ">

          <div className="flex sm:gap-6 gap-4 ">
            <div >
              <IoBedOutline className="sm:w-10 sm:h-10 w-9 h-9 text-sky-600 mt-1 " />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="sm:text-2xl text-xl ">Луксозни стаи</h4>
              <p className=" leading-6 ">Нашите стаи са удобни и просторни.
                Климатизация, минибар, плазмен телевизор, тераса са част от удобствата ни.</p>
            </div>
          </div>

        </div>
        <div className="flex gap-4  ">

          <div className="flex sm:gap-6 gap-4">
            <div >
              <GiKidSlide className="sm:w-12 sm:h-12 w-9 h-9 text-sky-600 mt-1" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="sm:text-2xl text-xl ">Детски кът</h4>
              <p className=" leading-6 ">На разположение на най малките предлагаме детски кът, разполагащ с площ от близо 2 декара, където малчуганите могат да тичат на воля.</p>

            </div>

          </div>

        </div>

        <div className="flex gap-4">

          <div className="flex sm:gap-6 gap-4">
            <div >
              <GiTakeMyMoney className="sm:w-12 sm:h-12 w-9 h-9 text-sky-600 mt-1" />

            </div>
            <div className="flex flex-col gap-2">
              <h4 className="sm:text-2xl text-xl">Банкомат</h4>
              <p className="leading-6">На територията на хотела се намира единственият банкомат в село Огняново. Банкоматът се обслужва от Пощенска банка.</p>

            </div>

          </div>

        </div>

        <div className="flex gap-4 ">

          <div className="flex sm:gap-6 gap-4">
            <div >
              <FaSwimmingPool className="sm:w-12 sm:h-12 w-9 h-9 text-sky-600 mt-1" />

            </div>

            <div className="flex flex-col gap-2">
              <h4 className="sm:text-2xl text-xl">СПА център - сауна и джакузи, масаж</h4>
              <p className=" leading-6">Джакузито повлиява особено благоприятно на опорно-двигателния апарат. Спомага за облекчаване на болки вследствие прекомерно натоварване. Отпуска тялото. </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 ">
          <div className="flex sm:gap-6 gap-4">
            <div >
              <IoRestaurantOutline className="sm:w-12 sm:h-12 w-9 h-9 text-sky-600 mt-2" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="sm:text-2xl text-xl">Ресторант с лятна градина</h4>
              <p className="leading-6">Заповядайте и опитайте страхотната ни кухня, приготвена по специални рецепти от нашите професионални готвачи.</p>
            </div>
          </div>

        </div>

        <div className="flex gap-4 ">


          <div className="flex sm:gap-6 gap-4">
            <div className="">
              <TbParking className="sm:w-12 sm:h-12 w-9 h-9 text-sky-600 mt-1" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="sm:text-2xl text-xl">Паркинг</h4>
              <p className=" leading-6">Хотелът разполага с безплатен паркинг за своите гости.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Services