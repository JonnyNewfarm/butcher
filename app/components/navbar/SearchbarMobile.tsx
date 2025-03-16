"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBarMobile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const encodedSearchquery = encodeURI(searchQuery);
    router.push(`/products?searchTerm=${encodedSearchquery}`);
  };

  return (
    <div className="">
      <div className="flex items-end">
        <form onSubmit={onSearch}>
          <input
            type="search"
            id="search"
            placeholder="Explore"
            value={searchQuery}
            className={`p-2  h-9    rounded-lg  z-50 sm:l sm:mb-[-8px] border-stone-400  md:focus:outline-none focus:border-[0.5px] focus:border-stone-600    `}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBarMobile;
