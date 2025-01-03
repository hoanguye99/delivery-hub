/* eslint-disable */
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_END_DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: !isNaN(Number(process.env.NEXT_PUBLIC_TIME_OUT_API))
  //   ? Number(process.env.NEXT_PUBLIC_TIME_OUT_API)
  //   : 60000,
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axiosClient
