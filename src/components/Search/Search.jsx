import React, { useState } from "react";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");

  console.log(searchInput);

  return (
    <div className="Search">
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        type="search"
        // TODO Add search icon to placeholder
        placeholder="Search"
      />
    </div>
  );
}
