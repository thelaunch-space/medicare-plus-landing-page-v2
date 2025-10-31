import React from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Button.tsx
 * Purpose: Reusable CTA buttons styled for premium medical brand.
 * - Primary: warm gold with soft shadow
 * - Secondary: white with clinical-blue outline and hover fill
 * - Fixed height (48px) and generous radius for consistency
 */

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  // Consistent height, radius, and motion
  const baseStyles = 'inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-semibold text-[15px] tracking-tight transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'text-white shadow-[0_8px_24px_rgba(200,159,101,0.25)] bg-[#C89F65] hover:bg-[#B1814D]',
    secondary:
      'bg-white text-[#1C4E80] border-[1.5px] border-[#1C4E80] hover:bg-[#F2F6F8]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};
