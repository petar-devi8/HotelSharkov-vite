import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Services from './Services'
import Rewiews from './Rewiews'
import Gallery from './Gallery'

import Resturant from './Resturant'
import Map from './Map'
import Rooms2 from './Rooms2'

const Home = ({ containerRef }) => {
  return (
    <>
      <Hero containerRef={containerRef} />
      {/* <Forms /> */}
      <AboutUs />
      {/* <div className="bg-gray-100 ">
        <Rooms />
      </div> */}
      <div className='bg-gray-100'>
        <Rooms2 />
      </div>
      <Services />
      <Resturant />
      {/* <Menu /> */}
      <div className="bg-gray-100 ">
        <Rewiews />
      </div>
      <Gallery />
      <div className="bg-gray-100 ">

      </div>
      <Map />
    </>
  )
}

export default Home