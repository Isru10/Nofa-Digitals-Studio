import Hero from './sections/Hero'
import Services from './sections/Services'
import Footer from './sections/Footer'
import Navbar from './components/Navbar'
import Reserve from './sections/Reserve'
import Projects from './sections/Projects'


function App() {

  return (

  //  <main className="relative bg-black w-screen h-screen overflow-hidden">
  //   <section>
  //   <Nav/>
  //   </section>
    

  //   <section>
  //   <Resereve/>
  //       </section>
    

  //   <section>
  //   <About/>

  //   </section>
    


  //   <section>
  //   <Services/>
  //   </section>
    
    
  //   <section>
  //   <Contact/>
  //   </section>
    
   
    

  //  </main>



  <div className="font-sans bg-[#252525] overflow-hidden">
      <Navbar />
      {/* <section className='pt-4'> */}
      <Hero />
      {/* </section> */}
      
      <Services />
      <Projects/>
      <Reserve/>
      <Footer />
    </div>
  )
}

export default App
