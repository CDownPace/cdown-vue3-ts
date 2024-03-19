import axios from 'axios'
export default {

    async mounted(el:any,binding:any){
        console.log('222')
        console.log('binding',binding)
        console.log('el',el.src)
        const response:any = await axios({
            baseURL: 'api',
            method: "get",
            url:binding.url,
            // url: '/_uploads/media/7e61932ab3b240879b89a971d9ca2480.png?nonce=1705995551913',
            responseType: 'blob',
            
        });
        if(response) {
            console.log('response', response)
            //  el.src = window.URL.createObjectURL(response);  //赋值到src上
        }
    }

}