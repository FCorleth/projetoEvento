import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`flex items-center hover:bg-[#744CBD] trasition duration-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
