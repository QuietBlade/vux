import instance  from './index.js';
import store from 'vuex'

export default{
    getAccount(data){
        return instance.get('/api/query.json',{params : data});
    },
    bindAccount(data){
        return instance.get('/api/bindAccount.json',{params: data});
    }
}