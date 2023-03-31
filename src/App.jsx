
import Footer from "./components/Footer"
import useOnScreen from "./components/utils/useOnScreen"
import Home from "./components/Home"
import NavBar2 from "./components/NavBar2"
import MainMenu from "./components/MainMenu"





function App() {

  const [containerRef, isVisible] = useOnScreen({ rootMargin: '-100px' });

  return (
    <>
      {/* <Navbar isVisible={isVisible} /> */}
      <MainMenu isVisible={isVisible} />
      <Home containerRef={containerRef} />
      <NavBar2 />
      <Footer />
    </>
  )
}

export default App
