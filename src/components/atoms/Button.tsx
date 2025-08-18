"use client";  // Marcamos como cliente para habilitar interactividad (onClick)
import { FC } from 'react';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  variant?: 'category' | 'keyword' | 'default';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ label, variant = 'default', href, onClick, className }) => {

  let baseStyles = "inline-block font-medium text-center rounded-full ";
  let variantStyles = "";

  switch (variant) {
    case 'category':
      variantStyles = "bg-blue-600 text-white px-6 py-3 text-lg hover:bg-blue-700 transition-colors";
      variantStyles += " w-full sm:w-auto";
      break;
    case 'keyword':
      variantStyles = "bg-gray-300 text-gray-800 px-3 py-1 text-sm hover:bg-gray-400";
      break;
    default:
      variantStyles = "bg-gray-800 text-white px-4 py-2 hover:bg-gray-900";
  }

  const combinedClassName = `${baseStyles}${variantStyles} ${className ?? ''}`.trim();

  if (href) {
 
    return (
      <Link href={href} className={combinedClassName}>
        {label}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
