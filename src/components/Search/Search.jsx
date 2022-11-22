import React, { useState } from "react";
import { ACTIONS } from "../App/App";

export default function Search({ dispatch }) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    // Update our search input state with the current value of users search query
    setSearchInput(e.target.value);

    // if our state is empty, don't continue
    if (searchInput === "") return;

    dispatch({
      type: ACTIONS.FILTER_SNIPPETS,
      payload: searchInput.toLowerCase(),
    });
  }

  return (
    <div className="Search">
      <input
        onChange={(e) => handleChange(e)}
        type="search"
        // TODO Add search icon to placeholder
        placeholder="Search"
      />
    </div>
  );
}
