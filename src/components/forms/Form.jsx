
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { primary, secondary, white } from '../colors/colors'
import Login from './Login'
import Register from './Register';

const display = keyframes`
   0%{
      transform: translateY(-150px);
   }
   100%{
      transform: translateY(0);
   }
`;

const Forms = styled.div`
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

const Container = styled.div`
   animation: ${display} 0.4s;
   width: 550px;
   height: min-content;
   background-color: ${white};
   padding: 40px;
   margin-top: 25px;
`;

const Form = (props) => {
   const [index, setIndex] = useState(props.index ? props.index : 1);

   const render = (index) => {
      switch (index) {
         case 1:
            return <Login />;
         case 3:
            return <Register />
      }
   }

   const Menu = styled.ul`
      position: relative;
      display: flex;
      width: 100%;
      i{
         position: absolute;
         right: -40px;
         top: -40px;
         padding: 8px 12px;
         color: ${secondary};
         font-size: 22px;
         cursor: pointer;
         transition: all 0.3s ease-in;
         &:hover{
            color: ${primary};
         }
      }
       li{
         text-transform: uppercase;
         font-size: 22px !important;
         margin-right: 30px;
         padding-bottom: 12px;
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
         &:nth-child(2){
            &::before{
               width: 0;
            }
         }
         &:nth-child(${index}){
            color: ${primary};
            &:hover{
               color: ${primary};
            }
            &::before{
               transform: scale(1);
            }
         }
      }
   `;

   return (
      <Forms>
         <Container>
            <Menu>
               <li onClick={() => setIndex(1)}>đăng nhập</li>
               <li>/</li>
               <li onClick={() => setIndex(3)}>đăng ký</li>
               <i onClick={() => props.setShowForm()} className="fas fa-times" title="Thoát"></i>
            </Menu>

            {
               render(index)
            }
         </Container>
      </Forms>
   )
}

export default Form