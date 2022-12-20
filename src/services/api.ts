import axios from "axios";
// Axios interceptors
import { AxiosInterceptor } from "~/interceptors/axios.interceptor";

export const Api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/', // api base 
    timeout: 3000, // wait time
    headers: {
       //  'X-Custom-Header': 'foobar'
    } // headear 
  });
  //interceptors
  Api.interceptors.request.use(AxiosInterceptor)
  Api.interceptors.response.use((response)=>{
    console.log("response", response)
    return response
  },(error)=>{
    return Promise.reject(error)
  })