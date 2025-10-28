// FOR BUTTON COMPONENT
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  startIcon?: React.ReactNode;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

export const Button: React.FC<ButtonProps> = ({ href, startIcon, variant = "ghost", children, target, rel, ...rest }) => {
  const base = "flex items-center gap-2 border px-4 py-2 rounded-lg transition-all duration-200 active:scale-95";
  const variants = {
    primary: "bg-black text-white border-gray-800 hover:bg-gray-900",
    ghost: "bg-white text-gray-700 border-gray-200 hover:bg-gray-100",
  };
  const className = `${base} ${variants[variant]} ${rest.className ?? ""}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={className} {...(rest as any)}>
        {startIcon}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={className} {...rest}>
      {startIcon}
      <span>{children}</span>
    </button>
  );
};