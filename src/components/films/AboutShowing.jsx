

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { primary, black } from '../colors/colors'

const AboutShowingGalaxy = styled.div`
   h3{
      color: rgb(67, 70, 75);
      font-weight: 450;
      font-size: 20px;
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
      font-size: 15px;
      line-height: 25px;
      letter-spacing: 0.2px;
      a{
         transition: all 0.2s ease-in;
         font-weight: 500;
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
            Tạm biệt mùa lễ tình yêu với những bộ phim mãn nhãn. Tháng 03.2020 tiếp tục mửo ra cho các tín đồ điện ảnh thêm nhiều sản phẩm
            với đa dạng thể loại từ siêu anh hùng, hành động, tình cảm, hoạt hình,... Một bữa tiệc đầy màu sắc đảm bảo sẽ đáp ứng đủ mọi trải
            nghiệm cho dân mê phim, đem tới cảm giác "Phim như sống, sống như phim" tại thánh đường điện ảnh <Link to='/'>Galaxy Cinema</Link>
         </p>

         <p>
            Trên tinh thần tôn vinh phái đẹp với ngày Quốc Tế Phụ Nữ, bộ phim hài - tình cảm <Link to='/'>Nắng 3: Lời Hứa Của Cha</Link> chắc chắn
            sẽ là lựa chọn ý nghĩa và cũng đày đáng yêu.
         </p>

         <p>
            Chuyện phim xoay quanh cuộc sống của bà mẹ đơn thân Quế Phương(Khả Như) và cô con gái tên lỉnh Hồng Ân(bé Ngân Chi). Một ngày đẹp
            trời, nhân vật Sơn(Kiều Minh Tuấn) xuất hiện, từ đây mối quan hệ "oan gia" giữa anh và Quế Phương dường như hứa hẹn sẽ đem đến nhiều
            tình huống hài hước, dở khóc dở cười. Điều đáng nói là, liệu Sơn với bé Hồng Ân có liên quan thế nào, ba ruọt của Hồng Ân là ai?
         </p>

         <p>
            Đây là lần đầu tiên Kiều Minh Tuấn hợp tác cùng Khả Như trong một dự án điện ảnh, thông qua trailer có vẻ cả hai không gặp quá nhiều khó khăn
            khi có những mà tung hứng khá hợp rơ. Trong hai phần phim trước, Kiều Minh Tuấn từng tham gia với vai trò nhỏ, đảm nhận phần gây hài. Lần này, nhân
            vật của anh được mô tả có chiều sau hơn, đòi hỏi diễn xuất tâm lý tinh tế.
         </p>

         <p>
            Sự thành công của phần một và hai giúp cho Nắng 3 là bộ phim được mong đợi nhất, cùng kì vọng sẽ đem đến cho khán giả một câu chuyện
            đầy lôi cuốn, giàu cảm xúc.
         </p>

         <p>
            <Link to='/'>Nắng 3: Lời Hứa Của Cha</Link> được khời chiếu vào ngày 06.03.2020 tại <Link to='/'>Galaxy Cinema</Link>
         </p>

         <p>
            <Link to='/'>Onward: Truy Tìm Phép Thuật</Link> là bộ phim hoạt hình mới nhất của hãng Pixar được ra mắt trong tháng 03.
         </p>

         <p>
            Thay vì sản xuất những bộ phim hoạt hình được chuyển thể, hoặc các phần phim tiếp theo dụa trên cốt truyện gốc, Onward được phát triển dựa trên
            cốt truyện gốc, Onward có ý tưởng mới lạ hoàn toàn. Dan Scanlon - đạo diễn của phim đã xây dựng một thế giới giả tưởng, tjai đay những loài
            như yêu tinh, kỳ lân và rồng cùng tồn tại. Các nhân vật chung sống với nhau trong những tòa nhà cao tần hiện đại, lái xe hơi,
            giải trí bằng nhạc rock.
         </p>

         <p>
            Nội dung chính của phim nói về hai anh em yêu tinh trên cuộc hành trình khám phá thế giới phép thuật bên ngoài, đồng thời truy tìm
            và giải cứu cha mình, đem ông trở về nhà. Góp giọng lồng tiến còn có hai chiến binh từ vũ trụ điện ảnh Marvel là "thánh lầy" Chris Pratt
            cùng "nhện nhọ" Tom Holland.
         </p>

         <p>
            Liệu chuyến đi của họ sẽ như thế nào? Câu trả lời nằm trong <Link to='/'>Onward: Truy Tìm Phép Thuật</Link>, ra mắt tại các rạp chiếu
            phim từ ngày 06.03.2020.
         </p>

         <p>
            Ra đời từ năm 1992, <Link to='/'>Bloodshot</Link>(tên thật là Ray Garrison) là siêu anh hùng thuộc vũ trụ điện ảnh Valiants Comics sẽ
            là cái tên tiếp theo ghóp mặt và mở đường cho dòng phim siêu anh hùng đến từ một vũ trụ mới.
         </p>

         <p>
            Nếu Disney có Marvel. Warner Bros là DC thì giờ đây ông lớn Sonny cũng chính thức bước vào đường đua với cuộc chiến làm phim siêu anh hùng.
            Tác phẩm đầu tiên ra mắt sẽ là <Link to='/'>Bloodshot</Link> thuộc Valiants Comics. Quân nhân Ray Garrison đang có cuộc sống hạnh
            phúc bên vợ mình thì đột nhiên cả hai bị ám sát, người vợ không may mắn và mất mạng. Ray được chọn để các nhà khoa học thực hiện
            một chương trình thí nghiệm mới. Họ đã cấy chíp điện tử vào người anh, từ đáy Ray có một thể lực đáng kinh ngạc cùng nguồn sức mạnh
            dồi dào. Sau khi  đổi tên thành Bloodshot, người chiến binh bắt đầu cuộc trả thù đãm máu.
         </p>

         <p>
            Có sự góp mặt của "tay đua" Vin Diesel trong vai chính, bộ phim đang là tâm điêm khi lần đầu tiên chàng Dom từ bỏ vô-lăng chuyển sang làm
            một hình ảnh mới lạ hơn, gây thích thú cho người hâm mộ.
         </p>

         <p>
            <Link to='/'>Bloodshot</Link> dự kiến khởi chiếu từ ngày 13.03.2020.
         </p>

         <p>
            Những con quái vật ngoài hành tinh đén Trái Đất, sẵn sàng xóa sổ loài người chỉ với một tiếng đồng hồ nhỏ, không chỉ gây ám ảnh kinh hoàng
            mà còn là mối lo liệu sự sinh tồn và cuộc sống nhân loại sẽ ra sao khi rơi vào hậu tận thế.
         </p>

         <p>
            Các "mọt phim" đã đoán đúng rồi đấy, tuyệt phẩm kinh dị A Quite Place chính thức quay trở lại và tiếp tục gieo rắc nỗi sợ về những sự
            tàn bạo của sinh vật ngoài hành tinh. Nếu ở phần một, người xem được chứng kiến cuộc chiến giữa nhà Abbot và lũ quái vật khát máu vất
            vả ra sao, thì trong phần mới, đạo diễn John Krasinski sẽ đưa khán giả quay về cái ngày định mệnh " Day 1" khi thảm hoại lần đầu
            tiên xuất hiện. Song song đó, liệu đứa bé sơ sinh nhà Abbott chào đời cuối phần đầu tiên sẽ phải đối mặt ra sao khi dường như mối
            đe dọa ngoài kia vẫn còn tồn tại, thậm chí còn nguy hiểm hơn. Lần tái xuất này <Link to='/'>A Quite Place 2</Link> còn giới thiệu
            một số nhân vật mới được đảm nhận bởi Cillian Murphy và Djimon Hounsou. Họ là những người tót hay kẻ xấu? Liệu rằng giờ đây kẻ phản
            diện là loài sinh vật đáng sợ kia hay chính những con người dần biến chất trong thời đại cận diệt vong.
         </p>

         <p>
            <Link to='/'>A Quite Place 2</Link> sẽ ra rạp vào ngày 20.03.2020.
         </p>

         <p>
            Chị Mười Ba là tác phẩm điện ảnh về thể loại xã hội đen và tình nghĩa giang hồ trong thế giới ngầm. Vốn được triển khai từ web-drama
            đã được yêu thích sẵn, phim điện ảnh Chị Mười Ba cũng đã gặt hái thành công nhất định.
         </p>

         <p>
            Phần hai của phim mang tên <Link to='/'>Chị Mười ba: Ngày Sinh Tử</Link> sẽ có cốt chuyện xoay quanh nhân vật Kẽm Gai(Anh Tú), sau
            khi tưởng chừng anh sẽ phát triển tình cảm với Lyn(Châu Bùi) thì bất ngờ Đức Mad(Phát La) xuất hiện. Cái chết đáng ngờ của Đức Mad khiến
            Kẽm Gai trở thành kẻ bị tình nghi số một và phải bỏ trốn. Phần hai ngoại trừ dàn diễn viên cũ thì còn có sự tham gia của Kiều Minh
            Tuấn trong vai phản diện chính, một trùm đại ca máu lạnh và cũng là anh của Đức Mad. Lần này trận đại chiến giữa các băng đảng sẽ khốc
            liệt như thế nào?
         </p>

         <p>
            <Link to='/'>Chị Mười ba: Ngày Sinh Tử</Link> sẽ ra rạp vào ngày 20.03.2020.
         </p>

         <p>
            Sau nhiều lần trì hoãn và khó khăn trong việc thực hiện, cuối cùng tập phim thứ 25 về James Bond cũng sẽ chính thức ra mắt với tên
            <Link to='/'>007: No Time To Die.</Link>
         </p>

         <p>
            Nội dung của phim có vẻ diễn ra nối tiếp sự kiện ở phần phim Spectre, Rami Malek, ngôi sao từng đạt giải Oscar sẽ đóng vai trò bên
            kia chiến tuyến, đối đầu với James Bond. Ngoài ra đây cũng là lần đầu tiền một đạo diễn người Mỹ trực tiếp chỉ đạo về chàng điệp viên hào hoa 007.
         </p>

         <p>
            <Link to='/'>007: No Time To Die.</Link> ra mắt tại các hệ thống rạp trên toàn quốc từ ngày 03.04.2020.
         </p>
      </AboutShowingGalaxy>
   )
}

export default React.memo(AboutShowing);