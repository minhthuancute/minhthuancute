

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { primary, black } from '../colors/colors'

const AboutShowingGalaxy = styled.div`
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
      font-size: 12px;
      font-weight: normal;
      a{
         transition: all 0.2s ease-in;
         font-weight: 700;
         color: ${black};
         &:hover{
            color: ${primary};
         }
      }
   }
`;

const AboutShowing = () => {
   return (
      <AboutShowingGalaxy>
         <h3>galaxy cinema</h3>
         <p>
            <Link to='/'>Galaxy Cinema</Link> là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập
            từ năm 2003, đã khẳng định thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được
            yêu thích nhất. Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người
            đến xem, <Link to='/'>Galaxy Cinema</Link> còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng
            dịch vụ hàng đầu.
         </p>
         <p>
            Đến website galaxycine.vn, quý khách sẽ được cập nhật nhanh chóng các phim hay nhất phim
            mới nhất đang chiếu hoặc sắp chiếu. Lịch chiếu tại mọi hệ thống rạp chiếu phim của
            <Link to='/'>Galaxy Cinema</Link> cũng được cập nhật đầy đủ hàng ngày hàng giờ trên trang chủ.
         </p>
         <p>
            Đặt vé tại <Link to='/'>Galaxy Cinema</Link> dễ dàng chỉ sau vài thao tác vô cùng đơn giản. Để mua vé, hãy
            vào tab Mua vé. Quý khách có thể chọn Mua vé theo phim, theo rạp, theo ngày tùy cách nào
            tiện lợi nhất cho bản thân.Sau đó, tiến hành mua vé theo các bước hướng dẫn. Chỉ trong
            vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi Đặt vé thành công của
            <Link to='/'>Galaxy Cinema</Link>. Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của <Link to='/'>Galaxy Cinema</Link>
            hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.
         </p>

         <p>
            Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng box Mua Vé Nhanh ngay
            từ Trang Chủ. Chỉ cần một phút, tin nhắn và email phản hồi của <Link to='/'>Galaxy Cinema</Link> sẽ gửi ngay
            vào điện thoại và hộp mail của bạn.
         </p>
         <p>
            <Link to='/'>Galaxy Cinema</Link> luôn có những chương trình khuyến mãi, ưu đãi, quà tặng vô cùng hấp dẫn
            như giảm giá vé, tặng vé xem phim miễn phí, tặng Combo, tặng quà phim…  dành cho quý
            khách.
         </p>
         <p>
            Trang web galaxycine.vn còn có mục Góc Điện Ảnh - sở hữu lượng dữ liệu về phim,
            diễn viên và đạo diễn, giúp quý khách dễ dàng chọn được phim mình yêu thích và nâng
            cao kiến thức về điện ảnh của bản thân. Ngoài ra, vào mỗi tháng, <Link to='/'>Galaxy Cinema</Link> cũng
            giới thiệu các phim sắp chiếu hot nhất trong mục Phim Hay Tháng để quý khách sớm có
            sự tính toán.
         </p>
         <p>
            Hiện nay, <Link to='/'>Galaxy Cinema</Link> đang ngày càng phát triển hơn nữa với các chương
            trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của
            thế giới và Việt Nam nhanh chóng và sớm nhất.
         </p>
      </AboutShowingGalaxy>
   )
}

export default AboutShowing