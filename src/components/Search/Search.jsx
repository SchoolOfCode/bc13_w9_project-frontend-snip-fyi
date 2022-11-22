import React, { useEffect, useState } from "react";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   async function getSnippets() {
  //     // do fetch stuff here

  //     // return all snippets with the given searchInput
  //     // checking against the snippet title API URI

  //     // check if searchInput is empty
  //     // if (searchInput === '') {
  //       // re fetch all the snippets again and update our state
  //     };
  //     // const response = await fetch(`http://localhost:3000/api/v1/snippets/${searchInput}`)
  //   }
  // }, [searchInput]);

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
