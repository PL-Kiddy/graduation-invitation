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
  timeNote: string;   // display string
  timeStart: string;  // '06:00'
  timeEnd: string;    // '18:00'
  classYear: string;
  panorama360Url: string;
  googleMapsUrl: string;
  calendarUrl: string;
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
  timeNote: "06:00 – 18:00",
  timeStart: "06:00",
  timeEnd: "18:00",
  classYear: "CLASS OF 2026",
  panorama360Url: "https://viewdaihoc.fpt.edu.vn/fpt-ho-chi-minh/",
  googleMapsUrl: "https://maps.app.goo.gl/rFv6JMXzwRuaM9oV7",
  // Google Calendar: 06:00–18:00 ICT = 23:00 prev day UTC – 11:00 UTC
  calendarUrl: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Lễ Tốt Nghiệp — Quách Hùng Phúc Long')}&dates=20261106T230000Z/20261107T110000Z&details=${encodeURIComponent('Lễ tốt nghiệp của Quách Hùng Phúc Long tại Trường Đại học FPT TP.HCM (06:00–18:00 giờ Việt Nam)')}&location=${encodeURIComponent('Đường D1, Khu Công Nghệ Cao, P. Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh')}`,
};
