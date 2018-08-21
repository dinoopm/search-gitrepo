 /* eslint-disable camelcase */
const axios = require('axios');

exports.searchRepositories = async (q) => {
  
  const url = `https://api.github.com/search/repositories?q=${q}`;

  const response = await axios.get(url);

  return response.data;
};