"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputValues {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
}: InputValues) => {
  return (
    <div className="w-full relative">
      <input
        type={type}
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        className={`peer
      w-full
      p-4
      pt-6
      outline-none
      bg-white
      font-light
      border-2
      rounded-md
      transition
      diabled:opacity-70
      diasbled:cursor-not-allowed
        ${errors[id] ? "border-rose-500" : "border-slate-400"}
        ${errors[id] ? "focus:border-rose-500" : "focus:border-slate-400"}

      
      `}
      />
      <label
        className={`absolute
      cursor-text
      text-md
      duration-150
      transform
      -translate-y-3
      top-8
      z-10
      origin-[0]
      left-4
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
      peer-focus:scale-75
      peer-focus:-translate-y-6
         ${errors[id] ? "text-rose-500" : "text-slate-400"}




      `}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
