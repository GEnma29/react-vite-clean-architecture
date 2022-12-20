import { AxiosRequestConfig } from "axios";

export const AxiosInterceptor = (request : AxiosRequestConfig<any>) =>{
        console.log("starting Request", request)
        return request
}