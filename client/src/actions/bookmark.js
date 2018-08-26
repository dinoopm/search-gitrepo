import {postData,getData,deleteData} from "../utils/helper";

export const addToBookmark = id => dispatch =>
  	postData(`/bookmark`, {id: id})
    .then(res => {
    	dispatch({ type: "SAVE_BOOKMARK", payload: res.data })
    })


export const getBookmarks = () => dispatch =>
  	getData(`/bookmark`)
    .then(res => {
    	dispatch({ type: "GET_BOOKMARKS", payload: res.data })
    })


export const removeBookmark = id => dispatch =>
  	deleteData(`/bookmark/${id}`)
    .then(res => {
    	dispatch({ type: "GET_BOOKMARKS", payload: res.data })
    })