import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-techno-purple disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-techno-purple text-white hover:bg-techno-purple-light shadow-techno-sm hover:shadow-techno-md',
    secondary: 'bg-techno-light text-white hover:bg-techno-light/80 shadow-techno-sm hover:shadow-techno-md',
    outline: 'border-2 border-techno-purple text-techno-purple hover:bg-techno-purple/10',
    ghost: 'text-techno-purple hover:bg-techno-purple/10',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link
        to={href}
        className={buttonClasses}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}