import React, { useReducer, useState } from "react";

import "./App.css";

import AddButton from "../AddButton/AddButton";
import Header from "../Header/Header";
import Search from "../Search/Search";
import CardDisplay from "../CardDisplay/CardDisplay";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";

export const ACTIONS = {
  DISPLAY_SNIPPETS: "DISPLAY_SNIPPETS",
  ADD_SNIPPET: "ADD_SNIPPET",
  DELETE_SNIPPET: "DELETE_SNIPPET",
  EDIT_SNIPPET: "EDIT_SNIPPET",
};

const INITIAL_STATE = [
  {
    id: 1,
    title: "My Code",
    dateCreated: "22/11/2022",
    codeSnippet: "let const = temporary",
    description:
      "bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code",
    commentIds: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    title: "My Code",
    dateCreated: "22/11/2022",
    codeSnippet: "let const = temporary",
    description:
      "bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code",
    commentIds: [1, 2, 3, 4, 5],
  },
];

function cardReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_SNIPPET:
      return console.log("hello world");
    case ACTIONS.DISPLAY_SNIPPETS:
      return [...state];
    default:
      return state;
  }
}

export default function App() {
  // TODO work out a card object design
  const [state, dispatch] = useReducer(cardReducer, INITIAL_STATE);
  // False by default
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Header title="Snip" />
      <main className="main-content">
        <div className="utils">
          <Search dispatch={dispatch} />
          <AddButton setIsModalOpen={setIsModalOpen} buttonText="+" />
        </div>
        <CardDisplay cardList={state} />
        {isModalOpen && (
          <>
            <div
              className="modal-container"
              onClick={() => setIsModalOpen(false)}
            ></div>
            <Modal
              setIsModalOpen={setIsModalOpen}
              onClick={(e) => e.stopPropagation()}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
