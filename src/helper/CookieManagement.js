// let CookieManager = require("react-native-cookies");
// let storage = require("./storage");
import storage from './storage'
import  CookieManager from 'react-native-cookie';


const setCookie = {
    makeRequest(path, params) {
        return storage.getCookie().then(cookie => {
            let fetchParams = {
                method,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "cookie": cookie,
                },
                credentials: "omit",
            }

            // Clearing all cookies stored by native cookie managers.
            return CookieManager.clearAll().then(() => {
                return fetch(path, fetchParams)
                    .then(response => {
                        storage.setCookie(response.headers.get("set-cookie"))
                        return response
                    })
                    .then(data => data.json())
            })
        })
    }
}

export  default  setCookie;