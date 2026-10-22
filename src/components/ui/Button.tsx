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
      'bg-gradient-to-r from-[#F27024] to-[#E05C10] text-white border border-[#D9530A] hover:brightness-105 shadow-md shadow-[#F27024]/20 font-semibold',
    secondary:
      'bg-[#FFFFFF] text-[#2C241C] border border-[#E5DC CE] hover:bg-[#FAF6EE] shadow-xs font-medium',
    ghost:
      'bg-transparent text-[#6A5E50] hover:text-[#1F1C18] hover:bg-black/5 font-medium',
    foil:
      'bg-gradient-to-r from-[#D4AF37] via-[#F3DE97] to-[#C59B27] text-[#1F1C18] border border-[#B88A22] hover:brightness-105 shadow-md font-bold',
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
