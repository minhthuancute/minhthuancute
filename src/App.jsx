
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './app.module.scss'

import Home from './components/home/Home'
import Member from './components/member/Member'
import ShowingFilms from './components/films/ShowingFilms'
import CommingFilms from './components/films/CommingFilms'
import Ticket from './components/ticket/Ticket'

const App = () => {
   return (
      <>
         <Router>
            <Route path='/' exact component={Home} />
            <Route path='/chinh-sach' component={Member} />
            <Route path='/phim-dang-chieu' component={ShowingFilms} />
            <Route path='/phim-sap-chieu' component={CommingFilms} />
            <Route path='/mua-ve' component={Ticket} />
         </Router>
      </>
   )
}

export default App