import {postData,getData,deleteData} from "../utils/helper";

export const addToBookmark = id => dispatch =>
  	postData(`http://localhost:7000/bookmark`, {id: id})
    .then(res => {
    	dispatch({ type: "SAVE_BOOKMARK", payload: res.data })
    }).then(()=>{ console.log("Bookmark saved")});


export const getBookmarks = () => dispatch =>
  	getData(`http://localhost:7000/bookmark`)
    .then(res => {
    	dispatch({ type: "GET_BOOKMARKS", payload: res.data })
    }).then(()=>{ console.log("Fetched Bookmarks")});


export const removeBookmark = id => dispatch =>
  	deleteData(`http://localhost:7000/bookmark/${id}`)
    .then(res => {
    	dispatch({ type: "REMOVE_BOOKMARKS", payload: res.data })
    }).then(()=>{ console.log("Bookmark Removed")});