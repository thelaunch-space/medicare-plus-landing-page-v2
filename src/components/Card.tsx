import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'teal' | 'elevated';
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  hover = true,
}) => {
  const baseStyles = 'rounded-2xl p-8 transition-all duration-300';

  const variants = {
    default: 'bg-white shadow-soft',
    teal: 'bg-gradient-to-br from-cyan-50 to-teal-50 shadow-soft',
    elevated: 'bg-white shadow-soft-lg',
  };

  const hoverStyles = hover ? 'hover:shadow-soft-lg hover:-translate-y-1' : '';

  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
