
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { primary, secondary, black, black2, white } from '../colors/colors'

import PreviewFilmDatas from '../../datas/previews.json'

const Preview = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Container = styled.div`
   width: 1250px;
   h3{
      color: rgb(67, 70, 75);
      font-size: 20px;
      padding-bottom: 15px;
      text-transform: uppercase;
      position: relative;
      margin-bottom: 30px;
      font-weight: 500;
      transition: all 0.3s ease-in;
      &:hover{
         color: ${primary}
      }
      &::after{
         content: '';
         position: absolute;
         left: 0;
         bottom: 0;
         background-color: ${primary};
         width: 60px;
         height: 2px;
      }
   }
`;

const Previews = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`;

const Item = styled.div`
   display: flex;
   width: 610px;
   margin-bottom: 30px;
   &:hover{
      div{
         &::after{
            opacity: 1;
         }
      }
   }
`;

const Left = styled.div`
   margin-right: 20px;
   position: relative;
   cursor: pointer;
   &::after{
      content: '';
      background-color: rgba(0,0,0,0.3);
      position: absolute;
      width: 100%;
      height: 98%;
      left: 0;
      top: 0;
      opacity: 0;
      transition: all 0.4s ease-in;
   }
   img{
      width: 240px;
      height: 175px;
   }
`;

const Right = styled.div`
   h5{
      font-size: 20px;
      color: ${black2};
      font-weight: 400;
      transition: all 0.3s ease-in;
      &:hover{
         color: ${primary};
      }
   }
   p{
      line-height: 26px;
      letter-spacing: 0.2px;
      color: ${black2};
      font-weight: 400;
      font-size: 14px;
   }
`;

const MidRight = styled.div`
   display: flex;
   margin: 14px 0;
   p{
      padding: 0 12px;
      background-color: #3498db;
      color: ${white};
      border-radius: 2px;
      font-size: 12px;
      font-stretch: 100%;
      cursor: pointer;
      &:nth-child(2){
         background-color: #e9edf1;
         color: ${black2};
         margin-left: 10px;
         font-size: 14px;
      }
      &:nth-child(3){
         background-color: transparent;
         font-size: 14px;
         color: ${black2};
         i{
            color: yellow;
            font-size: 18px;
         }
      }
   }
`;

const PreviewFilm = () => {
   return (
      <Preview>
         <Container>
            <Link to='/binh-luan-phim'><h3>bình luận phim</h3></Link>

            <Previews>
               {
                  PreviewFilmDatas.map(item => (
                     <Item key={item._id}>
                        <Link>
                           <Left>
                              <img src={item.avatar} alt={item.name} />
                           </Left>
                        </Link>

                        <Right>
                           <Link to='/'><h5>{item.name}</h5></Link>
                           <MidRight>
                              <p><i className="fas fa-check"></i> Thích {item.likes}</p>

                              <p><i className="far fa-eye"></i> {item.views}</p>

                              <p>
                                 <i className="fas fa-star"></i> <span style={{ color: `${black}` }}>{item.star}</span>/10 {item.vote}
                              </p>
                           </MidRight>
                           <p>{item.des}</p>
                        </Right>
                     </Item>
                  ))
               }
            </Previews>
         </Container>
      </Preview>
   )
}

export default PreviewFilm