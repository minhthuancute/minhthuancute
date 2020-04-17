
import React, { useState } from 'react'
import styled from 'styled-components'
import { primary, secondary, white } from '../colors/colors'

const FormREgister = styled.form`
   margin-top: 40px;
   div{
      display: flex;
      justify-content: space-between;
      input{
         width: 48%;
      }
      select{
         width: 48%;
         height: 40px;
         padding: 10px;
         cursor: pointer;
      }
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
   input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
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
      width: 100%;
      &:hover{
         opacity: 1;
      }
   }
`;

const Register = () => {
   const [datasRegister, setDataRegister] = useState({
      name: '',
      phone: '',
      gender: '',
      email: '',
      password: '',
      password2: '',
      addres: ''
   })

   const handleChange = e => {
      setDataRegister({
         ...datasRegister, [e.target.name]: e.target.value
      })
   }

   return (
      <FormREgister>
         <input name='name' placeholder='Họ Tên' type='text' onChange={handleChange} title='Please fill out this field.' />

         <div>
            <input name='phone' placeholder='Số điện thoại' type='number' onChange={handleChange} title='Please fill out this field.' />

            <select name='gender' onChange={handleChange}>
               <option value='nam'>Nam</option>
               <option value='nu'>Nữ</option>
            </select>
         </div>

         <input name='email' placeholder='Email' type='email' onChange={handleChange} title='Please fill out this field.' />

         <div>
            <input name='password' placeholder='Mật khẩu' type='password' onChange={handleChange} title='Please fill out this field.' />
            <input name='password2' placeholder='Xác nhận mật khẩu' type='password' onChange={handleChange} title='Please fill out this field.' />
         </div>

         <input name='addres' placeholder='Địa chỉ' type='text' onChange={handleChange} title='Please fill out this field.' />

         <button>Đăng ký</button>
      </FormREgister>
   )
}
export default Register;