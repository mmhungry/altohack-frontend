import React, { MouseEventHandler, ReactNode } from "react";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

// Define a custom button type with size and variant properties
type ButtonType = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "className"
> & {
  variant?: "primary" | "secondary" | "outline";
  size?: "lg" | "md" | "sm";
};

// Define size classes for the button component
const sizeClasses = {
  sm: "h-6 px-4 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold",
  md: "h-8 px-4 rounded flex items-center justify-center gap-2 text-sm font-bold",
  lg: "h-10 px-4 rounded flex items-center justify-center gap-2 text-sm font-bold",
};

// Define variant classes for the button component
const variantClasses = {
  primary: "bg-primary text-white",
  secondary: "bg-[#DBE4FF4D] text-primary border border-primary",
  outline: "bg-white text-primary border border-primary",
};

// Define variant classes for the disabled button component
const disabledVariantClasses = {
    primary: "bg-black_main text-black_main",
    secondary: "bg-black_main text-black_main border border-black_main",
    outline: "bg-transparent text-black_main border border-black_main",
  };

// Define the base button props, including the button type properties
interface BaseButtonProps extends ButtonType {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

// BaseButton component handles the basic rendering of a button
const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`hover:shadow-button disabled:shadow-none ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Define the button props, extending the base button props
interface ButtonProps extends BaseButtonProps {
  children: ReactNode;
}

// Button component extends the functionality of the BaseButton component
// by handling button sizes and variants
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
  variant = "primary",
  size = "lg",
}) => {
  const sizeClass = sizeClasses[size]; // Get the size class based on the size prop
  const variantClass = disabled
    ? disabledVariantClasses[variant] // Apply the corresponding disabled style when the button is disabled
    : variantClasses[variant];

  // Render the BaseButton component with size and variant classes
  return (
    <BaseButton
      className={`${sizeClass} ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </BaseButton>
  );
};