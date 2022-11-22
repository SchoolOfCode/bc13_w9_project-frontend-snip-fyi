import React, { useReducer, useState } from "react";
import AddButton from "../AddButton/AddButton";
import Header from "../Header/Header";
import Search from "../Search/Search";
import CardDisplay from "../CardDisplay/CardDisplay";

export const ACTIONS = {
  DISPLAY_SNIPPETS: "DISPLAY_SNIPPETS",
  FILTER_SNIPPETS: "FILTER_SNIPPETS",
  ADD_SNIPPET: "ADD_SNIPPET",
  DELETE_SNIPPET: "DELETE_SNIPPET",
  EDIT_SNIPPET: "EDIT_SNIPPET",
};

const INITIAL_STATE = [
  {
    id: 1,
    title: "My Code",
    codeSnippet: "let const = temporary",
    description: "bad code",
    tags: ["JavaScript", "CSS"],
    dateCreated: "22/11/22",
    numComments: 8,
    numUpvotes: 69,
    commentIds: [],
  },
  {
    id: 2,
    title: "hello",
    codeSnippet: "let const = temporary",
    description: "bad code",
    tags: ["JavaScript", "CSS"],
    dateCreated: "22/11/22",
    numComments: 8,
    numUpvotes: 69,
    commentIds: [],
  },
  {
    id: 3,
    title: "My Code",
    codeSnippet: "let const = temporary",
    description: "bad code",
    tags: ["JavaScript", "CSS"],
    dateCreated: "22/11/22",
    numComments: 8,
    numUpvotes: 69,
    commentIds: [],
  },
  {
    id: 4,
    title: "My Code",
    codeSnippet: "let const = temporary",
    description: "bad code",
    tags: ["JavaScript", "CSS"],
    dateCreated: "22/11/22",
    numComments: 8,
    numUpvotes: 69,
    commentIds: [],
  },
  {
    id: 5,
    title: "My Code",
    codeSnippet: "let const = temporary",
    description: "bad code",
    tags: ["JavaScript", "CSS"],
    dateCreated: "22/11/22",
    numComments: 8,
    numUpvotes: 69,
    commentIds: [],
  },
];

function cardReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_SNIPPET:
      return console.log("hello world");
    case ACTIONS.DISPLAY_SNIPPETS:
      return [...state];
    case ACTIONS.FILTER_SNIPPETS:
      console.log(
        state.filter((card) => {
          const lower = card.title.toLowerCase();
          return lower.includes(action.payload);
        })
      );
      return state.filter((card) => {
        const lower = card.title.toLowerCase();
        return lower.includes(action.payload);
      });
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
    <div>
      <Header title="Snip" />
      <Search dispatch={dispatch} />
      <AddButton setIsModalOpen={setIsModalOpen} buttonText="+" />
      <CardDisplay cardList={state} />
    </div>
  );
}
