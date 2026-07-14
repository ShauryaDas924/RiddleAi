import React from 'react';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style = {},
  ...props
}) {
  // Step 3: Style variants to keep design consistent
  const baseStyle = {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontWeight: '600',
    borderRadius: '6px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  };

  // Variant themes
  const variants = {
    primary: {
      backgroundColor: '#4f46e5',
      color: '#ffffff',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    },
    secondary: {
      backgroundColor: '#f5f3ff',
      color: '#4f46e5',
      border: '1px solid #4f46e5',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#4a4a4a',
      border: '1px solid #d1d5db',
    },
    danger: {
      backgroundColor: '#dc2626',
      color: '#ffffff',
    },
  };

  // Size constraints
  const sizes = {
    small: {
      padding: '6px 12px',
      fontSize: '13px',
    },
    medium: {
      padding: '10px 20px',
      fontSize: '15px',
    },
    large: {
      padding: '14px 28px',
      fontSize: '17px',
    },
  };

  // Merge the styles together
  const combinedStyle = {
    ...baseStyle,
    ...variants[variant],
    ...sizes[size],
    ...style,
  };

  // Hover effect handlers
  const handleMouseOver = (e) => {
    if (disabled) return;
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = '#4338ca';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = '#ede9fe';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = '#f9fafb';
    } else if (variant === 'danger') {
      e.currentTarget.style.backgroundColor = '#b91c1c';
    }
  };

  const handleMouseOut = (e) => {
    if (disabled) return;
    e.currentTarget.style.backgroundColor = variants[variant].backgroundColor;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={combinedStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    >
      {children}
    </button>
  );
}