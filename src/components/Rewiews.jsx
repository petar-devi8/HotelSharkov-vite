import person1 from "./Images/person1.webp"
// import person2 from "./Images/person2.webp"
// // import person3 from "./Images/person3.webp"
import person4 from "./Images/person4.jpg"
import person5 from "./Images/person5.jpg"

const Rewiews = () => {
  return (
    <div class="max-w-6xl mx-auto sm:py-20 py-12">

      <div class="mb-16 px-4 md:px-4">
        <h4 class="text-gray-400 font-light sm:text-lg uppercase relative sm:after:w-[80px]  after:w-[60px] after:h-0.5 after:absolute after:bg-gray-600 after:top-1/2 after:ml-6">
          Мнения
        </h4>
        <h2 class="sm:text-5xl text-3xl font-light mb-12 mt-8">Мнения на гости</h2>
      </div>

      <div class="grid md:grid-cols-2  lg:grid-cols-3 gap-6 mt-12 px-4 lg:px-4md:px-0">

        <div class="flex flex-col gap-5 shadow-md bg-white md:p-4 p-5">
          <div class="flex flex-wrap gap-3 items-center">
            <img class="object-cover sm:h-12 sm:w-12 w-10 h-10 rounded-full"
              src={person1} />
            <div class="flex flex-col">
              <h3 class="sm:text-lg  font-light">Elizabeth Charles</h3>
              <h4 class="text-sm text-[#a6a6a6] leading-relaxed">Satisfied Customer</h4>
            </div>

            <p class="text-gray-600 leading-6 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt placeat sapiente molestias, dolorum est illo quaerat eius veniam provident, veritatis cupiditate explicabo ab quia amet consequuntur. Quidem, deserunt non. Voluptate.</p>

          </div>


        </div>

        <div class="flex flex-col gap-5 shadow-md bg-white md:p-4 p-5">
          <div class="flex flex-wrap gap-3 items-center">
            <img class="object-cover sm:h-12 sm:w-12 w-10 h-10 rounded-full"
              src={person5} />
            <div class="flex flex-col">
              <h3 class="sm:text-lg  font-light">Стефан Цветанов</h3>
              <h4 class="text-sm text-[#a6a6a6] leading-relaxed">Мениджър..</h4>
            </div>

            <p class="text-gray-600 leading-7 font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est facilis cumque eius consequuntur dolorum repellendus, aut repellat quod nam, quasi sint numquam earum quam iusto harum nisi culpa eum!</p>

          </div>


        </div>

        <div class="flex flex-col gap-5 shadow-md bg-white md:p-4 p-5">
          <div class="flex flex-wrap gap-3 items-center">
            <img class="object-cover sm:h-12 sm:w-12 w-10 h-10  rounded-full"
              src={person4} />
            <div class="flex flex-col">
              <h3 class="sm:text-lg  font-light">Петър Русинов</h3>
              <h4 class="text-sm text-[#a6a6a6] leading-relaxed">Програмист : )</h4>
            </div>

            <p class="text-gray-600 leading-7 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis, quod, debitis minus sed repudiandae non, voluptatem amet ullam consequatur laboriosam deleniti voluptatibus tempora quibusdam culpa suscipit nemo libero consectetur?</p>

          </div>


        </div>



      </div>
    </div>
  )
}

export default Rewiews