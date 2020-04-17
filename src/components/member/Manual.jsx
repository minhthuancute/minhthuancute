
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
      height: 200px;
   }
`;

const Manual = () => {
   return (
      <Wrapper>
         <p style={{
            color: `${black}`,
            fontWeight: '500',
            marginBottom: '15px',
            fontSize: '16px'
         }}>Chỉ với 3 bước đơn giản để trở thành thành viên thân thiết cảu Galaxy Cinema.</p>

         <img src='./assets/manual-1.jpg' alt='' />

         <ul>
            <li>Đối với khách hàng thành viên G-Star, X-Star: miễn phí đổi vị bắp chỉ áp dụng cho phần bắp lẻ, combo 1, combo 2.</li>
            <li>Qùa tri ân sẽ được trao vào cuối năm cho thành viên X-Star.</li>
         </ul>

         <p style={{
            color: `${black}`,
            fontWeight: '500',
            marginBottom: '15px',
            fontSize: '16px'
         }}>Hướng dẫn tích lũy điểm</p>

         <p>Thành viên mua bất kỳ sản phẩm đang được bán tại các rạp <span style={{ color: `${black}`, fontWeight: '500', }}>Galaxy Cinema</span> trên toàn quốc hoặc thanh toán
         trực tuyến sẽ được tích lũy điểm thưởng tương ứng vào tài khoản.</p>

         <img src='./assets/user-1.jpg' alt='' style={{ height: '100px', width: '500px' }} />

         <p>Áp dụng với tất cả sản phẩm: vé xem phim, nước uống, thức ăn, combo,...</p>

         <p>
            <span style={{ color: `${black}`, fontWeight: '500', }}>Lưu ý: </span>Đối với những giao dịch trực tuyến, thành viên phải đăng nhập
            vào tài khoản mới được quyền tích điểm hợp lệ.
         </p>

         <p style={{
            color: `${black}`,
            fontWeight: '500',
            marginBottom: '15px',
            fontSize: '16px'
         }}>Hướng dẫn đổi quà</p>

         <p>Thành viên đổi quà trực tiếp tại các cụm rạp <span style={{ color: `${black}`, fontWeight: '500', }}>Galaxy Cinema</span> theo các bước sau</p>

         <p>Bước 1: Thành viên trình barcode trên mobile app/thẻ thành viên tại các quầy vé hoặc quầy bắp nước.</p>

         <p>Bước 2: Thông báo với nhân viên quà tặng muốn qui đổi.</p>

         <p>Bước 3: Nhân viên kiểm tra số điểm tích lũy của thành viên. Nếu đủ điểm sẽ tiến hành đổi quà.</p>
      </Wrapper>
   )
}
export default Manual