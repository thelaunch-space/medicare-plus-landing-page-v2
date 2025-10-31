import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'teal' | 'elevated';
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  hover = true,
  onClick,
}) => {
  const baseStyles = 'rounded-2xl p-8 transition-all duration-300';

  const variants = {
    default: 'bg-white shadow-soft border border-gray-100',
    teal: 'bg-gradient-to-br from-blue-50 to-purple-50 shadow-soft border border-blue-100',
    elevated: 'bg-white shadow-soft-lg border border-gray-100',
  };

  const hoverStyles = hover ? 'hover:shadow-soft-lg hover:-translate-y-0.5 hover:border-[#1C4E80]/20' : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
