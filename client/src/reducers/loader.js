export default (state = false, action) => {
  switch (action.type) {
    case "SET_LOADER":
      state = action.payload.isLoading;
      break;
    default:
      break;
  }
  return state;
};
