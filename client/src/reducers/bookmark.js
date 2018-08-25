const initialState = {bookmarks:[]};
export default (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_BOOKMARK":
      state = action.payload;
      break;
    case "GET_BOOKMARKS":
      state = {bookmarks:action.payload};
      break;
    case "REMOVE_BOOKMARK":
      state = {bookmarks:action.payload};
      break;      

    default:
      break;
  }
  return state;
};