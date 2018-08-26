import {postData,getData,deleteData} from "../utils/helper";



export const searchRepositories = query => dispatch =>{	
   return  getData(`/gitrepo/search-repositories/${query}`)  
    .then(res =>{
    	 dispatch({ type: "SEARCH_REPOSITORIES", payload: res.data })
    }); 

}
    


