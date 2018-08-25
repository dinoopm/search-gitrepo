import axios from "axios";



// Send a GET request
export  function getData(url=''){
	return axios.get(url)
}


// Send a POST request
export  function postData(url = ``, data = {}) {   
    return axios({
            method: 'post',
            url: url,
            data: data,
            headers: { 
              'Content-Type': 'application/json',
              "Cache-Control": "no-cache"
            }
        });
}      

// Send a DELETE request
export  function deleteData(url = ``, data = {}) {   
    return axios({
            method: 'delete',
            url: url,
            data: data,
            headers: { 
              'Content-Type': 'application/json',
              "Cache-Control": "no-cache"
            }
        });
}   


