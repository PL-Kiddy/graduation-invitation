# 🎓 TỔNG HỢP NỘI DUNG 11 TRANG THIỆP MỜI TỐT NGHIỆP
**Chủ nhân:** Quách Hùng Phúc Long  
**Trường:** Đại học FPT TP. Hồ Chí Minh  
**Ngày:** 07 · 11 · 2026  

---

## 📑 Bảng tra cứu nhanh 11 trang

| STT | Mã trang | Tên trang / Mục đích | Nội dung trọng tâm | Trạng thái cần sửa |
|:---:|:---|:---|:---|:---|
| **00-A** | `CinematicIntro` | Màn mở đầu điện ảnh | Đếm ngày 07·11·2026, câu hẹn mở màn, tên tân khoa | Hoàn chỉnh |
| **00-B** | `BookCover` | Bìa ngoài cuốn thiệp 3D | Dập nhũ vàng Graduation 2026, nón cử nhân, nút mở thiệp | Hoàn chỉnh |
| **01** | `CoverPage` | Trang bìa trong chính thức | Huy hiệu tốt nghiệp, tên Quách Hùng Phúc Long, ngày tháng | Cần thay ảnh chân dung |
| **02** | `IntroPage` | Lời mở đầu cảm xúc | *"Tôi tốt nghiệp rồi! 🎓"*, 4 năm chạy deadline, cày đồ án | Chờ chỉnh lời tâm sự |
| **03** | `JourneyPage` | Dòng thời gian 4 năm | Timeline FPT 2022 ➔ 2026 (Khai giảng, Capstone, OJT, Lễ tốt nghiệp) | Có thể thêm chi tiết |
| **04** | `InvitationPage` | Thư mời sự kiện chính | Thông tin ngày, giờ, địa điểm + nút Add to Google Calendar | Chờ cập nhật giờ chính thức |
| **05** | `CountdownPage` | Đồng hồ đếm ngược 3D | Bộ đếm Ngày / Giờ / Phút / Giây đến 07/11/2026 | Hoàn chỉnh |
| **06** | `CampusPage` | Khuôn viên trường 360° | Khám phá Campus Q9 360° Portal | Chờ link/ảnh 360 thật |
| **07** | `LocationPage` | Bản đồ & Vị trí | Địa chỉ Campus Q9, nút mở Google Maps, nút sao chép địa chỉ | Hoàn chỉnh |
| **08** | `MemoriesPage` | Kỷ niệm trước ngày ra trường | Lưới 4 khung hình: Ngày đầu, Deadline, Đồng bọn, Và tôi | Cần đưa 4 ảnh kỷ yếu thật |
| **09** | `MessagePage` | Lời nhắn nhủ bạn bè | *"07 · 11, đến nhé?"*, chữ ký Long | Có thể viết thêm tâm sự |
| **10** | `RSVPPage` | Xác nhận tham dự (RSVP) | 3 lựa chọn (Có mặt / Sắp xếp / Tiếc quá) + Form nhập tên | Có thể nối Google Sheet |
| **11** | `FinalPage` | Trang bế mạc & Lời cảm ơn | Lời hẹn ngày tốt nghiệp, nút Xem lại thiệp ↻, nút mở Maps | Hoàn chỉnh |

---

## 🔍 Chi tiết từng trang & Nội dung cụ thể

### 🌟 Màn mở đầu & Bìa sách

#### Màn 00-A: Intro Điện ảnh (`src/components/book/CinematicIntro.tsx`)
* **Chữ hiển thị**:
  * Nhãn đầu trang: `TRƯỜNG ĐẠI HỌC FPT` • `2026`
  * Chữ số xuất hiện: `07 · 11 · 2026` (Nhũ vàng)
  * Lời tựa:
    > *"Có một cái hẹn*  
    > *mình muốn bạn có mặt."*
  * Tên cử nhân: `QUÁCH HÙNG PHÚC LONG`
  * Dòng nhắc: `Chạm bất kỳ đâu để vào thiệp ✕`
* **Hiệu ứng**: Nền sáng ngà voi với quầng nắng vàng dịu, chữ xuất hiện từ mờ sang rõ, tự động chuyển vào bìa sách sau 3.5s hoặc khi chạm màn hình.

---

