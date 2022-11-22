import React, { useReducer, useState } from "react";
import AddButton from "../AddButton/AddButton";
import Header from "../Header/Header";
import Search from "../Search/Search";

const ACTIONS = {
  ADD_SNIPPET: "ADD_SNIPPET",
  DELETE_SNIPPET: "DELETE_SNIPPET",
  EDIT_SNIPPET: "EDIT_SNIPPET",
};

const INITIAL_STATE = {
  title: null,
  codeSnippet: null,
  description: null,
  tags: [],
  dateCreated: null,
  commentIds: [],
};

function cardReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_SNIPPET:
      return console.log("hello world");
    default:
      return state;
  }
}

export default function App() {
  // TODO work out a card object design
  const [state, dispatch] = useReducer(cardReducer, INITIAL_STATE);
  // False by default
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);

  return (
    <div>
      <Header title="Snip" />
      <Search />
      <AddButton setIsModalOpen={setIsModalOpen} buttonText="+" />
    </div>
  );
}
