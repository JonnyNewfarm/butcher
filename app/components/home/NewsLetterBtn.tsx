"use client";
import { useFormStatus } from "react-dom";

import React from "react";

const NewsLetterBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-stone-800 mt-1 text-custom-color py-2 rounded-xl w-[100px] text-nowrap"
    >
      {pending ? "..." : "Sign up"}
    </button>
  );
};

export default NewsLetterBtn;
