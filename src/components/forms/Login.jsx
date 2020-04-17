
import React, { useState } from 'react'
import styled from 'styled-components'
import { primary, secondary, white } from '../colors/colors'


const FormLogin = styled.form`
   display: flex;
   flex-direction: column;
   p{
      margin: 15px 0 25px 0;
      color: ${secondary};
      line-height: 26px;
      font-size: 13px;
      font-weight: 400;
   }
   input{
      width: 100%;
      height: 40px;
      padding: 10px;
      transition: all 0.3s ease-in;
      border: 1px solid ${secondary};
      margin-bottom: 20px;
      border-radius: 2px;
      &:focus{
         border: 1px solid ${primary};
      }
   }

   button{
      margin-top: 15px;
      padding: 14px;
      background-color: ${primary};
      color: ${white};
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s ease-in;
      opacity: 0.8;
      &:hover{
         opacity: 1;
      }
   }
`;

const Login = () => {
   const [datasLogin, setDatasLogin] = useState({
      email: '',
      password: ''
   });

   const handleChange = (e) => {
      setDatasLogin({
         ...datasLogin, [e.target.name]: e.target.value
      })
   }

   return (
      <FormLogin >
         <p>Vui lòng đăng nhập trước khi mua vé để tích lũy điểm, cơ hội nhận thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.</p>
         <input onChange={handleChange} placeholder='Email' title='Please fill out this field.' type='email' name='email' />
         <input onChange={handleChange} placeholder='Mật khẩu' title='Please fill out this field.' type='password' name='password' />

         <button>đăng nhập</button>
      </FormLogin>
   )
}
export default Login