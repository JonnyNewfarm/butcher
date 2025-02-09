"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [showInput, setShowInput] = useState("hidden");

  const handleInputVisability = () => {
    if (showInput === "hidden") {
      return setShowInput("block");
    }

    if (showInput === "block") {
      setShowInput("hidden");
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const encodedSearchquery = encodeURI(searchQuery);
    router.push(`/products?searchTerm=${encodedSearchquery}`);
  };

  return (
    <div className="flex items-end">
      <form onSubmit={onSearch}>
        <input
          type="search"
          id="search"
          placeholder="Explore"
          value={searchQuery}
          className={`p-2 absolute sm:relative h-9  left-10 right-5 rounded-xl  z-50 sm:l sm:mb-[-7px]   sm:mr-6 bottom-1 border-stone-400  md:focus:outline-none focus:border-[0.5px] focus:border-stone-600 ${showInput}   `}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <CiSearch
        className="stroke-[0.8] ml-4 sm:mb-[4px]  cursor-pointer"
        size={25}
        onClick={handleInputVisability}
      />
    </div>
  );
};

export default SearchBar;
