import axios from "axios";

export const Api = axios.create({
    baseURL: 'https://some-domain.com/api/', // api base 
    timeout: 3000, // wait time
    headers: {
        'X-Custom-Header': 'foobar'
    } // headear 
  });