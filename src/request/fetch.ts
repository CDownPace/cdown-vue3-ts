import router from '@/router'
import axios from 'axios'
import { IModels } from './reuire'
const ENV = import.meta.env.VITE_SERVER_URL


axios.interceptors.response.use(
    (res) => {
    console.log('res-data',res)
      if (res.data.code === 111) {
        sessionStorage.setItem("token", ""); // token过期操作
      }
      return res;
    },
    (error) => {
    console.log('error-data',error)
      let res = null;
      if (error.response) {
        switch (error.response.status) {
          case 401:
            router.replace({ name: "404" });
            break;
          case 403:
            router.replace({ name: "404" });
            break;
        }
        res = error.response;
      }
      return Promise.reject(res);
    },
  );
export default async function<T extends keyof IModels>(
    url:T,
    method:IModels[T]['method'],
    params:IModels[T]['Req']
    ):Promise<IModels[T]['Res']['data']> {
        console.log('go...')
        return new Promise((resolve,reject)=>{
            let userDate:string = ''
            axios({
                baseURL: ENV,
                url:url,
                params:method =='GET'? params:{},
                data:method =='POST'? params:{},
                responseType:'json',
                headers:{
                    Authorization: userDate || '',
                }
            }).then(res =>{
                resolve(res.data.data)
            }).catch((err) => {
                reject(err.data);
              });
        })
    
}