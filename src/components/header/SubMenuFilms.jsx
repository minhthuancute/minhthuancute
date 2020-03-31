
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { primary, secondary, white, black } from '../colors/colors'
import { Link } from 'react-router-dom'

import ShowingFilmDatas from '../../datas/showing-films.json'
import CommingFilmDatas from '../../datas/comming-films.json'

const Display = keyframes`
   0%{
      transform: translateY(10px);
   }
   100%{
      transform: translateY(0);
   }
`;

const Fimls = styled.ul`
   display: none;
   animation: ${Display} 0.3s linear forwards;
   position: absolute;
   z-index: 10000;
   width: 1280px;
   height: 650px;
   top: 30px;
   left: -15px;
   background-color: ${black};
   padding: 20px 30px 10px 30px;
   h3{
      color: ${white};
      text-align: left;
      position: relative;
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 400;
      transition: all 0.2s ease-in;
      padding: 2px 0;
      &:hover{
         color: ${primary};
      }
      &::after{
         content: '';
         position: absolute;
         left: 0;
         top: 30px;
         background-color: ${primary};
         width: 50px;
         height: 2px;
      }
   }
`;

const Avatar = styled.div`
   position: relative;
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
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: all 0.2s ease-in;
   }
   a{
      display: none;
      content: '';
      position: absolute;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: ${white};
      transition: all 0.2s ease-in;
      padding: 14px 25px;
      background-color: inherit;
      border: 1px solid ${white};
      text-transform: uppercase;
      border-radius: 3px;
      font-size: 15px;
      &:hover{
         background-color: ${primary};
         border: 1px solid ${primary};
      }
   }
`;


const Showing = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 20px;
`;

const CommingSoon = styled(Showing)``;

const Film = styled.div`
   text-align: left;
   width: 280px;
   height: 220px;
   img{
      width: 100%;
      height: 180px;
   }
   h4{
      font-size: 16px;
      font-weight: 400;
      color: ${white};
      text-transform: uppercase;
      margin-top: 10px;
      cursor: text;
   }
`;

const SubMenuFilms = () => {
   console.log('rendered');
   return (
      <Fimls>
         <Link to='/phim-dang-chieu'>
            <h3>phim đang chiếu</h3>
         </Link>
         <Showing>
            {
               ShowingFilmDatas.slice(0, 4).map(film => (
                  <Film key={film._id}>
                     <Avatar>
                        <img src={film.avatarSub ? film.avatarSub : film.avatar} alt={film.name} />
                        <Link to='/'>mua vé</Link>
                     </Avatar>
                     <h4>{film.name}</h4>
                     {film.des && <h4 style={{ color: `${secondary}` }}>{film.des}</h4>}
                  </Film>
               ))
            }
         </Showing>

         <Link to='/phim-sap-chieu'>
            <h3>PHim sắp chiếu</h3>
         </Link>
         <CommingSoon>
            {
               CommingFilmDatas.slice(0, 4).map(film => (
                  <Film key={film._id}>
                     <Avatar>
                        <img src={film.avatarSub !== "" ? film.avatarSub : film.avatar} alt={film.name} />
                        <Link to='/'>mua vé</Link>
                     </Avatar>
                     <h4>{film.name}</h4>
                     {film.des && <h4 style={{ color: `${secondary}` }}>{film.des}</h4>}
                  </Film>
               ))
            }
         </CommingSoon>
      </Fimls>
   )
}
export default React.memo(SubMenuFilms)