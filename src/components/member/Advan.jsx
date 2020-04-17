

import React from 'react'
import { black } from '../colors/colors'
import styled, { keyframes } from 'styled-components'

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

const Wrapper = styled.div`
   animation: ${display} 0.4s ease-in;

   img{
      width: 750px;
      height: 350px;
   }
`;

const Advan = () => {
   return (
      <Wrapper>
         <h6>Quyền lợi chính</h6>

         <img src="/assets/advan-1.jpg" alt='bảng quyền lợi' />

         <p style={{
            color: `${black}`,
            fontWeight: '500',
            marginBottom: '15px',
            fontSize: '16px'
         }}>Chú ý:</p>

         <ul>
            <li>Đối với khách hàng thành viên G-Star, X-Star: miễn phí đổi vị bắp chỉ áp dụng cho phần bắp lẻ, combo 1, combo 2.</li>
            <li>Qùa tri ân sẽ được trao vào cuối năm cho thành viên X-Star.</li>
         </ul>

         <p style={{
            color: `${black}`,
            fontWeight: '500',
            marginBottom: '15px',
            fontSize: '16px'
         }}>Quyền lợi khác</p>

         <ul>
            <li>Tham dự buổi công chiếu ra mắt cùng các sao: cơ hội cùng các sao nổi tiếng tham dự buổi ra mắt phim.</li>
            <li>Nhận quà tặng độc đáo vào các ngày lễ lớn như Valentine, 8/3,...</li>
            <li>Cơ hội nhân đôi/ba điểm tích lũy nhân các sự kiện đặt biệt.</li>
         </ul>
      </Wrapper>
   )
}
export default Advan