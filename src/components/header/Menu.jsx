
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { primary, white } from '../colors/colors'

import SubMenuFilms from './SubMenuFilms'

const Display = keyframes`
   0%{
      transform: translateY(10px);
   }
`;

const MenuGalaxy = styled.div`
   background-color: #000000;
   padding: 16px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Ul = styled.ul`
   display: flex;
   width: 1250px;
   display: flex;
   justify-content: space-between;
   >li{
      color: white;
      text-transform: uppercase;
      width: 200px;
      text-align: center;
      cursor: pointer;

      position: relative;
      &::after{
         content: '';
         position: absolute;
         width: 1px;
         height: 10px;
         background-color: ${white};
         right: 0;
         top: 50%;
         transform: translateY(-50%);
      }
      &:last-child{
         &::after{
            width: 0;
         }
      }
      &:hover{
         >a,i{
            color: ${primary};
         }
         ul{
            display: block;
         }
      }
      a{
         transition: all 0.2s ease-in;
         color: #fff;
         font-weight: 450;
         font-size: 14px;
         margin-right: 5px;
         padding: auto;
      }
      i{
         font-size: 12px;
         margin-bottom: 5px;
      }
   }
`;

const SubMenuFirst = styled.li`
   position: relative;
`;

const SubMenuSecond = styled.li`
   position: relative;
   text-align: center;
   &:hover{
      ul{
         li{
            a{
               color: #fff;
            }
         }
      }
   }
   ul{
      position: absolute;
      z-index: 100;
      left: 0;
      top: 20px;
      height: 300px;
      width: 100%;
      background-color: #000000;
      border-radius: 3px;
      display: none;
      animation: ${Display} 0.3s linear forwards;
      li{
         padding: 18px 10px;
         &:hover{
            a{
               color: ${primary};
            }
         }
         &:first-child{
            padding-top: 25px;
         }
         a{
            transition: all 0.2s ease-in;
         }
      }
   }
`;

const SubMenuThird = styled(SubMenuSecond)`
   ul{
      height: 140px;
   }
`;

const Menu = () => {
   return (
      <>
         <MenuGalaxy>
            <Ul>
               <li><Link to='/mua-ve'>Mua vé</Link></li>

               <SubMenuFirst>
                  <Link to='/'>Phim</Link>
                  <i className="fas fa-chevron-down"></i>
                  <SubMenuFilms />
               </SubMenuFirst>

               <SubMenuSecond>
                  <Link to='/'>Góc điện ảnh</Link>
                  <i className="fas fa-chevron-down"></i>
                  <ul>
                     <li><Link to='/'>thể loại phim</Link></li>
                     <li><Link to='/'>diễn viên</Link></li>
                     <li><Link to='/'>đạo diễn</Link></li>
                     <li><Link to='/'>bình luận phim</Link></li>
                     <li><Link to='/'>blog điện ảnh</Link></li>
                  </ul>
               </SubMenuSecond>

               <SubMenuThird>
                  <Link to='/'>sự kiện</Link>
                  <i className="fas fa-chevron-down"></i>
                  <ul>
                     <li><Link to='/'>ưu đãi</Link></li>
                     <li><Link to='/'>phim hay tháng</Link></li>
                  </ul>
               </SubMenuThird>

               <li><Link to='/'>rạp/giá vé</Link></li>

               <li><Link to='/'>hỗ trợ</Link></li>

               <li><Link to='/chinh-sach'>thành viên</Link></li>
            </Ul>
         </MenuGalaxy>
      </>
   )
}
export default Menu