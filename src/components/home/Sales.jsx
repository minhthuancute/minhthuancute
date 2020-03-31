
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { primary, white } from '../colors/colors'
import SalesDatas from '../../datas/sales.json'

const SalesGalaxy = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
`;

const Container = styled.div`
   max-width: 1500px;
   h3{
      color: rgb(67, 70, 75);
      font-weight: 500;
      font-size: 20px;
      padding-bottom: 15px;
      text-transform: uppercase;
      position: relative;
      margin-bottom: 30px;
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
         height: 3px;
      }
   }
`;

const WraperSales = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`;

const Item = styled.div`
   position: relative;
   margin-bottom: 22px;
   &:last-child{
      margin-right: 384px;
   }
   &:hover{
      &::after,div{
         opacity: 1;
      }
   }
`;

const Infor = styled.div`
   a{
      img{
         height: 400px;
      }
   }
`;

const More = styled.div`
   position: absolute;
   opacity: 0;
   transition: all 0.3s ease-in;
   top: 0;
   left: 0;
   padding: 25px;
   background: rgba(0, 0, 0, 0.6);
   width: 350px;
   height: 99%;
   color: ${white};
   text-align: center;
   h2{
      text-transform: uppercase;
      color: ${white};
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 40px;
      text-align: left;
   }
   p{
      font-weight: normal;
      text-align: left;
      font-size: 18px;
      line-height: 30px;
   }
   button{
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: ${white};
      transition: all 0.2s ease-in;
      width: auto;
      padding: 18px 40px;
      background-color: inherit;
      border: 1px solid ${white};
      text-transform: uppercase;
      border-radius: 3px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      &:hover{
         background-color: ${primary};
         border: 1px solid ${primary};
      }
   }
`;


const Sales = () => {
   return (
      <SalesGalaxy>
         <Container>
            <Link to='/'>
               <h3>TIN KHUYẾN MÃI</h3>
            </Link>

            <WraperSales>
               {
                  SalesDatas.map(item => (
                     <Item key={item._id}>
                        <Infor>
                           <img style={{ width: '350px' }} src={item.avatar} alt={item.name} />
                        </Infor>
                        <Link to='/'>
                           <More>
                              <h2>{item.name}</h2>
                              <p>{item.des}</p>
                              <button>Chi tiết</button>
                           </More>
                        </Link>
                     </Item>
                  ))
               }
            </WraperSales>

         </Container>
      </SalesGalaxy>
   )
}
export default Sales