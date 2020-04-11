
import React from 'react'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Footer from '../footer/Footer';
import { primary } from '../colors/colors'

const Display = keyframes`
   0%{
      transform: translateY(10px);
   }
   100%{
      tranfrom: translateY(0);
   }
`;

const MemberGalaxy = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Container = styled.div`
   width: 1250px;
   margin: 20px 0;
`;

const Location = styled.ul`
   display: flex;
   li{
      margin-right: 10px;
      font-size: 14px;
      &:last-child{
         margin-right: 0;
      }
      a{
         color: rgb(160,163,167);
         transition: all 0.3s ease-in;
         &:hover{
            color: ${primary};
         }
      }
   }
`;

const Member = () => {
   return (
      <>
         <Header />

         <MemberGalaxy>
            <Container>
               <Location>
                  <li><Link to='/'>Trang chủ ></Link></li>
                  <li><Link to='/'>Thành viên ></Link></li>
                  <li>Chính sách</li>
               </Location>


            </Container>
         </MemberGalaxy>

         <Footer />
      </>
   )
}
export default Member