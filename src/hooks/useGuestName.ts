import { useState, useEffect } from 'react';

/**
 * Mapping dictionary: Chuyển đổi mã không dấu (slug) thành tên tiếng Việt có dấu chuẩn đẹp.
 * Giúp link gửi qua Zalo/Facebook luôn sạch 100% không bị lỗi font hay ký tự lạ!
 */
export const GUEST_NAME_MAP: Record<string, string> = {
  // 1. Bạn Thịnh
  'thinh': 'Bạn Thịnh',
  'ban-thinh': 'Bạn Thịnh',
  'ban_thinh': 'Bạn Thịnh',
  'ban thinh': 'Bạn Thịnh',
  'banthinh': 'Bạn Thịnh',

  // 2. Bạn Thư
  'thu': 'Bạn Thư',
  'ban-thu': 'Bạn Thư',
  'ban_thu': 'Bạn Thư',
  'ban thu': 'Bạn Thư',
  'banthu': 'Bạn Thư',

  // 3. Bạn Trúc Anh
  'trucanh': 'Bạn Trúc Anh',
  'truc-anh': 'Bạn Trúc Anh',
  'truc_anh': 'Bạn Trúc Anh',
  'ban-truc-anh': 'Bạn Trúc Anh',
  'ban_truc_anh': 'Bạn Trúc Anh',
  'ban truc anh': 'Bạn Trúc Anh',
  'bantrucanh': 'Bạn Trúc Anh',
};

/**
 * Custom hook to extract guest name from URL query parameters (?to=... or ?name=...)
 * Supports clean ASCII slugs (e.g. ?to=ban-thinh) mapped to Vietnamese accented names.
 */
export function useGuestName(): string {
  const [guestName, setGuestName] = useState<string>('');

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const rawParam = params.get('to') || params.get('name') || params.get('u');

      if (rawParam && rawParam.trim()) {
        const decoded = decodeURIComponent(rawParam.trim());
        const lookupKey = decoded.toLowerCase().replace(/\+/g, ' ');

        // Check dictionary mapping first, otherwise fallback to raw input
        const resolvedName = GUEST_NAME_MAP[lookupKey] || decoded;

        setGuestName(resolvedName);
        sessionStorage.setItem('guest_name', resolvedName);
      } else {
        const cached = sessionStorage.getItem('guest_name');
        if (cached) {
          setGuestName(cached);
        }
      }
    } catch {
      // Ignore storage errors in incognito or restricted webviews
    }
  }, []);

  return guestName;
}

