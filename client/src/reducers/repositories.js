const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_REPOSITORIES":
      state = action.payload
      break;
    default:
      break;
  }
  return state;
};