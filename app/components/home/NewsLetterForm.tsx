"use client";
import React, { useRef, useState } from "react";
import { AddNewsletterEmail } from "@/actions/addNewsletterEmail";

import NewsLetterBtn from "./NewsLetterBtn";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

const NewsLetterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email can not be empty" })
    .email("This is not an valid email."),
});

const NewsLetterForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  const [errorText, setErrorText] = useState("");

  return (
    <form
      className="relative"
      ref={ref}
      action={async (formData: FormData) => {
        const validation = {
          email: formData.get("newsInput"),
        };

        const result = NewsLetterSchema.safeParse(validation);
        if (!result.success) {
          let errorMessage = "";

          result.error.issues.forEach((issue) => {
            errorMessage = errorMessage + issue.message + ". ";
          });

          setErrorText(errorMessage);

          return;
        } else {
          setErrorText("");
        }

        const response = await AddNewsletterEmail(result.data.email);
        if (response?.error) {
          toast.error(response.error);
        } else {
          toast.success("Email added");
        }
      }}
    >
      <input
        className="border-[1px] border-stone-800 px-2 py-2 rounded-xl w-full"
        id="newsInput"
        name="newsInput"
        placeholder="Email"
      />
      {errorText && <p className="text-red-900">{errorText}</p>}
      <NewsLetterBtn />
    </form>
  );
};

export default NewsLetterForm;
