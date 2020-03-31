
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { primary, secondary } from '../colors/colors'

const FooterGalaxy = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: rgb(26,26,26);
   padding: 20px 0 20px 0;
   color: ${secondary};
   position: relative;
   &:after{
      content: '';
      position: absolute;
      bottom: 75px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${secondary};
   }
`;

const Container = styled.div`
   width:  1500px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 25px 0 0 0;
`;

const Item = styled.div`
   height: 230px;
   h1{
      text-transform: uppercase;
      padding-left: 15px;
      margin-bottom: 10px;
      border-left: 4px solid ${primary};
      font-size: 20px;
      font-weight: 0;
   }
   ul{
      li{
         padding: 12px 0;
         &::last-child{
            padding: 0;
         }
         a{
            color: ${secondary};
            text-transform: uppercase;
            font-size: 15px;
            transition: all 0.2s ease-in;
            padding: 4px 0;
            &:hover{
               color: ${primary};
            }
            i{
               margin-right: 5px;
            }
         }
      }
   }
`;

const LastChild = styled.div`
   height: 230px;
   h1{
      text-transform: uppercase;
      padding-left: 15px;
      margin-bottom: 20px;
      border-left: 4px solid ${primary};
      font-size: 18px;
   }
   ul{
      display: flex;
      li{
         margin-right: 20px;
         &:last-child{
            margin-right: 0;
            &:hover{
               a{
                  color: ${primary};
               }
            }
         }
         &:nth-child(1){
            &:hover{
               a{
                  color: #3498db;
               }
            }
         }
         &:nth-child(2){
            &:hover{
               a{
                  color: #e74c3c;
               }
            }
         }
         a{
            color: ${secondary};
            font-size: 28px;
            transition: all 0.2s ease-in;
         }
      }
   }
`;

const Infor = styled.div`
   width:  1500px;
   display: flex;
   align-items: center;
   a{
      margin-right: 20px;
   }
   p{
      text-transform: capitalize;
      font-size: 16px;
   }
`;

const Footer = () => {
   return (
      <FooterGalaxy>
         <Container>
            <Item>
               <h1>giới thiệu</h1>
               <ul>
                  <li><Link><i className="fas fa-angle-double-right"></i>về chúng tôi</Link></li>
                  <li><Link><i className="fas fa-angle-double-right"></i>thỏa thuận sử dụng</Link></li>
                  <li><Link><i className="fas fa-angle-double-right"></i>quy chế hoạt động</Link></li>
                  <li><Link><i className="fas fa-angle-double-right"></i>chính sách bảo mật</Link></li>
               </ul>
            </Item>

            <Item>
               <h1>góc điện ảnh</h1>
               <ul>
                  <li><Link><i className="fas fa-angle-double-right"></i>thể loại phim</Link></li>
                  <li><Link><i className="fas fa-angle-double-right"></i>bình luận phim</Link></li>
                  <li><Link><i className="fas fa-angle-double-right"></i>blog điện ảnh</Link></li>
                  <li><Link><i className="fas fa-angle-double-right"></i>phim hay tháng</Link></li>
               </ul>
            </Item>

            <Item>
               <h1>hỗ trợ</h1>
               <ul>
                  <li><Link><i className="fas fa-angle-double-right"></i>góp ý</Link></li>
                  <li><Link><i className="fas fa-angle-double-right"></i>sale & services</Link></li>
                  <li><Link><i className="fas fa-angle-double-right"></i>rạp / giá vé</Link></li>
                  <li><Link><i className="fas fa-angle-double-right"></i>tuyển dụng</Link></li>
               </ul>
            </Item>

            <LastChild>
               <h1>kết nối galaxy cinema</h1>
               <ul>
                  <li><a href='https://www.facebook.com/galaxycinevn/' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a></li>
                  <li><a href='https://www.youtube.com/user/galaxymovies' target='_blank' rel="noopener noreferrer"><i className="fab fa-youtube-square"></i></a></li>
                  <li><a href='https://www.instagram.com/galaxycinema/' target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
               </ul>

               <h1 style={{ marginTop: '20px' }}>download app</h1>
               <ul>
                  <li><a href='https://apps.apple.com/vn/app/galaxy-cinema/id593312549?l=vi' target='_blank' rel="noopener noreferrer"><i className="fab fa-apple"></i></a></li>
                  <li><a href='https://play.google.com/store/apps/details?id=com.galaxy.cinema&hl=vi' target='_blank' rel="noopener noreferrer"><i className="fab fa-google-play"></i></a></li>
               </ul>
            </LastChild>
         </Container>

         <Infor>
            <Link to='/home'><img src='/assets/galaxy-logo-footer.png' alt='' /></Link>
            <p>công ty cổ phần phim thiên ngân , tầng 5, tòa nhà mặt trời sông hồng, 23 phan chu trinh, phường phan chu trinh, quận hoàng kiếm, hà nội</p>
         </Infor>
      </FooterGalaxy>
   )
}
export default React.memo(Footer)