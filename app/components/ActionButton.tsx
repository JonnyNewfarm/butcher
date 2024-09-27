"use client";
import React from "react";
import { IconType } from "react-icons";

interface ActionButtonProps {
  icon: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const ActionButton = ({ icon: Icon, onClick, disabled }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded cursor-pointer w-[40px] h-[30px] border border-slate-800 ${
        disabled && "opacity-50 cursor-not-allowed"
      }`}
    >
      <Icon size={18} />
    </button>
  );
};

export default ActionButton;
