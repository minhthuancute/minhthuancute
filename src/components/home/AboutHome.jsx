

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { primary, black, black2 } from '../colors/colors'

const Container = styled.div`
   max-width: 1500px;
`;

const AboutShowingGalaxy = styled.div`
   margin: 40px 0;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   h3{
      color: rgb(67, 70, 75);
      font-weight: 0;
      font-size: 20px;
      padding-bottom: 15px;
      text-transform: uppercase;
      position: relative;
      margin-bottom: 30px;
      font-weight: 500;
      color: ${black2};
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
   p{
      margin-bottom: 20px;
      color: rgb(67, 70, 75);
      font-size: 17px;
      font-weight: normal;
      line-height: 28px;
      letter-spacing: 0.5px;
      word-wrap: break-word;
      a{
         transition: all 0.2s ease-in;
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
         <Container>
            <h3>galaxy cinema</h3>
            <p>
               <Link to='/' style={{ fontWeight: '700' }}>Galaxy Cinema</Link> là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập
               từ năm 2003, đã khẳng định thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu thích nhất. Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người
               đến xem, <Link to='/' style={{ fontWeight: '700' }}>Galaxy Cinema</Link> còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng
               dịch vụ hàng đầu.
            </p>

            <p>
               Đến website <Link to='/' style={{ fontStyle: "italic" }}>galaxycine.vn</Link>, quý khách sẽ được cập nhật nhanh chóng các <Link to='/phim-dang-chieu' style={{ fontStyle: "italic" }}>phim hay nhất</Link> <Link to='/phim-dang-chieu' style={{ fontStyle: "italic" }}>phim
               mới nhất</Link> đang chiếu hoặc sắp chiếu. <Link to='/lich-chieu' style={{ fontStyle: "italic" }}>Lịch chiếu</Link> tại mọi hệ thống <Link to='/' style={{ fontStyle: "italic" }}>rạp chiếu phim</Link> của <Link to='/' style={{ fontWeight: '700' }}>Galaxy Cinema</Link> cũng được cập nhật đầy đủ hàng ngày hàng giờ trên trang chủ.
            </p>

            <p>
               Đặt vé tại <Link to='/' style={{ fontWeight: '700' }}>Galaxy Cinema</Link> dễ dàng chỉ sau vài thao tác vô cùng đơn giản. Để mua vé, hãy
               vào tab Mua vé. Quý khách có thể chọn Mua vé theo phim, theo rạp, theo ngày tùy cách nào
               tiện lợi nhất cho bản thân.Sau đó, tiến hành mua vé theo các bước hướng dẫn. Chỉ trong
               vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi Đặt vé thành công của <Link to='/' style={{ fontWeight: '700' }}>Galaxy Cinema</Link>. Quý khách
               có thể dùng tin nhắn lấy vé tại quầy vé của <Link to='/' style={{ fontWeight: '700' }}>Galaxy Cinema</Link> hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.
            </p>

            <p>
               Nếu bạn đã chọn được <Link to='/' style={{ fontWeight: '700' }}>phim hay</Link> để xem, hãy đặt vé cực nhanh bằng box Mua Vé Nhanh ngay
               từ Trang Chủ. Chỉ cần một phút, tin nhắn và email phản hồi của <Link to='/' style={{ fontWeight: '700' }}>Galaxy Cinema</Link> sẽ gửi ngay
               vào điện thoại và hộp mail của bạn.
            </p>

            <p>
               Nếu chưa quyết định sẽ xem phim mới nào, hãy tham khảo các bộ <Link to='/phim-dang-chieu' style={{ fontStyle: "italic" }}>phim hay</Link> trong mục <Link to='/phim-dang-chieu' style={{ fontStyle: "italic" }}>Phim Đang chiếu</Link> cũng như <Link to='/phim-sap-chieu' style={{ fontStyle: "italic" }}>Phim Sắp Chiếu</Link> tại rạp chiếu
               phim bằng cách vào mục <Link to='/binh-luan-phim' style={{ fontStyle: "italic" }}>Bình Luận Phim</Link> ở <Link to='/dien-anh' style={{ fontStyle: "italic" }}>Góc Điện Ảnh</Link> để đọc những bài bình luận chân thật nhất, tham khảo và cân nhắc. Sau đó, quý
               khách hãy đặt vé bằng box Mua Vé Nhanh ngay ở đầu trang để chọn được suất chiếu và chỗ ngồi vừa ý nhất.
            </p>

            <p>
               <Link to='/' style={{ fontWeight: '700' }}>Galaxy Cinema</Link> luôn có những chương trình <Link to='/khuyen-mai' style={{ fontStyle: "italic" }}>khuyến mãi, ưu đãi</Link>, quà tặng vô cùng hấp dẫn
               như giảm giá vé, tặng vé xem phim miễn phí, tặng Combo, tặng quà phim…  dành cho quý khách.
            </p>

            <p>
               Trang web galaxycine.vn còn có mục Góc Điện Ảnh - sở hữu lượng dữ liệu về phim, diễn viên và đạo diễn, giúp quý khách dễ dàng chọn được phim mình yêu thích và nâng
               cao kiến thức về điện ảnh của bản thân. Ngoài ra, vào mỗi tháng, <Link to='/' style={{ fontWeight: '700' }}>Galaxy Cinema</Link> cũng
               giới thiệu các <Link to='/phim-sap-chieu' style={{ fontStyle: "italic" }}>phim sắp chiếu</Link> hot nhất trong mục <Link to='/binh-luan-phim' style={{ fontStyle: "italic" }}>Phim Hay Tháng</Link> để quý khách sớm có
               sự tính toán.
            </p>

            <p>
               Hiện nay, <Link to='/' style={{ fontWeight: '700' }}>Galaxy Cinema</Link> đang ngày càng phát triển hơn nữa với các chương
               trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của
               thế giới và Việt Nam nhanh chóng và sớm nhất.
         </p>
         </Container>
      </AboutShowingGalaxy>
   )
}

export default AboutShowing