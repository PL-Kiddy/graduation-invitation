import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { APP_CONFIG } from '@/lib/constants';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'foil';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 min-h-[38px] gap-1.5',
    md: 'text-sm px-5 py-2.5 min-h-[44px] gap-2',
    lg: 'text-base px-6 py-3 min-h-[48px] gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#181614] text-[#FAF7F0] border border-[#332E29] hover:border-[#C5A059] shadow-sm',
    secondary:
      'bg-[#EFE9DD] text-[#1E1A17] border border-[#D5CDBD] hover:bg-[#E7E0D2]',
    ghost:
      'bg-transparent text-[#554E45] hover:text-[#181614] hover:bg-black/5',
    foil:
      'bg-gradient-to-r from-[#221F1B] via-[#2F2922] to-[#221F1B] text-[#EED7A1] border border-[#C5A059]/40 hover:border-[#C5A059] shadow-md',
  }[variant];

  return (
    <motion.button
      {...props}
      {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
      whileTap={{ scale: disabled ? 1 : 0.96 }}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      disabled={disabled}
      className={`inline-flex items-center justify-center font-medium rounded-full tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${sizeClasses} ${variantClasses} ${className}`}
    >
      <span>{children}</span>
      {icon && <span className="inline-flex transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </motion.button>
  );
};
