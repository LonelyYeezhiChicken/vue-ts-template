import jsSHA from 'jssha'
//import { CONFIG } from '../constants/config'

//const { appId, appKey } = CONFIG

export function getAuthorizationHeader() {
    const GMTString = new Date().toUTCString()
    const shaObj = new jsSHA('SHA-1', 'TEXT')
    shaObj.setHMACKey("appKey", 'TEXT')
    shaObj.update('x-date: ' + GMTString)
    const HMAC = shaObj.getHMAC('B64')
    const Authorization = `hmac  algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`

    return {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'X-Date': GMTString,
        Authorization,
    }
}
