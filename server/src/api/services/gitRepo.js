 /* eslint-disable camelcase */
const axios = require('axios');

exports.searchRepositories = async (q) => {
  
  const url = `https://api.github.com/search/repositories?q=${q}`;

  const response = await axios.get(url);

  const {total_count, items} = response.data;

  return {
  	count:total_count,
  	list:items
  }

};