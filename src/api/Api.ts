import req from '../utils/axiosPlugin'

/** 範例 api */
// Get
export const apiGet = (data: any) => {
    return req.get(`/path`, data, undefined)
}

// Post
export const apiPost = (data: any) => {
    return req.post(`/path`, data, undefined)
}