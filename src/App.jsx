import About from "./components/about/About"
import Banner from "./components/banner/Banner"
import Features from "./components/features/Features"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Pricing from "./components/pricing/Pricing"
import Trainer from "./components/trainer/Trainer"




function App() {
  

  return (
    <div className="">
      <Header />
      <Hero/>
      <About/>
      <Features />
      <Pricing />
      <Trainer/>
      {/* <Banner/> */}
    </div>
  )
}

export default App
