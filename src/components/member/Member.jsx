
import React from 'react'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const Display = keyframes`
   0%{
      transform: translateY(10px);
   }
   100%{
      tranfrom: translateY(0);
   }
`;

const Container = styled.div`
   width: 1400px;

`;

const Member = () => {
   return (
      <div>
         <Header />
      </div>
   )
}
export default Member