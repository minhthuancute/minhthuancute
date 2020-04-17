
import React, { useState } from 'react'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Footer from '../footer/Footer'
import { primary, secondary, black, white } from '../colors/colors'

import Law from './Law'
import Advan from './Advan'
import Manual from './Manual'
import Form from '../forms/Form'

const display = keyframes`
   0%{
      transform: translateY(-150px);
   }
   100%{
      transform: translateY(0);
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

const Body = styled.div`
   h6{
      font-weight: 450;
      font-size: 15px;
      margin-bottom: 10px;
   }
   p{
      font-size: 15px;
      color: rgb(67,70,75);
      line-height: 25px;
      padding: 5px 0;
   }
   img{
      margin: 15px 0 15px 100px;
   }

   ul{
      margin-left: 50px;
      li{
         list-style: disc;
         color: rgb(67,70,75);
         padding: 10px 0;
         font-size: 15px;
         span{
            color: black;
            font-weight: 450;
         }
      }
   }
`;

const WraperForm = styled.div`
   position: fixed;
   z-index: 1000;
   left: 0;
   top: 0;
   width: 100%;
   height: 100vh;
   background: rgba(0, 0, 0, 0.4);
   display: flex;
   justify-content: center;

`;

const ContainerForm = styled.div`
   animation: ${display} 0.4s;
   width: 550px;
   height: min-content;
   background-color: ${white};
   padding: 40px;
   margin-top: 25px;
`;

const Member = () => {
   const [index, setIndex] = useState(1);
   const [register, setRegister] = useState(false);

   const render = (index) => {
      switch (index) {
         case 1:
            return <Law />;
         case 2:
            return <Advan />;
         case 3:
            return <Manual />;
      }
   }

   const Menu = styled.ul`
      display: flex;
      margin: 20px 0 30px 0;
      border-bottom: 1px solid ${secondary};
      margin-left: 0 !important;
      li{
         text-transform: uppercase;
         font-size: 18px !important;
         margin-right: 30px;
         padding-bottom: 15px;
         position: relative;
         transition: all 0.2s ease-in;
         color: ${secondary};
         cursor: pointer;
         list-style: none !important;
         &::before{
            content:'';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: ${primary};
            bottom: -1.4px;
            left: 0;
            transform-origin: (50%,50%);
            transition: all 0.2s ease-in;
            transform: scale(0);
         }
         &:hover{
            &::before{
               transform: scale(1);
            }
         }

         &:nth-child(${index}){
            color: ${black};
            &:hover{
               color: ${black};
            }
            &::before{
               transform: scale(1);
            }
         }
      }
   `;

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

               <Menu>
                  <li onClick={() => setIndex(1)}>thể lệ</li>
                  <li onClick={() => setIndex(2)}>quyền lợi</li>
                  <li onClick={() => setIndex(3)}>hướng dẫn</li>
                  <li onClick={() => setRegister(true)}>đăng kí</li>
               </Menu>

               <Body>
                  {
                     render(index)
                  }
               </Body>
            </Container>
            {
               register && <Form />
            }
         </MemberGalaxy>

         <Footer />
      </>
   )
}
export default Member