
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { primary, secondary, black, white } from '../colors/colors'


const display = keyframes`
   0%{
      transform: translateY(30px);
      opacity: 0;
   }
   100%{
      transform: translateY(0);
      opacity: 1;
   }
`;

const Menu = styled.div`
   display: flex;
   width: 100%;
   margin-bottom: 30px;
   border-bottom: 1px solid ${secondary};
   p{
      text-transform: uppercase;
      cursor: pointer;
      font-size: 20px;
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
         bottom: -1.4px;
         left: 0;
         transform-origin: (50%,50%);
         transition: all 0.2s ease-in;
      }

      &:nth-child(2){
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

const Content = styled.div`
   width: 1250px;
   display: flex;
   justify-content: space-between;
   animation: ${display} 0.3s ease-in;
`;

const Item = styled.div`
   width: 400px;
   h4{
      text-transform: uppercase;
      text-align: center;
      color: ${white};
      padding: 12px 0;
      background-color: ${primary};
      font-size: 16px;
      font-weight: 400;
   }
   ul{
      li{
         padding: 23px 18px;
         color: rgb(85,85,85);
         font-size: 14px;
         transition: all 0.2s ease-in;
         cursor: pointer;
         border-bottom: 0.1px solid rgb(220,220,220);
         border-left: 0.1px solid rgb(220,220,220);
         border-right: 0.1px solid rgb(220,220,220);
         &:hover{
            background-color: rgba(50,50,50,0.1);
         }
      }
   }
`;

const Film = (props) => {
   return (
      <>
         <Menu>
            <p>theo phim</p>
            <p onClick={() => props.setFilm(false)}>theo rạp</p>
         </Menu>
         <Content>

            <Item>
               <h4>chọn rạp</h4>

               <ul>
                  <li>Galaxy Linh Trung</li>
                  <li>Galaxy Linh Trung</li>
                  <li>Galaxy Linh Trung</li>
                  <li>Galaxy Linh Trung</li>
                  <li>Galaxy Linh Trung</li>
                  <li>Galaxy Linh Trung</li>
                  <li>Galaxy Linh Trung</li>
                  <li>Galaxy Linh Trung</li>
               </ul>
            </Item>

            <Item>
               <h4>chọn phim</h4>
               <ul>
                  <li>Galaxy Linh Trung</li>
               </ul>
            </Item>

            <Item>
               <h4>chọn suất</h4>
               <ul>
                  <li>Galaxy Linh Trung</li>
               </ul>
            </Item>
         </Content>
      </>
   )
}
export default Film