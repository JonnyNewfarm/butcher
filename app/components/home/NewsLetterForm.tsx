"use client";
import React, { useRef } from "react";
import { AddNewsletterEmail } from "@/actions/addNewsletterEmail";
import { error } from "console";

const NewsLetterForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await AddNewsletterEmail(formData);

        ref.current?.reset();
      }}
    >
      <input
        className="border-[1px] border-stone-800 px-2 py-2 rounded-xl w-full"
        id="newsInput"
        name="newsInput"
        placeholder="Email"
        type="email"
        required
      />
      <button
        type="submit"
        className="bg-stone-800 mt-1 text-custom-color py-2 rounded-xl w-[100px]"
      >
        Sign up
      </button>
    </form>
  );
};

export default NewsLetterForm;
