import { useState, useEffect } from 'react';

export interface GuestConfig {
  name: string;
  pronoun: 'tôi' | 'em' | 'anh';
}

/**
 * Mapping dictionary: Chuyển đổi mã không dấu (slug) thành tên tiếng Việt có dấu chuẩn đẹp và ngôi xưng hô phù hợp.
 * Giúp link gửi qua Zalo/Facebook luôn sạch 100% không bị lỗi font hay ký tự lạ!
 */
export const GUEST_CONFIG_MAP: Record<string, GuestConfig> = {
  // 1. Bạn Thịnh
  'thinh': { name: 'Bạn Thịnh', pronoun: 'tôi' },
  'ban-thinh': { name: 'Bạn Thịnh', pronoun: 'tôi' },
  'ban_thinh': { name: 'Bạn Thịnh', pronoun: 'tôi' },
  'banthinh': { name: 'Bạn Thịnh', pronoun: 'tôi' },

  // 2. Bạn Trúc Anh
  'trucanh': { name: 'Bạn Trúc Anh', pronoun: 'tôi' },
  'truc-anh': { name: 'Bạn Trúc Anh', pronoun: 'tôi' },
  'truc_anh': { name: 'Bạn Trúc Anh', pronoun: 'tôi' },
  'ban-truc-anh': { name: 'Bạn Trúc Anh', pronoun: 'tôi' },
  'ban_truc_anh': { name: 'Bạn Trúc Anh', pronoun: 'tôi' },
  'bantrucanh': { name: 'Bạn Trúc Anh', pronoun: 'tôi' },

  // 3. Bạn Thư
  'thu': { name: 'Bạn Thư', pronoun: 'tôi' },
  'ban-thu': { name: 'Bạn Thư', pronoun: 'tôi' },
  'ban_thu': { name: 'Bạn Thư', pronoun: 'tôi' },
  'banthu': { name: 'Bạn Thư', pronoun: 'tôi' },

  // 4. Bạn Trinh
  'trinh': { name: 'Bạn Trinh', pronoun: 'tôi' },
  'ban-trinh': { name: 'Bạn Trinh', pronoun: 'tôi' },
  'ban_trinh': { name: 'Bạn Trinh', pronoun: 'tôi' },
  'bantrinh': { name: 'Bạn Trinh', pronoun: 'tôi' },

  // 5. Bạn Đạt
  'dat': { name: 'Bạn Đạt', pronoun: 'tôi' },
  'ban-dat': { name: 'Bạn Đạt', pronoun: 'tôi' },
  'ban_dat': { name: 'Bạn Đạt', pronoun: 'tôi' },
  'bandat': { name: 'Bạn Đạt', pronoun: 'tôi' },

  // 6. Bạn Thành
  'thanh': { name: 'Bạn Thành', pronoun: 'tôi' },
  'ban-thanh': { name: 'Bạn Thành', pronoun: 'tôi' },
  'ban_thanh': { name: 'Bạn Thành', pronoun: 'tôi' },
  'banthanh': { name: 'Bạn Thành', pronoun: 'tôi' },

  // 7. Chị Phương (Chun)
  'phuong': { name: 'Chị Phương (Chun)', pronoun: 'em' },
  'chi-phuong': { name: 'Chị Phương (Chun)', pronoun: 'em' },
  'chunu': { name: 'Chị Phương (Chun)', pronoun: 'em' },
  'chun': { name: 'Chị Phương (Chun)', pronoun: 'em' },
  'chi-phuong-chun': { name: 'Chị Phương (Chun)', pronoun: 'em' },
  'chiphuong': { name: 'Chị Phương (Chun)', pronoun: 'em' },

  // 8. Chị Huyền
  'huyen': { name: 'Chị Huyền', pronoun: 'em' },
  'chi-huyen': { name: 'Chị Huyền', pronoun: 'em' },
  'chihuyen': { name: 'Chị Huyền', pronoun: 'em' },

  // 9. Em Linh
  'linh': { name: 'Em Linh', pronoun: 'anh' },
  'em-linh': { name: 'Em Linh', pronoun: 'anh' },
  'emlinh': { name: 'Em Linh', pronoun: 'anh' },

  // 10. Anh 2 và Chị 2 và Bé Na
  'anh-2': { name: 'Anh 2 và Chị 2 và Bé Na', pronoun: 'em' },
  'anh2': { name: 'Anh 2 và Chị 2 và Bé Na', pronoun: 'em' },
  'anh-hai': { name: 'Anh 2 và Chị 2 và Bé Na', pronoun: 'em' },
  'anhhai': { name: 'Anh 2 và Chị 2 và Bé Na', pronoun: 'em' },
  'gia-dinh-anh-hai': { name: 'Anh 2 và Chị 2 và Bé Na', pronoun: 'em' },
  'anh-2-chi-2-be-na': { name: 'Anh 2 và Chị 2 và Bé Na', pronoun: 'em' },
  'anh2-chi2-bena': { name: 'Anh 2 và Chị 2 và Bé Na', pronoun: 'em' },

  // 11. Vợ chồng bạn Phát
  'phat': { name: 'Vợ chồng bạn Phát', pronoun: 'tôi' },
  'ban-phat': { name: 'Vợ chồng bạn Phát', pronoun: 'tôi' },
  'vo-chong-ban-phat': { name: 'Vợ chồng bạn Phát', pronoun: 'tôi' },
  'vo-chong-phat': { name: 'Vợ chồng bạn Phát', pronoun: 'tôi' },
  'vochongphat': { name: 'Vợ chồng bạn Phát', pronoun: 'tôi' },
};