#### Màn 00-B: Bìa ngoài cuốn thiệp 3D (`src/components/book/BookCover.tsx`)
* **Chữ hiển thị**:
  * Nhãn trên: `OFFICIAL INVITATION`
  * Tiêu đề: `LỄ TỐT NGHIỆP`
  * Chữ lớn dập nhũ: `GRADUATION 2026`
  * Huy hiệu nón cử nhân mạ vàng 3D
  * Tân khoa: `QUÁCH HÙNG PHÚC LONG`
  * Ngày & Nơi: `07 · 11 · 2026` • `Trường Đại học FPT TP. Hồ Chí Minh`
  * Nút mở thiệp: `Chạm để mở thiệp` (Có chấm cam phát sáng)
* **Hiệu ứng 3D**:
  * Cuốn sách nghiêng theo chuột/ngón tay (`3D Pointer Tilt`).
  * Khối độ dày trang sách nhìn thấy ở cạnh phải và đáy.
  * Dải ruy-băng lụa cam FPT vắt qua gáy sách.
  * Khi bấm, bìa thiệp lật mở cong 3D sang trái 160 độ để lộ trang 01 bên dưới.

---

### 📖 Chi tiết 11 trang nội dung

---

#### 📄 Trang 01: Bìa trong chính thức (`src/pages/CoverPage.tsx`)
* **Tiêu đề đầu trang**: `THƯ MỜI CHÍNH THỨC` • `01 / 11`
* **Huy hiệu phụ**: `2026 • FPT UNIVERSITY`
* **Tiêu đề lớn**: `GRADUATION 2026`
* **Khung ảnh chân dung**:
  * Hiện tại: Khung viền góc mạ vàng 3D, icon nón cử nhân, dòng chữ `QUÁCH HÙNG PHÚC LONG` - `KHOÁ 2022 - 2026`.
* **Chữ nổi bật**:
  * `TÂN KHOA`
  * `QUÁCH HÙNG PHÚC LONG`
  * Đường kẻ phân cách nhũ vàng
  * `Trường Đại học FPT TP. Hồ Chí Minh`
  * `07 · 11 · 2026`
* **Dòng hướng dẫn**: `Vuốt để bắt đầu →`
* 🛠️ **Cần chỉnh sửa**:
  - [ ] Thêm file ảnh chân dung áo cử nhân của Long vào `src/assets/images/` để thay vào khung huy hiệu.

---

#### 📄 Trang 02: Lời mở đầu (`src/pages/IntroPage.tsx`)
* **Tiêu đề đầu trang**: `LỜI MỞ ĐẦU • CHƯƠNG I` • `02 / 11`
* **Nội dung cảm xúc**:
  * `Cuối cùng thì...`
  * **`Tôi tốt nghiệp rồi! 🎓`**
* **Khung ghi nhớ 4 năm**:
  * *• Những buổi sáng chạy deadline cuống cuồng kịp điểm danh*
  * *• Những đêm thức trắng cùng đồng bọn cày đồ án Capstone*
  * *• Và vô số lần sửa bug tưởng chừng không bao giờ có hồi kết...*
* **Trích dẫn**:
  > *“Ngày này cuối cùng cũng tới.”*  
  > *Một cột mốc mà mình muốn chia sẻ trọn vẹn nhất cùng những người bạn đặc biệt đã đồng hành, hỗ trợ hoặc dõi theo mình suốt chặng đường qua.*
* **Chữ ký**: `— Quách Hùng Phúc Long` (`ĐH FPT HCM`)
* **Nút bấm**: `TIẾP TỤC HÀNH TRÌNH →`
* 🛠️ **Cần chỉnh sửa**:
  - [ ] Kiểm tra xem bạn có muốn thêm kỷ niệm/biệt danh hài hước nào thời đại học vào không.

---

#### 📄 Trang 03: Hành trình FPT (`src/pages/JourneyPage.tsx`)
* **Tiêu đề đầu trang**: `HÀNH TRÌNH • CHƯƠNG II` • `03 / 11`
* **Tiêu đề lớn**: `MỘT CHÚT VỀ NHỮNG NĂM Ở FPT.`
* **Timeline 4 thẻ**:
  * `2022` — Khởi đầu mới tại Campus Q9 (Chấm xanh dương)
  * `2023` — Đồ án & những đêm trắng cày bug (Chấm cam FPT)
  * `2024 - 2025` — Trải nghiệm On-the-job Training (Chấm xanh lá)
  * `07 · 11 · 2026` — Lễ Tốt Nghiệp Chính Thức (Chấm vàng gold)
