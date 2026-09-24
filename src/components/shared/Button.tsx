import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  id?: string;
}

const variantClasses: Record<string, string> = {
  primary: 'bg-[#8B1A1A] text-white hover:bg-[#6B1212] focus-visible:ring-[#8B1A1A] shadow-sm',
  accent:  'bg-[#D4A017] text-white hover:bg-[#B8860B] focus-visible:ring-[#D4A017] shadow-sm',
  outline: 'border-2 border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#FBF0F0] focus-visible:ring-[#8B1A1A]',
  ghost:   'text-[#8B1A1A] hover:bg-[#FBF0F0] focus-visible:ring-[#8B1A1A]',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  id,
}: ButtonProps) => {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] min-w-[44px]';
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (to) return <Link to={to} className={classes} id={id}>{children}</Link>;
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" id={id}>{children}</a>;
  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} id={id}>
      {children}
    </button>
  );
};

export default Button;
