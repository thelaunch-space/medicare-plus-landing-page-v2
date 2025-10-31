import React from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Button.tsx
 * Purpose: Reusable, sleek, single-line button component used across the site.
 * - Slim paddings and rounded corners for premium look
 * - Consistent heights and typography to avoid "fat" buttons
 * - Variants: primary and secondary
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
  // Sleek, single-line button baseline
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm tracking-tight transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-accent-blue text-white hover:bg-blue-700',
    secondary: 'bg-white border border-primary/15 text-primary hover:border-accent-blue hover:text-accent-blue',
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
