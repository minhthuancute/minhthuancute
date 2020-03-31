
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { primary, black } from '../colors/colors'

const AboutGalaxy = styled.div`
   margin-top: 50px;
   h3{
      color: rgb(67, 70, 75);
      font-weight: 0;
      font-size: 22px;
      padding-bottom: 15px;
      text-transform: uppercase;
      position: relative;
      margin-bottom: 30px;
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
   p{
      margin-bottom: 20px;
      color: rgb(67, 70, 75);
      font-size: 16px;
      line-height: 35px;
      letter-spacing: 0.3px;
      a{
         transition: all 0.2s ease-in;
         font-weight: normal;
         color: ${black};
         &:hover{
            color: ${primary};
         }
      }
   }
`;

const About = () => {
   return (
      <AboutGalaxy>
         <h3>galaxy cinema</h3>
         <p>
            <Link to='/'>Galaxy Cinema</Link> luôn cập nhật nhanh nhất những bộ phim chiếu rạp mới
            nhất, hấp dẫn nhất sắp ra mắt trong thời gian tới. Các bộ phim sắp chiếu tại Galaxy
            Cinema luôn đủ mọi thể loại được ưa chuộng nhất bao gồm hành động, kinh dị, phiêu lưu,
            hoạt hình…phù hợp cho mọi lứa tuổi, đến từ Hollywood và nhiều quốc gia khác, thật dễ dàng
            để lựa chọn phim hay theo sở thích của bạn tại website Galaxy Cinema. Mỗi bộ phim mới cập
            nhật lên website sẽ hiển thị đầy đủ thông tin từ tựa phim, nội dung phim, ngày công chiếu
            giúp bạn thuận tiện trong việc theo dõi. Ngoài ra, Galaxy Cinema sẽ luôn cập nhật và tạo
            thuận tiện giúp bạn nhanh tay đặt lấy suất phim mới nhất, phù hợp nhất để thưởng thức
         </p>
      </AboutGalaxy>
   )
}

export default About