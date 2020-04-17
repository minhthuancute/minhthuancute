
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
`;

const Law = () => {
   return (
      <Wrapper>
         <h6>THỂ LỆ</h6>

         <p>Chương trình khách hàng thân thiết Galaxy là chương trinh ưu đãi dựa trên điểm tích lũy của các thành viên gồm Star, G-star,
         X-star. Với mỗi giao dịch tại hệ thống rạp Galaxy, bạn sẽ nhận được điểm thưởng tương ứng. Hình thức tích lũy như sau:
                  </p>

         <img src="/assets/user-1.jpg" style={{
            width: '700px',
            height: '130px'
         }} />
         <br />

         <p style={{
            color: `${black}`,
            fontWeight: '500',
            marginBottom: '15px',
            fontSize: '16px'
         }}>Cách làm tròn điểm thưởng</p>

         <p>Từ 0.1 đến 0.4: làm tròn xuống(Ví dụ: 3.2 sao sẽ được tích vào tài khoản 3 sao)</p>
         <p style={{ marginBottom: '15px' }}>Từ 0.5 đến 0.9: làm tròn lên(Ví dụ: 3.5 sao sẽ được tích vào tài khoản 4 sao)</p>

         <p style={{
            color: `${black}`,
            fontWeight: '500',
            fontSize: '16px'
         }}>Cấp độ thành viên</p>

         <img src="/assets/user-2.jpg" style={{
            width: '700px',
            height: '200px'
         }} />

         <p><span style={{
            color: `${black}`,
            fontWeight: '500'
         }}>Star</span> là thành viên thân thiết có tổng chi tiêu trong năm dưới 2,000,000 đồng tính từ ngày 1/1-31/12</p>

         <p><span style={{
            color: `${black}`,
            fontWeight: '500'
         }}>G-star</span> là thành viên thân thiết có tổng chi tiêu trong năm từ 2,000,000 đồng đến 3,999,999 đông
                  tính từ ngày 1/1-31/12</p>

         <p><span style={{
            color: `${black}`,
            fontWeight: '500'
         }}>X-star</span> là thành viên thân thiết có tổng chi tiêu từ 4,000,000 đồng tính từ ngày 1/1-31/12</p>

         <p style={{
            color: `${black}`,
            fontWeight: '500',
            marginBottom: '15px',
            fontSize: '16px'
         }}>Chính sách đổi quà:</p>

         <img src='/assets/user-3.jpg' style={{
            width: '700px',
            height: '300px'
         }} />

         <p style={{
            color: `${black}`,
            fontWeight: '500',
            marginBottom: '15px',
            fontSize: '16px'
         }}>Lưu ý:</p>

         <ul>
            <li>Thông tin định danh thành viên gồm có email và số điện thoại bắt buộc phải hợp lệ.</li>
            <li><span>Email không hợp lệ</span> là email không có thực tại thời điểm <span>Galaxy Cinema</span> rà sát dữ liệu thành viên.</li>
            <li><span>Số điện thoại không hợp lệ</span> là số điện thoại không liên lạc được hoặc số điện thoại không thuộc sở
                     hữu của chủ tài khoản thành viên ở thời điêm Galaxy Cinema rà soát dữ liệu thành viên.</li>
            <li>Với các trường hợp không hợp lệ, Galaxy Cinema có quyền xóa tài khoản thành viên mà không cần thông báo trước.</li>
            <li>Tài khoản thành viên không có đủ thông tin định danh gồm <span>emai</span> và <span>số điện thoại hợp lệ</span>,
                     <span>Galaxy Cinema</span> có quyền xóa tài khoản thành viên mà không cần thông báo trước.</li>
            <li>Điểm tích lũy có giá trị áp dụng cho tất cả các rạp Galaxy Cinema trên toàn quốc.</li>
            <li>Điểm tích lũy có thời hạn sử dụng là 01 năm (tính từ ngày 01/01/2020 - 31/12/2020).</li>
            <li>Điểm tích lũy sẽ bị trừ sau mỗi lần đổi quà.</li>
            <li>Không giới hạn số lượng quà tặng được đổi.</li>
            <li>Bạn có thể dễ dang kiểm tra điểm tích lũy của mình trên Website Galaxy Cinema hoặc Ứng dụng GLX trên điện thoại (Mobile App).</li>
         </ul>
      </Wrapper>
   )
}
export default Law