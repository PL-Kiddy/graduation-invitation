import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Clock,
  Compass,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  RotateCcw,
  Phone,
  Building2,
  Zap,
  Globe,
  Search,
  CheckCircle2,
  Eye,
  XCircle,
  ArrowRight,
  Award,
} from 'lucide-react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  color?: string;
}

/**
 * Cohesive, luxury-styled icon system for Graduation Invitation.
 * Eliminates childish system emojis and provides razor-sharp, uniform stroke vectors.
 */

export const CapIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor', ...props }) => (
  <GraduationCap size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const CalendarIcon: React.FC<IconProps> = ({ size = 18, className = '', color = 'currentColor', ...props }) => (
  <Calendar size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const MapPinIcon: React.FC<IconProps> = ({ size = 18, className = '', color = 'currentColor', ...props }) => (
  <MapPin size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const ClockIcon: React.FC<IconProps> = ({ size = 18, className = '', color = 'currentColor', ...props }) => (
  <Clock size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const UniversityIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor', ...props }) => (
  <Building2 size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const LightningIcon: React.FC<IconProps> = ({ size = 18, className = '', color = 'currentColor', ...props }) => (
  <Zap size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const CompassIcon: React.FC<IconProps> = ({ size = 18, className = '', color = 'currentColor', ...props }) => (
  <Compass size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const SparklesIcon: React.FC<IconProps> = ({ size = 18, className = '', color = 'currentColor', ...props }) => (
  <Sparkles size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const CheckIcon: React.FC<IconProps> = ({ size = 16, className = '', color = 'currentColor', ...props }) => (
  <Check size={size} strokeWidth={2.2} className={className} color={color} {...props} />
);

export const CheckCircleIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor', ...props }) => (
  <CheckCircle2 size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const CopyIcon: React.FC<IconProps> = ({ size = 16, className = '', color = 'currentColor', ...props }) => (
  <Copy size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ size = 16, className = '', color = 'currentColor', ...props }) => (
  <ExternalLink size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const RefreshIcon: React.FC<IconProps> = ({ size = 16, className = '', color = 'currentColor', ...props }) => (
  <RotateCcw size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const PhoneIcon: React.FC<IconProps> = ({ size = 16, className = '', color = 'currentColor', ...props }) => (
  <Phone size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const GlobeIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor', ...props }) => (
  <Globe size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const SearchIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor', ...props }) => (
  <Search size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size = 16, className = '', color = 'currentColor', ...props }) => (
  <ArrowRight size={size} strokeWidth={2} className={className} color={color} {...props} />
);

export const EyeIcon: React.FC<IconProps> = ({ size = 16, className = '', color = 'currentColor', ...props }) => (
  <Eye size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const XCircleIcon: React.FC<IconProps> = ({ size = 16, className = '', color = 'currentColor', ...props }) => (
  <XCircle size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

export const AwardIcon: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor', ...props }) => (
  <Award size={size} strokeWidth={1.8} className={className} color={color} {...props} />
);

/* -------------------------------------------------------------
 * Clean, Brand-Accurate Vector Icons for Social Contact
 * ------------------------------------------------------------- */

export const FacebookIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const ZaloIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M39.6 19.3c.7-4.1-1.3-8.3-4.9-10.4-4-2.3-9.1-2.2-13.1.2-4.4 2.6-6.8 7.4-6.3 12.4.4 4.5 3.3 8.3 7.3 10.1v5.7l5.2-3.1c1.9.5 3.9.6 5.8.3 5.4-.8 9.6-4.9 10.4-10.3.3-1.6.3-3.3-.4-4.9zm-21.7 4.9c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1h5.8l-5.6-7.8c-.3-.4-.3-1 0-1.4.3-.4.8-.6 1.3-.6h7.9c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1h-5.9l5.6 7.8c.3.4.3 1 0 1.4-.3.4-.8.6-1.3.6h-7.8zm14.6 0c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3z" />
  </svg>
);

export const TikTokIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.28 6.28 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.28 8.28 0 0 0 4.84 1.55V6.85c-.38-.03-.75-.08-1.07-.16z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
