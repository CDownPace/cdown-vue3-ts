import fetch from './fetch'

export const getGoodsList = (data: any) => fetch('h5/goods/list','GET', data)