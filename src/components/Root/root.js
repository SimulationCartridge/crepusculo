import React from 'react'
import Navigation  from "../Navigation/navigation";
import Home from '../Pages/home'
import Footer from '../Footer/footer'
import Menu from '../menu/menu';
import Dbanner from '../DynamicBanner/dBanner';





function Root () {
    return (
        <div >
    <nav>
      <Navigation />
      </nav>
      <section>
      <Home />
      <Dbanner />
      </section>
      <footer>
        <Footer />
      </footer>
      </div>
    )
}

export default Root;