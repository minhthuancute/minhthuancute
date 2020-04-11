
import React, { useState } from 'react'
import styled from 'styled-components'
import Film from './Film'
import Location from './Location'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const TicketGalaxy = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Container = styled.div`
   width: 1250px;
   margin: 30px 0;
`;

const Ticket = () => {
   const [film, setFilm] = useState(true);
   return (
      <>
         <Header />

         <TicketGalaxy>
            <Container>
               {
                  film ? <Film setFilm={setFilm} /> : <Location setFilm={setFilm} />
               }
            </Container>
         </TicketGalaxy>

         <Footer />
      </>
   )
}
export default Ticket