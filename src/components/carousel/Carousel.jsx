
import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

import { primary, white, black, black2 } from '../colors/colors'

const display = keyframes`
   0%{
      opacity: 0;
      transform: translateY(-20px);
   }
   100%{
      opacity: 1;
      transform: translateY(0);
   }
`;

const Owl = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Container = styled.div`
   position: relative;
   width: 100%;
   button{
      &.owl-prev , &.owl-next{
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         span{
            color: red;
            opacity: 0.6;
            font-weight: 700 !important;
            color: ${white};
            transition: all 0.2s ease-in;
            font-size: 50px;
            font-stretch: 100%;
            &:hover{
               color: ${primary};
            }
         }
      }
      &.owl-prev{
         left: 10px;
      }
      &.owl-next{
         right: 10px;
      }
   }

   .owl-dots{
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      button{
         &.active{
            span{
               background-color: ${primary} !important;
            }
         }
      }
   }
`;

const Item = styled.div`
   position: relative;
   height: 460px;
   img{
      height: 100%;
   }
   button{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      cursor: pointer;
      padding: 30px 35px;
      border-radius: 100%;
      font-size: 30px;
      color: ${white};
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s ease-in;
      border: 1px solid ${white};
      &:hover{
         background-color: rgba(0, 0, 0, 0.8);
      }
   }
`;

const Trailer = styled.div`
   animation: ${display} 0.5s linear;
   position: fixed;
   z-index: 1000;
   width: 100%;
   height: 100vh;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const WraperTrailer = styled.div`
   width: 900px;
   height: 600px;
   background-color: ${white};
   padding: 20px;
   position: relative;
   border-radius: 2px;
   &::after{
      position: absolute;
      content: '';
      z-index: 5000000;
      left: 0;
      top: 65px;
      background-color: ${black2};
      width: 100%;
      height: 2px;
      opacity: 0.4;
   }
   i{
      position: absolute;
      cursor: pointer;
      top: 22px;
      right: 15px;
      transition: all 0.3s ease-in;
      font-size: 18px;
      color: ${black};
      opacity: 0.6;
      &:hover{
         opacity: 1;
      }
   }
   h4{
      margin-bottom: 35px;
      text-align: center;
      text-transform: capitalize;
      color: ${black2};
      letter-spacing: 1px;
      font-size: 20px;
      font-weight: 400;
   }
   iframe{
      width: 100%;
      height: 500px;
   }
`;

const Carousel = () => {
   const [datasTrailer, setDatasTrailer] = useState({
      name: '',
      src: '',
      isDisplay: false
   });

   const setDataTrailer = (name, src, flag) => {
      setDatasTrailer({ name, src, isDisplay: flag })
   }

   return (
      <Owl>
         <Container>
            {
               datasTrailer.isDisplay && <Trailer>
                  <WraperTrailer>
                     <h4>{datasTrailer.name}</h4>
                     <iframe src={datasTrailer.src} title="demo" />
                     <i onClick={() => setDataTrailer('', '', false)} className="fas fa-times"></i>
                  </WraperTrailer>
               </Trailer>
            }

            <OwlCarousel
               className="owl-theme"
               loop
               autoplay
               autoplayHoverPause={true}
               smartSpeed={600}
               nav
               items={1}
            >
               <Link to='/'>
                  <Item>
                     <img src='/assets/blood-shot.jpg' alt='blood shot' />
                     <button onClick={() => setDataTrailer('blood shot', 'https://www.youtube.com/embed/2xmqGklHWLI?autoplay=1&controls=1&showinfo=1', true)}><i className="fas fa-play"></i></button>
                  </Item>
               </Link>

               <Link to='/'>
                  <Item>
                     <img src='/assets/nang-3.jpg' alt='nang 3 loi hua cua cha' />
                     <button onClick={() => setDataTrailer('Nắng 3', 'https://www.youtube.com/embed/Oq8zVs3TxHg?autoplay=1&controls=1&showinfo=1', true)}><i className="fas fa-play"></i></button>
                  </Item>
               </Link>

               <Link to='/'>
                  <Item>
                     <img src='/assets/onward.jpg' alt='onward' />
                     <button onClick={() => setDataTrailer('onward', 'https://www.youtube.com/embed/B1Bm1gzC32A?autoplay=1&controls=1&showinfo=1', true)}><i className="fas fa-play"></i></button>
                  </Item>
               </Link>

               <Link to='/'>
                  <Item>
                     <img src='/assets/sale.jpg' alt='sale' />
                  </Item>
               </Link>
            </OwlCarousel>
         </Container>
      </Owl>
   )
}
export default Carousel