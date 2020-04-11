
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
   animation: ${display} 0.4s;
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
   width: 640px;
   height: 550px;
   background-color: ${white};
   padding: 40px;
   margin-top: 40px;
`;

const Menu = styled.div`
   position: relative;
   margin-top: 20px;
   p{
      margin-top: 30px;
      color: ${secondary};
      line-height: 28px;
      font-size: 17px;
      font-weight: 400;
   }
   i{
      position: absolute;
      right: -30px;
      top: -55px;
      padding: 5px;
      color: ${secondary};
      font-size: 25px;
      cursor: pointer;
      transition: all ease-in-out.3s ease-in;
      &:hover{
         color: ${primary};
      }
   }
   ul{
      display: flex;
      li{
         text-transform: uppercase;
         color: ${primary};
         margin-right: 40px;
         font-weight: 400;
         font-size: 32px;
         padding-bottom: 15px;
         transition: all 0.3s ease-in;
         line-height: 20px;
         cursor: pointer;
         transition: all 0.3s ease-in;

         &:hover{

         }
         &:last-child{
            margin-right: 0;
         }
         &:nth-child(1){

         }
         &:nth-child(2){
            border-bottom: none;
         }
         &:nth-child(3){

         }
      }
   }
`;

const Form = (props) => {
   const [isLogin, setIsLogin] = useState(true);

   const [datasRegister, setDatasRegister] = useState({

   })

   return (
      <Forms>
         <Container>
            <Menu>
               <ul>
                  <li onClick={() => setIsLogin(true)}>đăng nhập</li>
                  <li>/</li>
                  <li onClick={() => setIsLogin(false)}>đăng ký</li>
               </ul>
               <i onClick={() => props.setShowForm()} className="fas fa-times" title="Thoát"></i>
               <p>Vui lòng đăng nhập trước khi mua vé để tích lũy điểm, cơ hội nhận thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.</p>
            </Menu>

            {isLogin ? <Login /> : <Register />}
         </Container>
      </Forms>
   )
}

export default Form