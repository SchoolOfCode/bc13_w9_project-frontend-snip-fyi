import React, { useEffect, useReducer, useState } from "react";

import "./App.css";

import AddButton from "../AddButton/AddButton";
import Header from "../Header/Header";
import Search from "../Search/Search";
import CardDisplay from "../CardDisplay/CardDisplay";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";
import ViewSnippet from "../ViewSnippet/ViewSnippet";

export const ACTIONS = {
  DISPLAY_SNIPPETS: "DISPLAY_SNIPPETS",
  ADD_SNIPPET: "ADD_SNIPPET",
  DELETE_SNIPPET: "DELETE_SNIPPET",
  EDIT_SNIPPET: "EDIT_SNIPPET",
};

function cardReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_SNIPPET:
      return [...state, action.payload];
    case ACTIONS.DISPLAY_SNIPPETS:
      return [...action.payload];
    default:
      return state;
  }
}

export default function App() {
  // TODO work out a card object design
  const [state, dispatch] = useReducer(cardReducer, []);
  // False by default
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [cardId, setCardId] = useState(null);

  useEffect(() => {
    // fetch stuff here

    // async function to fetch our data
    async function getSnippets() {
      const response = await fetch(`http://localhost:5000/api/codesnippet`);
      const json = await response.json();

      // console.log(json.payload);
      dispatch({ type: ACTIONS.DISPLAY_SNIPPETS, payload: json.payload });
    }

    getSnippets();

    // call the function

    // check if the response has come back ok
  }, [dispatch]);

  return (
    <div className="App">
      <Header title="Snip" />
      <main className="main-content">
        <div className="utils">
          <Search dispatch={dispatch} />
          <AddButton setIsModalOpen={setIsModalOpen} buttonText="+" />
        </div>
        <CardDisplay
          cardList={state}
          setIsViewOpen={setIsViewOpen}
          setCardId={setCardId}
        />
        {isModalOpen && (
          <>
            <div
              className="modal-container"
              onClick={() => setIsModalOpen(false)}
            ></div>
            <Modal setIsModalOpen={setIsModalOpen} dispatch={dispatch} />
          </>
        )}
        {isViewOpen && (
          <>
            <div
              className="view-snippet-container"
              onClick={() => setIsViewOpen(false)}
            ></div>
            <ViewSnippet
              setIsViewOpen={setIsViewOpen}
              isViewOpen={isViewOpen}
              cardList={state}
              cardId={cardId}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
