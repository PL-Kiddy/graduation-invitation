export type PageId =
  | 'invitation'
  | 'intro'
  | 'journey'
  | 'graduationday'
  | 'venue'
  | 'campusguide'
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
  { id: 'invitation',   index: 0,  label: 'Thư Mời',     chapterTitle: 'Lời Mời Chính Thức' },
  { id: 'intro',        index: 1,  label: 'Lời Mở Đầu',  chapterTitle: 'Tâm Sự' },
  { id: 'journey',      index: 2,  label: 'Hành Trình',   chapterTitle: 'FPT Years' },
  { id: 'graduationday',index: 3,  label: 'Ngày Lễ',      chapterTitle: 'Graduation Day' },
  { id: 'venue',        index: 4,  label: 'Địa Điểm',     chapterTitle: 'Venue & Map' },
  { id: 'campusguide',  index: 5,  label: 'Sơ Đồ',        chapterTitle: 'Campus Guide' },
  { id: 'memories',     index: 6,  label: 'Kỷ Niệm',      chapterTitle: 'Khoảnh Khắc' },
  { id: 'message',      index: 7,  label: 'Nhắn Gửi',     chapterTitle: 'Tâm Sự Cuối' },
  { id: 'rsvp',         index: 8,  label: 'Xác Nhận',     chapterTitle: 'RSVP' },
  { id: 'final',        index: 9,  label: 'Lời Kết',      chapterTitle: 'Hẹn Gặp Bạn' },
];

export const TOTAL_PAGES = BOOK_PAGES.length;
