"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const SetTags = () => {
  const [tag, setTag] = useState(false);
  const params = useSearchParams();

  const gender = params?.get("gender");
  const category = params?.get("category");
  const brand = params?.get("brand");

  useEffect(() => {
    if (gender || category || brand) {
      setTag(true);
    } else {
      setTag(false);
    }
  }, [gender, category, brand]);

  return (
    <div className="flex flex-row gap-x-2">
      <h1 className={tag ? "block" : "hidden"}>{gender}</h1>
      <h1 className={tag ? "block" : "hidden"}>{category}</h1>
      <h1 className={tag ? "block" : "hidden"}>{brand}</h1>
    </div>
  );
};

export default SetTags;
