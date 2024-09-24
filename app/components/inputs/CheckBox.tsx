import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface CheckBoxProps {
  id: string;
  label: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
}

const CheckBox = ({ id, label, disabled, register }: CheckBoxProps) => {
  return (
    <div className="w-full flex flex-row gap-2 items-center">
      <input
        type="checkbox"
        id={id}
        placeholder=""
        disabled={disabled}
        {...register(id)}
        className="cursor-pointer"
      />
      <label htmlFor={id} className="font-medium cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
