var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: (process.env.NODE_ENV !== 'production') ? 'http://localhost:5000/' : '',
    /* other custom settings */
});

module.exports = axiosInstance;