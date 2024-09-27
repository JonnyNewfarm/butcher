"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import queryString from "query-string";

interface CategoryProps {
  label: string;

  selected?: boolean;
}

const Category = ({ label, selected }: CategoryProps) => {
  const router = useRouter();
  const params = useSearchParams();
  const handleClick = useCallback(() => {
    if (label === "Home") {
      router.push("/");
    } else {
      let currentQuery = {};

      if (params) {
        currentQuery = queryString.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        category: label,
      };

      const url = queryString.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        {
          skipNull: true,
        }
      );

      router.push(url);
    }
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-stone-900 transition cursor-pointer
    ${
      selected
        ? "border-b-slate-800 text-slate-800"
        : "border-transparent text-stone-500"
    }
    `}
    >
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default Category;
