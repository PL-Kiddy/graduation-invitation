export interface GraduateInfo {
  graduateName: string;
  formalName: string;
  firstName: string;
  lastName: string;
  university: string;
  universityShort: string;
  graduationDate: string; // ISO date '2026-11-07'
  displayDate: string; // '07 · 11 · 2026'
  displayDateWords: string; // '07 Tháng 11 Năm 2026'
  campus: string;
  city: string;
  timeNote: string;
  classYear: string;
}

export const graduation: GraduateInfo = {
  graduateName: "Quách Hùng Phúc Long",
  formalName: "QUÁCH HÙNG PHÚC LONG",
  firstName: "Long",
  lastName: "Quách Hùng Phúc",
  university: "Trường Đại học FPT TP. Hồ Chí Minh",
  universityShort: "Đại học FPT TP.HCM",
  graduationDate: "2026-11-07",
  displayDate: "07 · 11 · 2026",
  displayDateWords: "Ngày 07 Tháng 11 Năm 2026",
  campus: "FPT University HCMC – Campus Q9",
  city: "TP. Hồ Chí Minh",
  timeNote: "Thời gian: Sẽ cập nhật",
  classYear: "CLASS OF 2026",
};
