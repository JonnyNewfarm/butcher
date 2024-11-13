"use client";
import React, { useRef, useState } from "react";
import { AddNewsletterEmail } from "@/actions/addNewsletterEmail";

import NewsLetterBtn from "./NewsLetterBtn";
import toast, { Toaster } from "react-hot-toast";

const NewsLetterForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  const [toastText, setToastText] = useState("");

  return (
    <form
      className="relative"
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        const result = await AddNewsletterEmail(formData);
        if (result?.error) {
          toast.error(result.error);
          setToastText(result.error);
        } else {
          toast.success("Email added");
          setToastText("");
        }
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
      {toastText && <p className="text-red-900">{toastText}</p>}
      <NewsLetterBtn />
    </form>
  );
};

export default NewsLetterForm;