/**
 * Tự động xác định xưng hô dựa vào tên nếu khách không nằm trong danh sách định sẵn
 */
export function inferPronoun(name: string): 'tôi' | 'em' | 'anh' {
  const trimmed = name.trim().toLowerCase();
  if (
    trimmed.startsWith('anh') ||
    trimmed.startsWith('chị') ||
    trimmed.startsWith('chi') ||
    trimmed.startsWith('cô') ||
    trimmed.startsWith('chú') ||
    trimmed.startsWith('bác')
  ) {
    return 'em';
  }
  if (trimmed.startsWith('em')) {
    return 'anh';
  }
  return 'tôi';
}

export interface GuestInfo {
  guestName: string;
  pronoun: 'tôi' | 'em' | 'anh';
}

/**
 * Custom hook to extract guest info from URL query parameters (?to=... or ?name=...)
 */
export function useGuestInfo(): GuestInfo {
  const [info, setInfo] = useState<GuestInfo>({ guestName: '', pronoun: 'tôi' });

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const rawParam = params.get('to') || params.get('name') || params.get('u');

      if (rawParam && rawParam.trim()) {
        const decoded = decodeURIComponent(rawParam.trim());
        const lookupKey = decoded.toLowerCase().replace(/\+/g, ' ');

        const config = GUEST_CONFIG_MAP[lookupKey];
        if (config) {
          const resolved: GuestInfo = { guestName: config.name, pronoun: config.pronoun };
          setInfo(resolved);
          sessionStorage.setItem('guest_name', config.name);
          sessionStorage.setItem('guest_pronoun', config.pronoun);
        } else {
          const inferred = inferPronoun(decoded);
          const customInfo: GuestInfo = { guestName: decoded, pronoun: inferred };
          setInfo(customInfo);
          sessionStorage.setItem('guest_name', decoded);
          sessionStorage.setItem('guest_pronoun', inferred);
        }
      } else {
        const cachedName = sessionStorage.getItem('guest_name');
        const cachedPronoun = (sessionStorage.getItem('guest_pronoun') as 'tôi' | 'em' | 'anh') || 'tôi';
        if (cachedName) {
          setInfo({
            guestName: cachedName,
            pronoun: cachedPronoun || inferPronoun(cachedName),
          });
        }
      }
    } catch {
      // Ignore storage errors in incognito or restricted webviews
    }
  }, []);

  return info;
}

/**
 * Backward compatibility hook
 */
export function useGuestName(): string {
  const { guestName } = useGuestInfo();
  return guestName;
}
