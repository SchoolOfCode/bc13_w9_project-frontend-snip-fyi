import React, { useReducer, useState } from "react";

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
    title: "My Bad Code",
    dateCreated: "22/11/2022",
    codeSnippet: "let const = temporary",
    description:
      "bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code",
    commentIds: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    title: "My Code",
    dateCreated: "22/11/2022",
    codeSnippet: "let const = temporary",
    description:
      "bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code",
    commentIds: [1, 2, 3, 4, 5],
  },
  {
    id: 4,
    title: "My Code",
    dateCreated: "22/11/2022",
    codeSnippet: "let const = temporary",
    description:
      "bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code",
    commentIds: [1, 2, 3, 4, 5],
  },
  {
    id: 5,
    title: "My Code",
    dateCreated: "22/11/2022",
    codeSnippet: "let const = temporary",
    description:
      "bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code bad code",
    commentIds: [1, 2, 3, 4, 5],
  },
  {
    id: 6,
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
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [cardId, setCardId] = useState(null);

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
            <Modal setIsModalOpen={setIsModalOpen} />
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
