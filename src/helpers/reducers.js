export const ACTIONS = {
  DISPLAY_SNIPPETS: "DISPLAY_SNIPPETS",
  ADD_SNIPPET: "ADD_SNIPPET",
  DELETE_SNIPPET: "DELETE_SNIPPET",
  ADD_COMMENT: "ADD_COMMENT",
  DISPLAY_COMMENTS: "DISPLAY_COMMENTS",
};

export function snippetReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_SNIPPET:
      return [...state, action.payload];
    case ACTIONS.DISPLAY_SNIPPETS:
      return [...action.payload];
    case ACTIONS.DELETE_SNIPPET:
      return state.filter(
        (snippet) => snippet.snippet_id !== action.payload.snippet_id
      );
    default:
      return state;
  }
}

export function commentReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_COMMENT:
      return [...state, action.payload];
    case ACTIONS.DISPLAY_COMMENTS:
      return [...action.payload];
    case ACTIONS.DELETE_COMMENT:
      return state.filter(
        (comment) => comment.comment_id !== action.payload.comment_id
      );
    default:
      return state;
  }
}
