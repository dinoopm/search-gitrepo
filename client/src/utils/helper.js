import axios from "axios";

const server_url ="http://localhost:7000"

// Send a GET request
export  const getData = (url='') => axios.get(server_url+url)


// Send a POST request
export  const postData = (url = ``, data = {}) => {   
    return axios({
            method: 'post',
            url: server_url+url,
            data: data,
            headers: { 
              'Content-Type': 'application/json',
              "Cache-Control": "no-cache"
            }
        });
}      

// Send a DELETE request
export  const deleteData = (url = ``, data = {}) => {   
    return axios({
            method: 'delete',
            url: server_url+url,
            data: data,
            headers: { 
              'Content-Type': 'application/json',
              "Cache-Control": "no-cache"
            }
        });
}   


