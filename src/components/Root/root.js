import React from 'react'
import Navigation  from "../Navigation/navigation";
import Home from '../Pages/home'
import Footer from '../Footer/footer'





function Root () {
    return (
        <div >
    <nav>
      <Navigation />
      </nav>
      <section>
      <Home />
      </section>
      <footer>
        <Footer />
      </footer>
      </div>
    )
}

export default Root;