* 🛠️ **Cần chỉnh sửa**:
  - [ ] Có thể bổ sung chuyên ngành cụ thể (Kỹ thuật phần mềm, An toàn thông tin, Thiết kế đồ họa...) hoặc tên công ty đã thực tập OJT.

---

#### 📄 Trang 04: Thư mời chi tiết (`src/pages/InvitationPage.tsx`)
* **Tiêu đề đầu trang**: `THƯ MỜI • CHƯƠNG III` • `04 / 11`
* **Chữ lớn**: `Mời bạn đến dự lễ tốt nghiệp của Long.`
* **Đoạn văn**:
  > *"Một ngày khá quan trọng với mình, và chắc chắn sẽ vui hơn rất nhiều nếu hôm đó có sự hiện diện của bạn cùng chung vui và ghi lại những kỷ niệm đẹp."*
* **Khung thông tin**:
  * **NGÀY**: `07 · 11 · 2026`
  * **GIỜ**: `Thời gian: Sẽ cập nhật`
  * **NƠI**: `FPT University HCMC – Campus Q9`
* **Nút bấm hành động**:
  * `Thêm vào lịch 📅`: Bấm là tự mở **Google Calendar** điền sẵn ngày giờ, tên sự kiện của Long.
  * `Xem địa điểm 📍`: Mở nhanh vị trí trường.
* 🛠️ **Cần chỉnh sửa**:
  - [ ] Khi trường công bố ca sáng hay ca chiều (ví dụ: 08:00 hay 13:30), ta sẽ cập nhật vào đây.

---

#### 📄 Trang 05: Đếm ngược (`src/pages/CountdownPage.tsx`)
* **Tiêu đề đầu trang**: `THỜI KHẮC • CHƯƠNG IV` • `05 / 11`
* **Tiêu đề lớn**: `CHỈ CÒN...`
* **4 Khối đếm 3D**:
  * `[ NGÀY ]`  `[ GIỜ ]`  `[ PHÚT ]`  `[ GIÂY ]` (Tự động tính lùi theo đồng hồ máy tính/điện thoại).
* **Lời bình dí dỏm**:
  > *“Cho đến ngày tôi chính thức khép laptop lại để đi nhận bằng.”*
* **Tag**: `Deadline lần này: 07 · 11 · 2026`
* 🛠️ **Cần chỉnh sửa**:
  - [ ] Đã hoàn thiện sẵn thuật toán đếm ngược, chỉ cần xem lại câu chữ nếu muốn đổi phong cách.

---

#### 📄 Trang 06: Không gian Campus 360° (`src/pages/CampusPage.tsx`)
* **Tiêu đề đầu trang**: `KHUÔN VIÊN • CHƯƠNG V` • `06 / 11`
* **Tiêu đề lớn**: `ĐÂY LÀ NƠI MỌI CHUYỆN DIỄN RA.`
* **Thẻ 3D Portal**:
  * Khung xem trước hình ảnh campus với lưới đồ họa thanh lịch.
  * Chữ: `KHÁM PHÁ CAMPUS 360°`
* **Nút bấm**: `Trải nghiệm không gian 360° ✨` (có chế độ đóng/mở góc nhìn, chống xung đột lật trang).
* 🛠️ **Cần chỉnh sửa**:
  - [ ] Nhúng link thực tế ảo của FPT hoặc ảnh 360 tòa nhà trống đồng Campus Q9.

---

#### 📄 Trang 07: Địa điểm & Bản đồ (`src/pages/LocationPage.tsx`)
* **Tiêu đề đầu trang**: `ĐỊA ĐIỂM • CHƯƠNG VI` • `07 / 11`
* **Tiêu đề lớn**: `HẸN BẠN Ở ĐÂY.`
* **Khung địa chỉ**:
  * Icon ghim vị trí cam FPT
  * Trường: `FPT University HCMC – Campus Q9`
  * Chi tiết: `Khu Công nghệ cao, Đường D1, Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh`
* **Nút tương tác**:
  * `Mở Google Maps 🗺️`: Mở thẳng toạ độ trường trên ứng dụng Google Maps của điện thoại.
  * `Sao chép địa chỉ 📋`: Bấm là copy ngay địa chỉ vào clipboard, có hiệu ứng `Đã sao chép ✓`.
