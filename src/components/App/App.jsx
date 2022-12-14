import React, { useEffect, useReducer, useState } from "react";

// CSS import
import "./App.css";

// Component import
import AddButton from "../AddButton/AddButton";
import Header from "../Header/Header";
import Search from "../Search/Search";
import CardDisplay from "../CardDisplay/CardDisplay";
import CreateSnippet from "../CreateSnippet/CreateSnippet";
import ViewSnippet from "../ViewSnippet/ViewSnippet";

import { ACTIONS, snippetReducer } from "../../helpers/reducers";

export default function App() {
  // States declared
  const [state, dispatch] = useReducer(snippetReducer, []);
  const [isCreateSnippetOpen, setIsCreateSnippetOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [cardId, setCardId] = useState(null);

  // re-renders all snippets every time the dispatch function gets called
  useEffect(() => {
    /**
     * Gets all our snippets from the database
     */
    async function getSnippets() {
      // fetch our data
      const response = await fetch(`http://localhost:5000/api/codesnippet`);
      const jsonResponse = await response.json();
      // If an error happened on the backend while fetching
      // all our snippets, console log it.
      if (!response.ok) {
        console.log("Couldn't fetch all snippets");
        return;
      }
      // dispatch function sets all our snippets into state
      dispatch({
        type: ACTIONS.DISPLAY_SNIPPETS,
        payload: jsonResponse.payload,
      });
    }
    // finally call the function
    getSnippets();
  }, [dispatch]);

  return (
    <div className="App">
      <Header title="Snip" />
      <div className="utils">
        <Search dispatch={dispatch} />
        <AddButton
          setIsCreateSnippetOpen={setIsCreateSnippetOpen}
          buttonText="+"
        />
      </div>
      <div className="card-display-wrapper">
        <CardDisplay
          cardList={state}
          setIsViewOpen={setIsViewOpen}
          setCardId={setCardId}
        />
      </div>
      {/* if the modalOpen is true, display our modal to add new snippets */}
      {isCreateSnippetOpen && (
        <>
          <CreateSnippet
            setIsCreateSnippetOpen={setIsCreateSnippetOpen}
            dispatch={dispatch}
          />
        </>
      )}
      {/* if the viewOpen is true, display our snippet view */}
      {isViewOpen && (
        <ViewSnippet
          dispatch={dispatch}
          setIsViewOpen={setIsViewOpen}
          isViewOpen={isViewOpen}
          cardList={state}
          cardId={cardId}
        />
      )}
    </div>
  );
}
