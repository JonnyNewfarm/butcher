"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [showInput, setShowInput] = useState("invisible");

  const handleInputVisability = () => {
    if (showInput === "invisible") {
      return setShowInput("visable");
    }

    if (showInput === "visable") {
      setShowInput("invisible");
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
    <div className="flex items-center">
      <form onSubmit={onSearch}>
        <input
          type="search"
          id="search"
          placeholder="Explore"
          value={searchQuery}
          className={`p-2 border-stone-400 rounded-[3px] md:focus:outline-none focus:border-[0.5px] focus:border-stone-600 ${showInput}   `}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <CiSearch
        className="stroke-[0.8] cursor-pointer"
        size={30}
        onClick={handleInputVisability}
      />
    </div>
  );
};

export default SearchBar;
