/* eslint-disable camelcase */
const axios = require('axios');

let bookmark = {}; 


exports.getAllBookmarks = async () => {
      return {
            "count":Object.values(bookmark).length,
            "list":Object.values(bookmark)
      }
}

exports.addBookmark = async (id) => {

  if(bookmark[id]){
  	  return {
            "count":Object.values(bookmark).length,
            "list":Object.values(bookmark)
      }
  }	
  
  const url = `https://api.github.com/repositories/${id}`;

  const response = await axios.get(url);

  bookmark[response.data.id] = response.data;

  return {
        "count":Object.values(bookmark).length,
        "list":Object.values(bookmark)
  }

};


exports.removeBookmark = async (id) => {
  
  delete bookmark[id];

  return {
        "count":Object.values(bookmark).length,
        "list":Object.values(bookmark)
  }
};


