

import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { primary, secondary, black, white } from '../colors/colors'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import AboutComming from './AboutComming'
import CommingFilmDatas from '../../datas/comming-films.json'

const display = keyframes`
   0%{
      transform: translateY(20px);
      opacity: 0;
   }
   100%{
      transform: translateY(0);
      opacity: 1;
   }
`;

const Container = styled.div`
   width: 1250px;
`;

const Comming = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 30px 0;
`;

const Menu = styled.div`
   display: flex;
   width: 100%;
   border-bottom: 1px solid ${secondary};
   a{
      text-transform: uppercase;
      font-size: 18px;
      margin-right: 30px;
      padding-bottom: 15px;
      position: relative;
      transition: all 0.2s ease-in;
      color: ${black};
      &::before{
         content:'';
         position: absolute;
         width: 100%;
         height: 2px;
         background-color: ${primary};
         bottom: 0;
         left: 0;
         transform-origin: (50%,50%);
         transition: all 0.2s ease-in;
      }

      &:nth-child(1){
         color: ${secondary};
         &:hover{
            color: ${black};
            &::before{
               transform: scale(1);
            }
         }
         &::before{
            transform: scale(0);
         }
      }
   }
`;

const ShowFilms = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   margin: 30px 0;
   width:  1250px;
   animation: ${display} 0.4s linear;
`;

const width = '290px';
const Film = styled.div`
   width: ${width};
   height: 430px;
   margin-bottom: 80px;
   h4{
      text-transform: uppercase;
      font-size: 18px;
      color: #43464b;
      font-weight: 400;
      margin-top: 5px;
   }
`;

const Avatar = styled.div`
   position: relative;
   cursor: pointer;
   &:hover{
      a,&:after{
         display: flex;
         opacity: 1;
      }
   }
   &::after{
      content: '';
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 99%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: all 0.2s ease-in;
   }
   a{
      display: none;
      position: absolute;
      z-index: 10;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: ${white};
      transition: all 0.2s ease-in;
      padding: 15px 30px;
      background-color: inherit;
      border: 1px solid ${white};
      text-transform: uppercase;
      border-radius: 3px;
      font-size: 15px;
      font-weight: 500;
      &:hover{
         background-color: ${primary};
         border: 1px solid ${primary};
      }
   }
   img{
      width: ${width};
      height: 430px;
   }
`;

const CommingFilms = () => {

   return (
      <div>
         <Header />

         <Comming>
            <Container>
               <Menu>
                  <Link to='/phim-dang-chieu'>phim đang chiếu</Link>
                  <Link to='/phim-sap-chieu'>phim sắp chiếu</Link>
               </Menu>

               <ShowFilms>
                  {
                     CommingFilmDatas.map(film => (
                        <Film key={film._id}>
                           <Avatar>
                              <img src={film.avatar} alt={film.name} />
                              <Link>MUA VÉ</Link>
                           </Avatar>
                           <h4>{film.name}</h4>
                           {film.des && <h4 style={{ color: `${secondary}` }}>{film.des}</h4>}
                        </Film>
                     ))
                  }
               </ShowFilms>

               <AboutComming />
            </Container>
         </Comming>

         <Footer />
      </div>
   )
}
export default CommingFilms