import React from 'react'
import axios from 'axios'

const get = (option) => {
     return new Promise ((resolve,reject)=>{
         axios({
             url:option.url,
             method:option.type||'post',
             data:option.data||{},
             withCredentials:option.withCredentials || true,
             timeout:8000,
             baseURL:option.baseURL,
         }).then((response)=>{
             // console.log(response)
             if(response.status==200){
                 let result = response.data
                 if(result.error){
                     alert(result.error.message)
                 }
                 resolve(result)
             }else {
                 reject(response.data)
             }
         }).catch((error)=>{
             console.error(`request URL ${error}`)
         })
     })
 }

export default get;