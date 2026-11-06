export type PageId =
  | 'invitation'
  | 'graduationday'
  | 'venue'
  | 'campusguide'
  | 'rsvp'
  | 'memories'
  | 'message'
  | 'final';

export interface PageDefinition {
  id: PageId;
  index: number;
  label: string;
  chapterTitle?: string;
}

export const BOOK_PAGES: PageDefinition[] = [
  { id: 'invitation',    index: 0, label: 'Thư Mời',      chapterTitle: 'Thư Mời Tham Gia' },
  { id: 'graduationday', index: 1, label: 'Thời Gian',    chapterTitle: 'Thời Gian & Countdown' },
  { id: 'venue',         index: 2, label: 'Địa Điểm',     chapterTitle: 'Địa Điểm & Bản Đồ' },
  { id: 'campusguide',   index: 3, label: 'Sơ Đồ',        chapterTitle: 'Sơ Đồ Campus' },
  { id: 'rsvp',          index: 4, label: 'Xác Nhận',     chapterTitle: 'Xác Nhận Tham Dự' },
  { id: 'memories',      index: 5, label: 'Kỷ Niệm',      chapterTitle: 'Khung Hình Kỷ Niệm' },
  { id: 'message',       index: 6, label: 'Nhắn Gửi',     chapterTitle: 'Lời Nhắn Riêng' },
  { id: 'final',         index: 7, label: 'Lời Kết',      chapterTitle: 'Lời Kết & Tri Ân' },
];

export const TOTAL_PAGES = BOOK_PAGES.length;
