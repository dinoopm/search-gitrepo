import {postData,getData,deleteData} from "../utils/helper";

export const searchRepositories = query => dispatch =>
  getData(`http://localhost:7000/gitrepo/search-repositories/${query}`)  
    .then(res => dispatch({ type: "SEARCH_REPOSITORIES", payload: res.data }));    


