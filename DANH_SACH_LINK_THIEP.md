# 💌 DANH SÁCH LINK THIỆP MỜI (100% KHÔNG DẤU — KHÔNG LO LỖI LINK)

> **Link gốc deploy:** `https://graduation-invitation-sage-sigma.vercel.app/`  
> *(Tất cả link đều dùng tiếng Anh / không dấu sạch đẹp 100%, khi người nhận mở ra web sẽ tự động chuyển thành **tiếng Việt có dấu trang trọng**!)*

---

## 🎯 1. Danh sách link chính thức cho 3 người bạn

| Người nhận | Link gửi Zalo / Messenger (100% không dấu sạch đẹp) | Tên hiển thị trên thiệp |
|:---|:---|:---:|
| **Bạn Thịnh** | `https://graduation-invitation-sage-sigma.vercel.app/?to=ban-thinh` | **Bạn Thịnh** |
| **Bạn Thư** | `https://graduation-invitation-sage-sigma.vercel.app/?to=ban-thu` | **Bạn Thư** |
| **Bạn Trúc Anh** | `https://graduation-invitation-sage-sigma.vercel.app/?to=ban-truc-anh` | **Bạn Trúc Anh** |

*(Bạn cũng có thể dùng link ngắn hơn: `?to=thinh`, `?to=thu`, `?to=trucanh` đều ra chuẩn tên có dấu)*.

---

## 🧪 2. Link test trực tiếp trên Localhost (Máy tính của bạn)

| Người nhận | Link test Localhost |
|:---|:---|
| 👦 **Bạn Thịnh** | [http://localhost:5174/?to=ban-thinh](http://localhost:5174/?to=ban-thinh) *(hoặc cổng 5173: [http://localhost:5173/?to=ban-thinh](http://localhost:5173/?to=ban-thinh))* |
| 👧 **Bạn Thư** | [http://localhost:5174/?to=ban-thu](http://localhost:5174/?to=ban-thu) *(hoặc cổng 5173: [http://localhost:5173/?to=ban-thu](http://localhost:5173/?to=ban-thu))* |
| 👧 **Bạn Trúc Anh** | [http://localhost:5174/?to=ban-truc-anh](http://localhost:5174/?to=ban-truc-anh) *(hoặc cổng 5173: [http://localhost:5173/?to=ban-truc-anh](http://localhost:5173/?to=ban-truc-anh))* |
| 🌐 **Link chung (không tên)** | [http://localhost:5174/](http://localhost:5174/) |

---

## 🌐 3. Link chung (Đăng Story / Facebook / Nhóm chat)

Khi đăng lên trang cá nhân hoặc gửi vào group chat không kèm tên ai:
* **Link:** `https://graduation-invitation-sage-sigma.vercel.app/`
* **Hiển thị trên Trang 1:** Tự động hiển thị câu mặc định:  
  *"Trân trọng kính mời dự lễ tốt nghiệp của Long"*  
  *(và "...nếu hôm đó có sự hiện diện của bạn.")*

---

## 🛠️ 4. Cách thêm tên mới vào danh sách trong tương lai

Trong file [`src/hooks/useGuestName.ts`](file:///d:/2.IT-FPT-EDU/3.Codeletotnghiep/graduation-invitation/src/hooks/useGuestName.ts), bạn chỉ cần thêm 1 dòng vào bảng từ điển `GUEST_NAME_MAP`:
```ts
'ban-hoang': 'Bạn Hoàng',
'anh-khoa': 'Anh Khoa',
'chi-lan': 'Chị Lan',
```
Sau đó gửi link: `https://.../?to=ban-hoang` là thiệp sẽ tự động hiện **Bạn Hoàng** cực kỳ sang trọng!
