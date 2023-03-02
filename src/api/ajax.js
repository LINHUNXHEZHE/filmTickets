/* 封装ajax数据请求模块 —— axios封装 */
import axios from 'axios'

export default function ajax (url, data = {}, header, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    /* GET */
    if (type === 'GET') {
      let dataStr = '' // 待拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios({ url, method: type, headers: header })
    } else {
    /* POST */
      promise = axios({ url, data, headers: header, method: type })
    }
    //   return promise
    promise
    /* success */
      .then((res) => {
        resolve(res.data)
      })
    /* fail */
      .catch((err) => {
        reject(err)
      })
  })
}
