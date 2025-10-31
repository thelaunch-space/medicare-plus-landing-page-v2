import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'default' | 'gradient' | 'silver';
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'default',
}) => {
  const backgrounds = {
    default: 'bg-metallic-white',
    gradient: 'bg-metallic-gradient',
    silver: 'bg-metallic-silver',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
