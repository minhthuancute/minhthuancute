
import React, { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

import AboutHome from './AboutHome'
import Sales from './Sales'
import PreviewFilm from './PreviewFilm'
import ShowingFilms from './ShowingFilms'
import CommingFilms from './CommingFilms'

import Carousel from '../carousel/Carousel'

const Home = () => {
   const [isShowing, setIsShowing] = useState(true);

   return (
      <div>
         <Header />

         <Carousel />

         {
            isShowing ? <ShowingFilms setIsShowing={setIsShowing} /> : <CommingFilms setIsShowing={setIsShowing} />
         }

         <PreviewFilm />

         <Sales />

         <AboutHome />

         <Footer />
      </div>
   )
}
export default React.memo(Home);