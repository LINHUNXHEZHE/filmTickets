/* 封装各个接口函数请求模块 */

import ajax from './ajax'

// 获取轮播数据
export const reqSwiperList = (cityId, pageNum, pageSize, type, k, header) => ajax('/gateway', { cityId, pageNum, pageSize, type, k }, header)

// 获取数据
// type = 1 获取 nowplaying
// type = 2 获取 comingsoon
export const reqNowPlaying = (cityId, pageNum, pageSize, type, k, header) => ajax('/gateway', { cityId, pageNum, pageSize, type, k }, header)
export const reqComingSoon = (cityId, pageNum, pageSize, type, k, header) => ajax('/gateway', { cityId, pageNum, pageSize, type, k }, header)

// 获取电影详情
export const reqFilmDetail = (filmId, k, header) => ajax('/gateway', { filmId, k }, header)

// 获取城市
export const reqCitiesList = (k, header) => ajax('/gateway', { k }, header)

// 获取资讯 https://m.maizuo.com/gateway?actId=ElzMZU125260
export const reqInfoList = (actId, header) => ajax('/gateway', { actId }, header)

// 获取城市相关影院 https://m.maizuo.com/gateway?cityId=210300&ticketFlag=1&k=8853145
export const reqTicketFlag = (cityId, ticketFlag, k, header) => ajax('/gateway', { cityId, ticketFlag, k }, header)

// 获取验证码信息
export const reqChecking = (phone) => ajax('/gateway', { type: '1', mobile: phone, imgCode: '', imgKey: '' }, { 'X-Host': 'mall.user.sms-code.send' }, 'POST')

// 验证码校验
export const reqCheckLogin = (phone, sms) => ajax('/gateway', { mobile: phone, smsCode: sms, imgKey: '', imgCode: '', extra: {} }, { 'X-Host': 'mall.user.sms-code-login' }, 'POST')
