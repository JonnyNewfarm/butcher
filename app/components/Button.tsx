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
        
        rounded-xl
        hover:opacity-80
        transition
        w-[100%]
        bg-stone-800
        text-custom-color
        items-center
        justify-center
        
        gap-2
        flex
        ${outline ? "bg-white " : "bg-slate-700"}
        ${outline ? "text-stone-700" : "text-white"}
        ${small ? "text-sm font-light" : "text-md font-semibold"}
        ${small ? "py-1 px-2 border-[1px]" : "px-4 py-3 border-2"}
        ${custom ? custom : ""}

    
    `}
    >
      {Icon && <Icon size={22} />}
      {label}
    </button>
  );
};

export default Button;
