import axios, { AxiosRequestConfig } from 'axios'
import { CONFIG } from '../constants/config'
import { getAuthorizationHeader } from './getAuthorizationHeader'

const { apiURL } = CONFIG

const instance = axios.create({
    baseURL: apiURL,
    headers: getAuthorizationHeader(),
    timeout: 20000,
})

instance.interceptors.request.use(
    function (config: any) {
        // Do something before request is sent
        // e.g. show loading
        return config
    },
    function (error: any) {
        // Do something with request error
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    function (response: any) {
        // Do something with response data
        // e.g. hide loading
        return response
    },
    function (error: { response: { status: any }; message: any }) {
        if (error.response) {
            switch (error.response.status) {
                case 404:
                    console.log('你要找的頁面不存在')
                    break
                case 500:
                    console.log('程式發生問題')
                    break
                default:
                    console.log(error.message)
            }
        }
        if (!window.navigator.onLine) {
            alert('網路出了點問題，請重新連線後重整網頁')
            return
        }
        return Promise.reject(error)
    }
)

function get(url: string, data: any, config: AxiosRequestConfig<any> | undefined) {
    return instance.get(url, { params: { ...data, $format: 'JSON' }, ...config })
}

function post(url: string, data = null, config: AxiosRequestConfig<null> | undefined) {
    return instance.post(url, data, config)
}

function deleteRequest(url: string, data = null, config: AxiosRequestConfig<any> | undefined) {
    return instance.delete(url, { params: data, ...config })
}

function put(url: string, data = null, config: AxiosRequestConfig<null> | undefined) {
    return instance.put(url, data, config)
}

function patch(url: string, data = null, config: AxiosRequestConfig<null> | undefined) {
    return instance.patch(url, data, config)
}

const req = {
    get,
    post,
    delete: deleteRequest,
    put,
    patch,
}

export default req
