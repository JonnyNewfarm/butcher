"use client";
import React, { FormEvent } from "react";
import NewsLetterForm from "./NewsLetterForm";

const NewsLetter = async () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:px-32 items-center py-10 px-3">
      <div className="text-stone-800 md:max-w-[300px] xl:max-w-[500px]">
        <h1 className="font-bold text-[30px]">Stay up to date</h1>
        <p>
          Suspendisse neque magna, finibus vel ex vel, iaculis condimentum est.
          Nunc elementum iaculis ultricies.
        </p>
        <p></p>
      </div>
      <div className="flex flex-col w-full md:w-[200px] mt-4 md:mt-0">
        <h1>Your Email</h1>
        <NewsLetterForm />
      </div>
    </div>
  );
};

export default NewsLetter;
