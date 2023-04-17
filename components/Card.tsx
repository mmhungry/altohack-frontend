import React, {
  ReactNode,
  DetailedHTMLProps,
  HTMLAttributes,
  forwardRef,
} from "react";

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  subtitle?: string;
  value?: string;
  unit?: string;
  imageUrl?: string;
  icon?: ReactNode;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "white";
  onClick?: () => void;
}

type Ref = HTMLDivElement;

export const Card = forwardRef<Ref, CardProps>(
  (
    {
      title,
      subtitle,
      value,
      unit,
      imageUrl,
      icon,
      children,
      className,
      variant = "primary",
      onClick,
      ...otherProps
    },
    ref
  ) => {
    const variantClasses = {
      primary: "bg-white/16",
      secondary: "bg-primary",
      white: "bg-white",
    };
    const defaultClasses = `w-full rounded-lg shadow-card ${variantClasses[variant]}`;
    const combinedClasses = className
      ? `relative ${defaultClasses} ${className}`
      : defaultClasses;
    return (
      <div className={combinedClasses} {...otherProps} ref={ref} onClick={onClick}>
        {imageUrl && (
          <img
            className="w-full h-56 object-cover object-center"
            src={imageUrl}
            alt={title}
          />
        )}
        <div className="p-2 pb-3">
          {icon && <div className="absolute top-2 right-2">{icon}</div>}
          {title && <span className="text-h4 text-altoBlack ">{title}</span>}
          <div>
            {subtitle && (
              <span className="text-b1 text-altoBlack mb-2">{subtitle}</span>
            )}
          </div>
          <div className="flex justify-center items-end">
            {value && <span className="text-h3 text-primary">{value}</span>}
            {unit && (
              <span className="ml-1 mb-0.5 text-h4 text-primary">{unit}</span>
            )}
          </div>
          {children}
        </div>
      </div>
    );
  }
);
