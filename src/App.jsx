
import React from 'react'
import Home from './components/home/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './app.module.scss'

import Member from './components/member/Member'
import ShowingFilms from './components/films/ShowingFilms'
import CommingFilms from './components/films/CommingFilms'

const App = () => {
   return (
      <>
         <Router>
            <Route path='/' exact component={Home} />
            <Route path='/chinh-sach' component={Member} />
            <Route path='/phim-dang-chieu' component={ShowingFilms} />
            <Route path='/phim-sap-chieu' component={CommingFilms} />
         </Router>
      </>
   )
}

export default App