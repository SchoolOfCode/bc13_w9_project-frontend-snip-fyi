import React, { useEffect, useState } from "react";
import { ACTIONS } from "../App/App";
import "./Search.css";

export default function Search({dispatch}) {
  const [searchInput, setSearchInput] = useState("");

  useEffect (()=>{
   async function getSnippetByTitle(){
    const response = await fetch(`http://localhost:5000/api/codesnippet?search=${searchInput}`)
    const jsonResponse = await response.json()
    if (!response.ok){
      console.log("Error from getSnippetByTitle")
      return
    }
      dispatch({type: ACTIONS.DISPLAY_SNIPPETS, payload: jsonResponse.payload})
   }
   getSnippetByTitle()
  },[dispatch, searchInput])
  
  
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
