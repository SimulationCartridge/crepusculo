import React from 'react'
import Navigation  from "../Navigation/navigation";
import Home from '../Pages/home'
import Footer from '../Footer/footer'
import Menu from '../menu/menu';
import Dbanner from '../DynamicBanner/dBanner';
import DownloadButton from '../Buttons/menu';
import Welcome from '../Banner/banner';





function Root () {
    return (
        <div >
    <nav>
      <Navigation />
      </nav>
      <section>
        <Welcome />
      </section>
      <section>
      <Dbanner />
    
          </section>
      <footer>
        <Footer />
      </footer>
      </div>
    )
}

export default Root;