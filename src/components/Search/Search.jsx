import React, { useEffect, useState } from "react";
import { ACTIONS } from "../../helpers/reducers";

// CSS import
import "./Search.css";

export default function Search({ dispatch }) {
  // Create a search state
  const [searchInput, setSearchInput] = useState("");

  // re-sets our snippet state with a 'filtered' set of snippets
  // based on the search parameter
  useEffect(() => {
    async function getSnippetByTitle() {
      // Fetches all the snippets with the given search term
      const response = await fetch(
        `http://localhost:5000/api/codesnippet?search=${searchInput}`
      );

      // Store the response object and convert from json -> js object
      const jsonResponse = await response.json();

      // If an error happened return and console log it
      // return out of the function so we don't store in state
      if (!response.ok) {
        console.log(
          `Error while trying to get all snippets with the search term: ${searchInput}`
        );
        return;
      }

      // calls our dispatch function to re-update our snippets state
      dispatch({
        type: ACTIONS.DISPLAY_SNIPPETS,
        payload: jsonResponse.payload,
      });
    }
    // Call the function to fetch our data
    getSnippetByTitle();

    // re-runs the useEffect every time our search input changes
    // or a dispatch function is called
  }, [dispatch, searchInput]);

  return (
    <div className="Search">
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        type="search"
        // TODO Add search icon to placeholder
        placeholder="Search..."
      />
    </div>
  );
}
