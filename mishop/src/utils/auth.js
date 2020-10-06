import Cookies from 'js-cookie'

const TokenKey = 'token'

export function setToken(token) {  //设置token
    return Cookies.set(TokenKey,token)
}

export function getToken() {   //获取token
    return Cookies.get(TokenKey)
}

export function removeToken() {  // 移除token
    return Cookies.remove(TokenKey)
}