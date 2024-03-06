type method = 'GET' | 'POST' | 'upload'
export interface IModels {
    'common/sms': {
        Req: {
          /**
           * 手机号码
           */
          tel: string
        }
        method: method
        Res: {
          code: string
          data: {
            code: number
          }
        }
      },
      'h5/goods/list': {
        Req: {
          page?: number
          size?: number
          keyword?: string
        }
        method: method
        Res: {
          code: string
          data: {
            list: {
              id: number
              imageUrl: string
              price: string
              title: string
            }[]
            count: number
          }
        }
      }
}