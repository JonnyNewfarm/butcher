"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  custom?: string;
  small?: boolean;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  label,
  disabled,
  outline,
  custom,
  small,
  icon: Icon,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        
        rounded-md
        hover:opacity-80
        transition
        w-[80%]
        border-slate-700
        items-center
        justify-center
        gap-2
        ${outline ? "bg-white " : "bg-slate-700"}
        ${outline ? "text-slate-700" : "text-white"}
        ${small ? "text-sm font-light" : "text-md font-semibold"}
        ${small ? "py-1 px-2 border-[1px]" : "px-4 py-3 border-2"}
        ${custom ? custom : ""}

    
    `}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
