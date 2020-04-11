
import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { primary, secondary } from '../colors/colors'
import Form from '../forms/Form'
import Menu from './Menu'

const HeaderGalaxy = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #f7f9fa;
   padding: 14px;
`;

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 1250px;
   letter-spacing: 0.5px;
`;

const LeftHeader = styled.div`
   img{
      width: 400px;
      height: 50px;
   }
`;

const MidHeader = styled.form`
   position: relative;
   transform: translateX(-100px);
   i{
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      color: #ccc;
      transition: all 0.2s ease-in;
      cursor: pointer;
      font-size: 16px;
      padding: 2px;
      &:hover{
         color: #2980b9;
      }
   }
`;

const InputHeader = styled.input`
   width: 300px;
   height: 30px;
   padding: 14px;
   border: 1px solid #ccc;
   transition: all 0.2s ease-in;
   border-radius: 3px;
   &::placeholder{
      color: ${secondary};
   }
  
   &:focus{
      border: 1px solid #2980b9;
   }
`;

const RightHeader = styled.div`
   display: flex;
   a,p{
      font-size: 14px;
   }
   a{
      transition: all 0.2s ease-in;
      color: ${secondary};
      margin-right: 15px;
      &:hover{
         color: ${primary};
      }
  }
   p{
      transition: all 0.2s ease-in;
      cursor: pointer;
      &:hover{
         color: ${primary};
      }
   }
   span{
      margin: 0 10px;
   }
`;

const Header = () => {
   console.log('Header rendered');

   const [showForm, setShowForm] = useState(false);
   return (
      <>
         {showForm && <Form setShowForm={setShowForm} showForm={showForm} />}

         <HeaderGalaxy>
            <Container>
               <LeftHeader>
                  <Link to='/'>
                     <img src='/assets/galaxy-logo.png' alt='galaxy' />
                  </Link>
               </LeftHeader>

               <MidHeader>
                  <InputHeader placeholder='Tìm tên phim, diễn viên' type='text' />
                  <i className="fas fa-search"></i>
               </MidHeader>

               <RightHeader>
                  <Link to='/' onClick={() => setShowForm(!showForm)}>
                     <i style={{
                        marginRight: '10px'
                     }} className="fas fa-user"></i>
                     Đăng nhập
                  </Link>

                  <p style={{
                     color: '#f26b38'
                  }}>VN</p>
               </RightHeader>
            </Container>
         </HeaderGalaxy>

         <Menu />
      </>
   )
}

export default React.memo(Header)