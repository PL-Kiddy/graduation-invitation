export type PageId =
  | 'cover'
  | 'intro'
  | 'journey'
  | 'invitation'
  | 'countdown'
  | 'campus'
  | 'location'
  | 'memories'
  | 'message'
  | 'rsvp'
  | 'final';

export interface PageDefinition {
  id: PageId;
  index: number;
  label: string;
  chapterTitle?: string;
}

export const BOOK_PAGES: PageDefinition[] = [
  { id: 'cover', index: 0, label: 'Trang Bìa' },
  { id: 'intro', index: 1, label: 'Lời Mở Đầu', chapterTitle: 'Cuối cùng thì...' },
  { id: 'journey', index: 2, label: 'Hành Trình', chapterTitle: 'FPT Years' },
  { id: 'invitation', index: 3, label: 'Thư Mời', chapterTitle: 'Lời Mời' },
  { id: 'countdown', index: 4, label: 'Đếm Ngược', chapterTitle: 'Thời Khắc' },
  { id: 'campus', index: 5, label: 'Khuôn Viên', chapterTitle: 'Campus 360°' },
  { id: 'location', index: 6, label: 'Địa Điểm', chapterTitle: 'Bản Đồ' },
  { id: 'memories', index: 7, label: 'Kỷ Niệm', chapterTitle: 'Khoảnh Khắc' },
  { id: 'message', index: 8, label: 'Nhắn Gửi', chapterTitle: 'Tâm Sự' },
  { id: 'rsvp', index: 9, label: 'Xác Nhận', chapterTitle: 'Tham Dự' },
  { id: 'final', index: 10, label: 'Lời Kết', chapterTitle: 'Hẹn Gặp Bạn' },
];

export const TOTAL_PAGES = BOOK_PAGES.length;