* 🛠️ **Cần chỉnh sửa**:
  - [ ] Có thể chèn thêm sơ đồ hội trường / tòa nhà tổ chức lễ nếu có.

---

#### 📄 Trang 08: Khoảnh khắc kỷ niệm (`src/pages/MemoriesPage.tsx`)
* **Tiêu đề đầu trang**: `KHOẢNH KHẮC • CHƯƠNG VII` • `08 / 11`
* **Tiêu đề lớn**: `VÀI KHUNG HÌNH TRƯỚC KHI RA TRƯỜNG.`
* **Lưới ảnh 2x2**:
  * `01`: **Ngày đầu** — *Khai giảng & định hướng*
  * `02`: **Deadline** — *Những đêm sprint cuối*
  * `03`: **Đồng bọn** — *Team đồ án kiên cường*
  * `04`: **Và tôi** — *Hành trình trưởng thành*
* 🛠️ **Cần chỉnh sửa**:
  - [ ] Chuẩn bị 4 bức ảnh đẹp thời sinh viên của bạn để đưa vào 4 khung này.

---

#### 📄 Trang 09: Lời tâm sự (`src/pages/MessagePage.tsx`)
* **Tiêu đề đầu trang**: `TÂM SỰ • CHƯƠNG VIII` • `09 / 11`
* **Nội dung lắng đọng**:
  > *“Có những ngày, chỉ cần đúng người có mặt là tự nhiên trở nên đáng nhớ hơn rất nhiều.”*
* **Chữ nhấn mạnh**: `Vậy nên...`
* **Tiêu đề cam lớn**: `07 · 11, ĐẾN NHÉ?`
* **Chữ ký**: `— Long`
* 🛠️ **Cần chỉnh sửa**:
  - [ ] Viết thêm lời nhắn gửi riêng đến bạn bè thân thiết nếu muốn.

---

#### 📄 Trang 10: Xác nhận tham dự (RSVP) (`src/pages/RSVPPage.tsx`)
* **Tiêu đề đầu trang**: `XÁC NHẬN • CHƯƠNG IX` • `10 / 11`
* **Tiêu đề lớn**: `HÔM ĐÓ BẠN ĐẾN CHỨ?`
* **3 Lựa chọn phản hồi**:
  1. `Có mặt! 🎓` ➔ Thông báo: *"Quá tuyệt. Hẹn gặp bạn hôm đó! 🤝"*
  2. `Để mình sắp xếp 👀` ➔ Thông báo: *"Okay, mình giữ chỗ trong lòng trước 😌"*
  3. `Tiếc là không được rồi 🥲` ➔ Thông báo: *"Không sao, hẹn bạn ở một dịp khác nhé."*
* **Ô nhập liệu**: `Tên của bạn` (Ví dụ: Minh, Khoa, Bạn cấp 3...)
* **Nút bấm**: `Gửi phản hồi ✨`
* 🛠️ **Cần chỉnh sửa**:
  - [ ] Hiện tại lưu tương tác tại chỗ trên web. Nếu muốn thu thập tên thật về máy của Long, có thể nối với Google Sheets webhook (hoàn toàn miễn phí không cần backend).

---

#### 📄 Trang 11: Lời kết (`src/pages/FinalPage.tsx`)
* **Tiêu đề đầu trang**: `LỜI KẾT • HOÀN TẤT` • `11 / 11`
* **Thông tin**: `07 · 11 · 2026` • `QUÁCH HÙNG PHÚC LONG` • `Trường Đại học FPT TP. Hồ Chí Minh`
* **Câu chào kết**:
  > *“Hẹn gặp bạn ở ngày tôi tốt nghiệp.”*  
  > *— Long*
* **Nút tương tác**:
  * `Xem lại thiệp ↻`: Đóng sách và quay lại bìa ngoài để xem lại từ đầu.
  * `Xem đường đi 📍`: Mở Google Maps chỉ đường.
* **Chân trang**: `Trân trọng cảm ơn sự hiện diện của bạn ✨`
* 🛠️ **Cần chỉnh sửa**:
  - [ ] Hoàn chỉnh, có thể bổ sung thêm nút "Chia sẻ thiệp" qua Zalo/Facebook nếu muốn.
