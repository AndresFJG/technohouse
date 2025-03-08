import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'techno' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  glow = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-techno-purple text-white hover:bg-techno-purple-light active:bg-techno-purple-dark': variant === 'primary',
          'bg-techno-light text-white hover:bg-gray-800': variant === 'secondary',
          'border-2 border-techno-purple text-techno-purple hover:bg-techno-purple/10': variant === 'outline',
          'bg-techno-dark border border-techno-purple text-white shadow-techno-sm hover:shadow-techno': variant === 'techno',
          'bg-transparent text-white hover:bg-techno-purple/10': variant === 'subtle',
          'h-9 px-4 text-sm': size === 'sm',
          'h-10 px-6 text-base': size === 'md',
          'h-12 px-8 text-lg': size === 'lg',
          'pulse-glow': glow,
        },
        className
      )}
      {...props}
    />
  );
}