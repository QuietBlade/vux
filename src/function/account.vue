<script>
import Vuex from 'vuex'
import Vux from 'vux'
import Vue from 'vue'
import axios from 'axios'


var account = {
    status : '1'
}



export default {
    getUserAccount(params) {
        return Vue.http.get('/api/query.json?openid=' + params)
        .then( resolve => {
            return Promise.resolve(resolve.data)
          },
          reject => {
              return Promise.reject(reject)
          }
        )
        return res;
    },
    getUserAccount1(params){
        axios('/api/query.json',params).than( response =>{
            console.log(response)
        }).catch(err=>{
            console.log(err)
        })
    }
    ,status: "1"
}

</script>